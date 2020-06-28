$(document).ready(function() {
    $('#menu').slicknav();
});

$(function() {
    $('.m-button').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('.paginations').offset().top }, 700);
        e.preventDefault();
    });
});

function yandex_map_initialization(map_id) {
    // Как только будет загружен API и готов DOM, выполняем инициализацию
    var map_id
    ymaps.ready(init);
    function init () {
        var myMap = new ymaps.Map(map_id, {
                center: [55.6474091, 37.7167128],
                zoom: 14,
                controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
            }),

        // Создаем метку и задаем изображение для ее иконки
            myPlacemark = new ymaps.Placemark([55.6474091, 37.7207128], {
                balloonContent: 'г. Москва, Новочеркасский бульвар 20, офис 17'
            }, {
                iconImageHref: 'http://api.yandex.ru/maps/doc/jsapi/2.x/examples/images/myIcon.gif', // картинка иконки
                iconImageSize: [30, 42], // размеры картинки
                iconImageOffset: [-3, -42] // смещение картинки
            });

        // Добавление метки на карту
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    }
}



$( function() {
  yandex_map_initialization(map)
  yandex_map_initialization(map2)
  yandex_map_initialization(map3)
  yandex_map_initialization(map4)
});


jQuery('.more-np').click(function(e) {
    jQuery('.hide-m').slideToggle('');
    jQuery('.more-np').toggleClass("str-full");
    e.preventDefault();
});


$(function() {
    $('.qv-area').tooltip({
        position: {
            my: "center bottom-20",
            at: "center top",
            using: function(position, feedback) {
                $(this).css(position);
                $("<div>")
                    .addClass("arrow")
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });
});



$(function() {
    $("#accordion").accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });
});





$(function() {
    $("#tabs").tabs();
});



$(function() {
    //main nav
    $(window).on('scroll load', function() {
        updateMainNav();
    });

    function updateMainNav() {
        if ($(window).scrollTop() >= 153) {
            $('body').addClass('minimize-menusv');
        } else {
            $('body').removeClass('minimize-menusv');
        }
    }

    $('.user-nav > a').on('click', function() {
        $('body').toggleClass('show-user-nav');
    });

    $(document).on('click', function(event) {
        $('body').removeClass('show-user-nav');
    });

    $('.collapse-main-nav').on('click', function() {
        if ($('body').toggleClass('show-main-nav').hasClass('show-main-nav')) window.scrollTo(0, 0);
        return false;
    });

});



$(function() {
    // прячем кнопку #back-top
    $("#back-top").hide();

    // появление/затухание кнопки #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // при клике на ссылку плавно поднимаемся вверх
        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});



$(function() {
    $('input,textarea').focus(function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', '');
    });
    $('input,textarea').blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });
});



/**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');

        // Dividing by two centers the modal exactly, but dividing by three
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});






(function($) {
    $(function style_select_input() {
        $('input, select').styler({
            selectSearch: true
        });
    });
})(jQuery);



$(function() {
    $('.single-item').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    });




    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        responsive: [{
                breakpoint: 400,
                settings: {
                    variableWidth: false,
                }
            },

        ]
    });


    $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 502,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]
    });



    $('.responsive-dr').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 502,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]
    });



    $('.responsive-n').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            }, {
                breakpoint: 750,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 502,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
        ]
    });


    $('.rty').click(function() {
        $('.responsive').slick('setPosition');
    });

    $('.rty2').click(function() {
        $('.responsive').slick('setPosition');
    });

    $('.responsive2').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});