(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();

    (function(){
        emailjs.init({
          publicKey: "gSik_QlHA2ix8XaZc",
        });
     })();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });

    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Project and Testimonial carousel
    $(".project-carousel, .testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    $(document).ready(function(){
        $('#submit-button').click(function(event){
            event.preventDefault();

            $('.error-label').hide();
            $('.form-control').removeClass('error-input');

            var valid = true;

            if($('#name').val().trim() === ''){
                $('#name-error').show();
                $('#name').addClass('error-input');
                valid = false;
            }
            if($('#mail').val().trim() === ''){
                $('#mail-error').show();
                $('#mail').addClass('error-input');
                valid = false;
            }
            if($('#mobile').val().trim() === ''){
                $('#mobile-error').show();
                $('#mobile').addClass('error-input');
                valid = false;
            }
            if($('#service').val().trim() === ''){
                $('#service-error').show();
                $('#service').addClass('error-input');
                valid = false;
            }
            if($('#message').val().trim() === ''){
                $('#message-error').show();
                $('#message').addClass('error-input');
                valid = false;
            }

            if(valid){
                var templateParams = {
                    name: $('#name').val(),
                    mail: $('#mail').val(),
                    mobile: $('#mobile').val(),
                    service: $('#service').val(),
                    message: $('#message').val()
                };

                emailjs.send('service_ukccpdf', 'template_6v7uewn', templateParams)
                    .then(function(response) {
                        alert('Correo enviado con éxito');
                        console.log('SUCCESS!', response.status, response.text);
                    }, function(error) {
                        alert('Error al enviar el correo');
                        console.log('FAILED...', error);
                    });
            }
        });
    });
    
})(jQuery);

