var course = window.opener.$('body').data("course");
console.log(course);
var players = window.opener.$('body').data('players');
console.log(players);

$(window).load(function() {


    makeTable();

});

function makeTable() {

    tableBody1 = $('#table1-body');
    tableBody2 = $('#table2-body');

    tableBody1.append('<tr class="row-a-par light"><th>Par</th></tr>');
    for(var i = 0; i < 9; i++) {
        $('.row-a-par').append('<th>'+ course.course.holes[i].tee_boxes[0].par + '</th>')
    }


    if(course.course.holes.length > 9) {


        tableBody2.append('<tr class="row-b-par light"><th>Par</th></tr>');
        for(var i = 9; i < 18; i++) {
            $('.row-b-par').append('<th>'+ course.course.holes[i].tee_boxes[0].par + '</th>')
        }

    } else {
        tableBody2.hide();
    }

    for(var key in players) {
        if(!String(key).includes('playerCount')) {
            tableBody1.append('<tr class="'+ key + '-row player"><th>'+ players[key].name + '</th></tr>');
            tableBody2.append('<tr class="'+ key + '-row player"><th>'+ players[key].name + '</th></tr>');
            for(var i = 0; i < 9; i++) {
                $('.' +key+'-row').append('<td><input type="text"></td>');
            }
        }
    }


}

