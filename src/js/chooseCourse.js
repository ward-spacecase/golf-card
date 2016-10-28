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
            try {
                golfHttp(latitude, longitude);
            } catch(error) {

            }
                output.html();

    }

    function error() {
        output.html("Unable to retrieve your location");

    }

    navigator.geolocation.getCurrentPosition(success, error);
}

function golfHttp(lat, long) {
    var xhr = new XMLHttpRequest();

    var formData = new FormData();
    formData.append('city', 'Lehi');
    formData.append('latitude', lat);
    formData.append('longitude', long);
    formData.append('radius', 50);

    xhr.onreadystatechange = function () {

        console.log(this.readyState + '  ' + this.status);

        if(this.readyState == 4 && this.status == 200) {
            console.log(xhr.responseText);
            var jsonReply = JSON.parse(xhr.responseText);

            $("body").data( "userData", jsonReply);     //send response to new page


            $( '.modal-body' ).html('<h1>' + jsonReply.course.name +
                '</h1><hr class="style18"><h2>' + jsonReply.course.city + ', ' + jsonReply.course.state_or_province +
                '</h2><h3>' + jsonReply.course.addr_1 + '</h3>');

            $('#choose').removeClass('disabled btn-default', 1000, 'swing');
            $('#choose').addClass('btn-success')

        }
    };
    xhr.open("GET", "https://golf-courses-api.herokuapp.com/courses/11819", false);
    // xhr.open("POST", "https://golf-courses-api.herokuapp.com/courses/search", false);
    xhr.setRequestHeader('contentType', 'application/json');

        xhr.send();
        // xhr.send(formData);

}


function startCourse() {
    window.open('showCourse.html')
}


