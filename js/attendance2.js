function calcAtt() {
    members.sort(function (a, b) {
        return parseFloat(a.missed_votes_pct) - parseFloat(b.missed_votes_pct);
    });
    bottomTenAtt();
    topTenAtt();
}

function topTenAtt() {
    var tenPerc = Math.ceil(members.length / 10);
    for (var i = 0; i < tenPerc; i++) {
        var row = document.querySelector("#topAtt10").insertRow(i);
        makeAttRow(i, row);
    }
}

function bottomTenAtt() {
    var tenPerc = Math.ceil(members.length / 10);
    var stopAt = members.length - tenPerc;
    var k = 0;
    for (var i = members.length - 1; i >= stopAt; i--) {
        var row = document.querySelector("#botAtt10").insertRow(k);
        makeAttRow(i, row);
        k++;
    }
}

function makeAttRow(i, row) {
    for (var j = 0; j < 3; j++) {
        var cell = row.insertCell(j);
        cell.innerHTML = makeAttCell(i, j);
    }
}

function makeAttCell(i, j) {
    if (j == 0) {
        return '<a href="' + members[i].url + '">' + fullName(i) + '</a>';
    } else if (j == 1) {
        return members[i].missed_votes;
    } else {
        return members[i].missed_votes_pct;
    }
}

function fullName(i) {
    if (members[i].middle_name == null) {
        return members[i].first_name + " " + members[i].last_name;
    } else {
        return members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;
    }
}
