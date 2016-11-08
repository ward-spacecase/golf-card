var userData = window.opener.$('body').data("userData");

$(window).load(function() {


    makeTable();

});

function makeTable() {
    tableBody1 = $('#table1-body');
    tableBody2 = $('#table2-body');

    for(var rows = 1; rows <= 3; rows++) {

        var color = 'black';

        switch(rows) {
            case 1:
                color = 'Blue';
                break;
            case 2:
                color = 'White';
                break;
            case 3:
                color = 'Red';
                break;
        }
        tableBody1.append('<tr id="row-a-' + rows + '" style="background-color: ' + color + '"><th>' + color + '</th></tr>');
        tableBody2.append('<tr id="row-b-' + rows + '" style="background-color: ' + color + '"><th>' + color + '</th></tr>');

        for (var i = 0; i < userData.course.holes.length - 9; i++) {
            $('#row-a-' + rows).append('<td>' + userData.course.holes[i].tee_boxes[rows].yards + '</td>');
            $('#row-b-' + rows).append('<td>' + userData.course.holes[i+9].tee_boxes[rows].yards + '</td>');
        }
        $('#row-a-' + rows).append('<td></td>');
        $('#row-b-' + rows).append('<td></td>');
    }
    $('#row-a-2, #row-b-2').css('color', 'black');

    color = '#8f470a';
    tableBody1.append('<tr id="row-par-a" style="background-color: ' + color + '"><th>Par</th></tr>');
    tableBody2.append('<tr id="row-par-b" style="background-color: ' + color + '"><th>Par</th></tr>');

    for(var parHole = 0; parHole < userData.course.holes.length - 9; parHole++) {
        $('#row-par-a').append('<td>' + userData.course.holes[parHole].tee_boxes[0].par + '</td>');
        $('#row-par-b').append('<td>' + userData.course.holes[parHole+9].tee_boxes[0].par + '</td>');

    }
    $('#row-par-a').append('<td></td>');
    $('#row-par-b').append('<td></td>');

}

