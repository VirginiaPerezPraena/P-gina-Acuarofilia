$(document).ready(function () {
    $("body").hide().fadeIn(1000);
    $("#imagen-cantante").delay(2000).mouseover(1, function () {
        $(this).addClass('flipped').show()
            .animate({
                left: 1600 + "px",
                top: 2370 + "px"
            }, 5000, 'linear');
    })

    $("#cantando-perfil").delay(2000).mouseover(1, function () {
        $(this).addClass('flipped').show()
            .animate({
                left: 1600 + "px",
                top: 2370 + "px"
            }, 5000, 'linear');
    })

    $("#logo-principal").delay(2000).mouseover(1, function () {
        $(this).addClass('flipped').show()
            .animate({
                left: 1600 + "px",
                top: 2370 + "px"
            }, 5000, 'linear');
    })

    $("#flip").delay(2000).mouseover(1, function () {
        $(this).addClass('flipped').show()
            .animate({
                left: 1600 + "px",
                top: 2370 + "px"
            }, 5000, 'linear');
    })

    $("#flip2").delay(2000).mouseover(1, function () {
        $(this).addClass('flipped').show()
            .animate({
                left: 1600 + "px",
                top: 2370 + "px"
            }, 5000, 'linear');
    })

    $("#flip3").delay(2000).mouseover(1, function () {
        $(this).addClass('flipped').show()
            .animate({
                left: 1600 + "px",
                top: 2370 + "px"
            }, 5000, 'linear');
    })

    $("#flip4").delay(2000).mouseover(1, function () {
        $(this).addClass('flipped').show()
            .animate({
                left: 1600 + "px",
                top: 2370 + "px"
            }, 5000, 'linear');
    })

    $("#flip5").delay(2000).mouseover(1, function () {
        $(this).addClass('flipped').show()
            .animate({
                left: 1600 + "px",
                top: 2370 + "px"
            }, 5000, 'linear');
    })

    $(function () {

        var html = $('html');

        // On Screen

        $.fn.isOnScreen = function () {
            var elementTop = $(this).offset().top,
                elementBottom = elementTop + $(this).outerHeight(),
                viewportTop = $(window).scrollTop(),
                viewportBottom = viewportTop + $(window).height();
            return elementBottom > viewportTop && elementTop < viewportBottom;
        };

        function detection() {
            for (var i = 0; i < items.length; i++) {
                var el = $(items[i]);

                if (el.isOnScreen()) {
                    el.addClass("in-view");
                    setTimeout(function () {
                        this.removeAttr('data-animate-in');
                    }.bind(el), 800);
                } else {
                    el.removeClass("in-view");
                }
            }
        }

        var items = document.querySelectorAll(
                "*[data-animate-in], *[data-detect-viewport]"
            ),
            waiting = false,
            w = $(window);

        w.on("resize scroll", function () {
            if (waiting) {
                return;
            }
            waiting = true;
            detection();

            setTimeout(function () {
                waiting = false;
            }, 100);
        });

        $(document).ready(function () {
            setTimeout(function () {
                detection();
            }, 500);

            for (var i = 0; i < items.length; i++) {
                var d = 0,
                    el = $(items[i]);
                if (items[i].getAttribute("data-animate-in-delay")) {
                    d = items[i].getAttribute("data-animate-in-delay") / 1000 + "s";
                } else {
                    d = 0;
                }
                el.css("transition-delay", d);
            }
        });
    });

})