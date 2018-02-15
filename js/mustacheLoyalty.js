/* Problems:
Full name and number of voted need scripts and scripts do not work in the mustache template
If scripts cannot be put in Mustache template, then there will have to be functions that calculate these two values and appending them to each member value.

If functions are calulating and then appending values to each member, the utility of mustache seems moot.

Should mustache only bu used with data where calculations dont have to be made. On github, examples of functions already exist in objects which data is being gathered from.
*/


var loyaltyTemplate = '<tr><td><a href="' + 'https://www.flickr.com/services/' + '">' + memberName() + '</a></td><td>' + numberVotWParty() + '</td><td>' + percWParty() + '</td><tr>';
//var loyaltyTemplate = '{{first_name}}';

function makeBottom10LoyaltyTable(members) {
    $.each(members, function (i, member) {
        // Put functons and variables for innerHTML values here
        $('#botLoy10').append(Mustache.render(loyaltyTemplate, member));
        //        $('#botLoy10').append('<td>' + members[3].first_name + '</td>');
    });
}

function memberName() {
    //    if (this.middle_name != null) {
    return '{{first_name}} {{middle_name}} {{last_name}}';
    //    } else {
    //    return 'no middle name '
    //    }
}

function numberVotWParty() {
    //return parseFloat('{{votes_with_party_pct}}') / parseFloat('{{total_votes}}');
    return parseFloat('{{votes_with_party_pct}}');
}

function percWParty() {
    return '{{votes_with_party_pct}}';
}
