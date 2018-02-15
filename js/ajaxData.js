var members2ndGroup;
window.addEventListener("load", function (event) {
    //console.log('loaded');
});

$.getJSON("https://nytimes-ubiqum.herokuapp.com/congress/113/house", function (data) {
    var members = data.results[0].members;
    genTable(genStats(members));
    makeBottom10LoyaltyTable(members);
    colorboxLinks();
});

/*
$.getJSON("http://congress.api.sunlightfoundation.com/legislators?chamber=house&per_page=all&apikey=837ea94f520b43a0825be5db3b44a39b", function (data) {
    // NOT ALLOWED ???
    console.log(data);
    members2ndGroup = data.results;
});
*/
