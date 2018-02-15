//document.getElementsByTagName("header")[0].innerHTML = JSON.stringify(dataSenate,null,2)
var states = [ "ALL", "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]

for (var i=0;i<states.length;i++){
    var option = document.createElement("option");
    option.setAttribute("value", states[i]);
    option.innerText = states[i];
    document.querySelector("#states").appendChild(option);
}

for (var i=0;i<dataSenate.results[0].members.length;i++) {
    var row = document.querySelector(".putData").insertRow(i);
    row.className = dataSenate.results[0].members[i].party + " " + dataSenate.results[0].members[i].state;
    
for (var j=0;j<5;j++) {
        //var myCell = document.createElement("td");
        var cell = row.insertCell(j);
        var cellText = populate(j);
            if (j=="0") {
                cell.innerHTML = '<a href="' + dataSenate.results[0].members[i].url + '">' + cellText + '</a>';
            } else {
                cell.innerHTML = cellText;
            }
    }
}
// Use (... || "") to avoid null's in the table, like the middle name.
function populate(j){
    if (j == "0") {
        if (dataSenate.results[0].members[i].middle_name == null) {
            return dataSenate.results[0].members[i].first_name + " " + dataSenate.results[0].members[i].last_name;
        } else {
            return dataSenate.results[0].members[i].first_name + " " + dataSenate.results[0].members[i].middle_name + " " + dataSenate.results[0].members[i].last_name;
        }
    } else if (j == "1") {
        return dataSenate.results[0].members[i].party;
    } else if (j == "2") {
        return dataSenate.results[0].members[i].state;
    } else if (j == "3") {
        return dataSenate.results[0].members[i].seniority;
    } else {
        return dataSenate.results[0].members[i].votes_with_party_pct;
    }
}

var filterReps = document.getElementsByTagName("input")[0];
var filterDems = document.getElementsByTagName("input")[1];
var filterInds = document.getElementsByTagName("input")[2];
filterReps.onclick = filterParty;
filterDems.onclick = filterParty;
filterInds.onclick = filterParty;

var filtered = false;

function filterParty(){
var reps = document.getElementsByTagName("input")[0].checked;
var dems = document.getElementsByTagName("input")[1].checked;
var inds = document.getElementsByTagName("input")[2].checked;
    if(this.checked){
        if(filtered){
            if (reps&&dems&&inds) {
                unfilterParty();
            }
            else { 
                checkParty(this.value, this.checked);
            }
        } else {
            filterPartyAll();
            filtered = true;
            checkParty(this.value, this.checked);
        }
    } else {
        if (!reps&&!dems&&!inds) {
            unfilterParty();
            filtered = false;
        } else {
            checkParty(this.value, this.checked);
        }
    }
}
function checkParty(party, checkedBoolean){
    var members = document.querySelectorAll("."+party+"");
    if(checkedBoolean==true){
        for (var i = 0;i<members.length;i++){
        members[i].className = members[i].className.replace(' noDisplayP', '');
        }
    } else {
        for (var i = 0;i<members.length;i++){
        members[i].className = members[i].className + ' noDisplayP';
        }
    }
}
function filterPartyAll(){   
    var members = document.querySelectorAll('tr:not(.head)');
    for (var i = 0;i<members.length;i++){
        members[i].className = members[i].className + ' noDisplayP';
    }
}
function unfilterParty(){   
    var members = document.querySelectorAll('tr:not(.head)');
    for (var i = 0;i<members.length;i++){
        members[i].className = members[i].className.replace(' noDisplayP', '');
    }
}

function filterState(){
    unfilterState();
    var state = document.getElementById("states").value;
    if (state == "ALL"){
    }
    else {
        stateReps = document.querySelectorAll('tr:not(.' + state + '):not(.head)');
        //return stateReps;
        for (var i = 0;i<stateReps.length;i++){
        stateReps[i].className = stateReps[i].className + ' noDisplayS';
    }
    }
}
function unfilterState(){
    var allReps = document.querySelectorAll('tr:not(.head)');
    for (var i = 0;i<allReps.length;i++){
        allReps[i].className = allReps[i].className.replace(' noDisplayS', '');
    }
}

// Sets Table body height
/*var bodyH = window.innerHeight * .4;
document.getElementsByTagName("tbody")[0].style.height = bodyH + 'px';
window.addEventListener("resize", setTBodYHeight);
function setTBodYHeight(){
    console.log("resized");
    var bodyH = window.innerHeight * .4;
    document.getElementsByTagName("tbody")[0].style.height = bodyH + 'px';
}*/