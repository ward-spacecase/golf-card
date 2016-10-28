var userData = window.opener.$('body').data("userData");

$(window).load(function() {

console.log(userData);
    $( '#myModal' ).modal('show');
});

