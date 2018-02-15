function countParty(party) {
    var number = 0;
    for (var i = 0; i < members.length; i++) {
        if (members[i].party == party) {
            number++;
        }
    }
    return number;
}

function calcPercWith(party) {
    num = countParty(party);
    var cumulative = 0;
    for (var i = 0; i < members.length; i++) {
        if (members[i].party == party) {
            cumulative = cumulative + parseFloat(members[i].votes_with_party_pct);
        }
    }
    return (cumulative / num).toFixed(2);
}

var statistics = {
    "data": [{
            "party": "Republican",
            "numMembers": countParty("R"),
            "votedWith": calcPercWith("R"),
                },
        {
            "party": "Democrat",
            "numMembers": countParty("D"),
            "votedWith": calcPercWith("D"),
                },
        {
            "party": "Independent",
            "numMembers": countParty("I"),
            "votedWith": calcPercWith("I"),
                },
        {
            "party": "All",
            "numMembers": members.length,
            "votedWith": ((countParty("R") * parseFloat(calcPercWith("R")) + countParty("D") * parseFloat(calcPercWith("D"))) / members.length).toFixed(2),
    }
    ]
}
countParty("R");
parseFloat(calcPercWith("R"));
countParty("D");
parseFloat(calcPercWith("D"));


function glanceTable() {
    for (var i = 0; i < 4; i++) {
        var row = document.getElementById("glance").insertRow(i);
        glanceRow(i, row);
    }
}

function glanceRow(i, row) {
    for (var j = 0; j < 3; j++) {
        var cell = row.insertCell(j);
        cell.innerText = glanceCell(i, j);
    }
}

function glanceCell(i, j) {
    if (j == 0) {
        return statistics.data[i].party;
    } else if (j == 1) {
        return statistics.data[i].numMembers;
    } else {
        return statistics.data[i].votedWith;
    }
}

glanceTable();
