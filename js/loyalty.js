var tenPerc = Math.ceil(members.length / 10);

function calcLoy() {
    members.sort(function (a, b) {
        return parseFloat(a.votes_with_party_pct) - parseFloat(b.votes_with_party_pct);
    });
    bottomTenLoy();
    topTenLoy();
}

function bottomTenLoy() {
    for (var i = 0; i < tenPerc; i++) {
        var row = document.querySelector("#botLoy10").insertRow();
        makeLoyRow(i, row);
    }
}

function topTenLoy() {
    var stopAt = members.length - tenPerc;
    var k = 0;
    for (var i = members.length - 1; i >= stopAt; i--) {
        var row = document.querySelector("#topLoy10").insertRow(k);
        makeLoyRow(i, row);
        k++;
    }
}

function makeLoyRow(i, row) {
    for (var j = 0; j < 3; j++) {
        var cell = row.insertCell(j);
        cell.innerHTML = makeLoyCell(i, j);
    }
}

function makeLoyCell(i, j) {
    if (j == 0) {
        return '<a href="' + members[i].url + '">' + fullName(i) + '</a>';
    } else if (j == 1) {
        return (parseFloat(members[i].total_votes) / 100 * parseFloat(members[i].votes_with_party_pct)).toFixed(2);
    } else {
        return members[i].votes_with_party_pct;
    }
}

function fullName(i) {
    if (members[i].middle_name == null) {
        return members[i].first_name + " " + members[i].last_name;
    } else {
        return members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;
    }
}

calcLoy();
