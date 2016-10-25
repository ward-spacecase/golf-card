$(window).load(function() {

    geoFindMe();

        $( '#myModal' ).modal('show');
        $('.modal-body').html('<i class="fa fa-spinner fa-pulse fa-4x"></i>');

});

function geoFindMe() {
    var output = $('.modal-body');

    if (!navigator.geolocation){
        output.html("<p>Geolocation is not supported by your browser</p>");
        return;
    }

    function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;

        output.html('<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>');

    };

    function error() {
        output.html("Unable to retrieve your location");
    };

    output.html("<p>Locating…</p>");

    navigator.geolocation.getCurrentPosition(success, error);
}




