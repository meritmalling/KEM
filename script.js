$( document ).ready(function() {

    $('.aboutnav').on('click', function(){
        $('.view').addClass('hide');
        $('.about').removeClass('hide');
    });

    $('.approachnav').on('click', function(){
        $('.view').addClass('hide');
        $('.approach').removeClass('hide');
    });

    $('.practicenav').on('click', function(){
        $('.view').addClass('hide');
        $('.practice').removeClass('hide');
    });

    $('.resultsnav').on('click', function(){
        $('.view').addClass('hide');
        $('.results').removeClass('hide');
    });

});