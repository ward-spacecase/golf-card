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

            var domUpdate = golfHttp(latitude, longitude);

                console.log(domUpdate);
                output.html();

    };

    function error() {
        output.html("Unable to retrieve your location");

    };

    navigator.geolocation.getCurrentPosition(success, error);
}

function golfHttp(lat, long) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {

        console.log(this.readyState + '  ' + this.status);

        if(this.readyState == 4 && this.status == 200) {
            console.log(xhr.responseText);
            var jsonReply = JSON.parse(xhr.responseText);

           if(jsonReply.meta.courses.total <= 0) {
               return '<h1>No courses found</h1> <form><label for="city">City: </label><input type="text" name="city">' +
                   ' <button type="submit" class="btn btn-primary"></button></form>';
           }
        }
    };
    xhr.open("POST", "https://golf-courses-api.herokuapp.com/courses/search", false);
    xhr.setRequestHeader('contentType', 'application/json');
        xhr.send({
            latitude: lat,
            longitude: long,
            radius: '50',
        });

}




