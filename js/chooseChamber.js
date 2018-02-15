var members;

function chooseChamber(chamber) {
    if (chamber == "House") {
        members = dataHouse.results[0].members;

    } else if (chamber == "Senate") {
        members = dataSenate.results[0].members;
    }
}

/*
FOR FILTERING PARTIES

for (var i = 0; i < membersAll.length; i++) {
    if (membersAll[i].party == "R") {
        members.push(membersAll[i]);
    }
}
*/
