function editName (element) {

    $('#input-' + element).val(name).css({'margin-left': '5px', 'margin-right': '15px'}).focus().select().attr('onfocusout','editNameOut(this.id)');
}


function editNameOut(elementId) {
    var newName = $('#' + elementId).val();
    $('#' + elementId).prev().prev().html(newName);
    $('#' + elementId).remove().prev().remove().prev().show();
}


var Player = function(playerNumber) {

  this.playerNumber = playerNumber;
    this.name = 'player';

};

Player.prototype.editName = function () {
    $('#player-name' + this.playerNumber).hide();
    $('#input-' + this.playerNumber).show().val(this.name).focus().select().prev().show();
};



Player.prototype.addPlayer = function (results) {

    console.log('addPlayer');
    console.log(results);
    $('.modal-body').append('<div class="player" id="player'+ this.playerNumber + '"></div>');

    $('#player' + this.playerNumber ).append('<i class="fa fa-check-square" aria-hidden="true"></i><input type="text" id="input-' + this.playerNumber +
        '"><span id="player-name' + this.playerNumber + '">Player' + this.playerNumber +
        '</span> <select name="courses" id="tee-type-select' +
        this.playerNumber + '"></select><i class="fa fa-times" aria-hidden="true" style="margin-left: 10px;"></i>');

    $('#player-name' + this.playerNumber).attr('onclick', 'playerCount['+ this.playerNumber + '-1].editName()');

    $('#input-'+this.playerNumber).hide().prev().hide();


    this.name = $('#player-name' + this.playerNumber).html();

    for(var i = 0; i < results.course.holes[0].tee_boxes.length; i++) {
        if(results.course.holes[0].tee_boxes[i].tee_type != 'auto change location')
            $('#tee-type-select' + this.playerNumber).append('<option value="' + i + '">'+ results.course.holes[0].tee_boxes[i].tee_type + '</option>');
    }
};