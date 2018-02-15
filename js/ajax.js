var members;

window.addEventListener("load", function (event) {
    console.log('loaded');
});

$.getJSON("https://nytimes-ubiqum.herokuapp.com/congress/113/house", function (data) {
    members = data.results[0].members;
    //var members2 = data.results[0].members;
    calcAtt();
});




/*

function makeData(data) {
    var items = [];

    $.each(data, function (key, val) {
        items.push("<li id='" + key + "'>" + val + "</li>");
    });

    $("<ul/>", {
        "class": "my-new-list",
        html: items.join("")
    }).appendTo("body");
}
*/
