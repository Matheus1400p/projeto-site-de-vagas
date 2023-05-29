$( document ).ready(function() {

    var btnMenuMobile = $('.btn-menumobile');

    $(btnMenuMobile).on('click', function() {

        $('.navegador ul').toggleClass('open');
    });

});
