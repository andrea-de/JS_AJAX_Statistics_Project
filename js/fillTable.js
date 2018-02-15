function makesStatesList() {
    var statesArray = [];
    for (var i = 0; i < members.length; i++) {
        if (statesArray.includes(members[i].state)) {

        } else {
            statesArray.push(members[i].state);
        }
    }
    statesArray.sort();
    statesArray.splice(0, 0, "ALL")
    return statesArray;
}

var states = makesStatesList();

for (var i = 0; i < states.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", states[i]);
    option.innerText = states[i];
    document.querySelector("#states").appendChild(option);
}

var filterReps = document.getElementsByTagName("input")[0];
var filterDems = document.getElementsByTagName("input")[1];
var filterInds = document.getElementsByTagName("input")[2];
var filterStateSelector = document.querySelector("#states");

filterReps.onclick = createTable;
filterDems.onclick = createTable;
filterInds.onclick = createTable;
filterStateSelector.onchange = createTable;

var tableBody = document.querySelector(".putData")

function createTable() {
    tableBody.innerHTML = '';
    var filterState = filterStateSelector.value;
    var filterPartyArray = createPartyArray();
    for (var i = 0; i < members.length; i++) {
        checkFilter(i, filterState, filterPartyArray);
    }
}

function createPartyArray() {
    var returnArray = [];
    if (!filterReps.checked && !filterDems.checked && !filterInds.checked) {
        returnArray.push("R", "D", "I");
    }
    if (filterReps.checked) {
        returnArray.push("R");
    }
    if (filterDems.checked) {
        returnArray.push("D");
    }
    if (filterInds.checked) {
        returnArray.push("I");
    }
    return returnArray;
}

function checkFilter(i, State, partyArray) {
    if ((State == "ALL") || State == members[i].state) {
        if (partyArray.includes(members[i].party)) {
            var row = tableBody.insertRow();

            makeRow(i, row);
        }
    }
}

function makeRow(i, row) {
    for (var j = 0; j < 5; j++) {
        var cell = row.insertCell(j);
        cell.innerHTML = makeCell(i, j);
    }
}

function makeCell(i, j) {
    if (j == 0) {
        return '<a href=' + members[i].url + '>' + fullName(i) + '</a>';
    } else if (j == 1) {
        return members[i].party;
    } else if (j == 2) {
        return members[i].state;
    } else if (j == 3) {
        return members[i].seniority;
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

createTable();
