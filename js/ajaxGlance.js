function countParty(members, party) {
    var number = 0;
    $.each(members, function (i, member) {
        if (member.party == party) {
            number++;
        }
    });
    return number;
}

function calcPercWith(members, party) {
    num = countParty(members, party);
    var cumulative = 0;
    $.each(members, function (i, member) {
        if (member.party == party) {
            cumulative = cumulative + parseFloat(member.votes_with_party_pct);
        }
    });
    return (cumulative / num).toFixed(2);
}

function averageVotes(members) {

    var cumulative = 0;
    $.each(members, function (i, member) {
        cumulative = cumulative + parseFloat(member.votes_with_party_pct);
    });
    var averageeVotedWith = (cumulative / members.length).toFixed(2);
    return averageeVotedWith;
}

function genStats(members) {
    var statistics = {
        "data": [{
                "party": "Republican",
                "numMembers": countParty(members, "R"),
                "votedWith": calcPercWith(members, "R"),
                },
            {
                "party": "Democrat",
                "numMembers": countParty(members, "D"),
                "votedWith": calcPercWith(members, "D"),
                },
            {
                "party": "Independent",
                "numMembers": countParty(members, "I"),
                "votedWith": calcPercWith(members, "I"),
                },
            {
                "party": "ALL",
                "numMembers": members.length,
                "votedWith": averageVotes(members),
                //((countParty("R") * parseFloat(calcPercWith("R")) + countParty("D") * parseFloat(calcPercWith("D"))) / membersSum(members)).toFixed(2),
        }]
    }
    return statistics;
}


function genTable(object) {
    $.each(object.data, function (i, item) {
        makeRow(i, item);
    });
}

function makeRow(i, item) {
    $('#glance').append('<tr>' + makePartyCell(item) + makeNumberCell(item) + makeVotedCell(item) + '</tr>');
}

function makePartyCell(item) {
    return '<td>' + item.party + '</td>';
}

function makeNumberCell(item) {
    return '<td>' + item.numMembers + '</td>';
}

function makeVotedCell(item) {
    return '<td>' + item.votedWith + '</td>';
}
