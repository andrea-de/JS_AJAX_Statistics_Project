var combined = [];
var members1 = dataHouse.results[0].members;
var members2 = houseData.results;


function combine() {
    for (var i = 0; i < members1.length; i++) {
        var id1 = members1[i].id;
        var found = false;
        for (var j = 0; j < members2.length; j++) {
            var id2 = members2[j].bioguide_id;
            if (id1 === id2) {
                found = true;
                addMember(i, j);
            }
        }
        if (found === false) {
            combined.push(members1[i]);
        }
    }
    residual(members2);
}

function addMember(i, j) {
    var member = Object.assign({}, members2[j], members1[i]);
    combined.push(member);
}

function residual(obj) {
    for (let i = 0; i < obj.length; i++) {
        var id2 = members2[i].bioguide_id;
        var found = false;
        for (let j = 0; j < combined.length; j++) {
            if (id2 === combined[j].bioguide_id) {
                found = true;
            }
        }
        if (found === false) {
            combined.push(obj[i]);
        }
    }
}

combine();

function fullNames(obj) {
    for (var i = 0; i < obj.length; i++) {
        var fullName;
        if (obj[i].middle_name === null) {
            fullName = obj[i].first_name + ' ' + obj[i].last_name;
        } else {
            fullName = obj[i].first_name + ' ' + obj[i].middle_name + ' ' +
                obj[i].last_name;
        }
        obj[i]["full_name"] = fullName;
    }
}

fullNames(combined);

var combinedTableTemplate = '<tr><td>' + '{{full_name}}' + '</td><td>' + '{{birthday}}' + '</td><td>' + '{{gender}}' + '</td></tr>';

function makeTable() {
    $.each(combined, function (i, member) {
        $('#topLoy10').append(Mustache.render(combinedTableTemplate, member));
    });
}

makeTable();

$.each(combined, function (i, member) {})
