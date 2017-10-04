$(document).on('ready', function() {
          $('.slider').slick({
              dots: true,
              infinite: false,
              speed: 700,
              autoplay: true,
              slidesToShow: 1
            });
        });

        $(window).scroll(function() {  

            var scroll = $(window).scrollTop();
            if (scroll >= 170) {
                $("header").find(".small-logo").addClass("show-logo");
            } else {
                $("header").find(".small-logo").removeClass("show-logo");
            }
             if (scroll >= 370) {
                $("header").find(".small-logo").addClass("show-pics");
            } else {
                $("header").find(".small-logo").removeClass("show-pics");
            }
             
        });


        $(document).ready(function () {
            var height= $(window).innerHeight();
            $(".banner").css({height: height - $("header").innerHeight()});
            // show more
            $(".showmore").click(function(){
                $(".show").toggleClass("more");
            });
        });
        $(window).resize(function () {
            var height= $(window).innerHeight();
            $(".banner").css({height: height - $("header").innerHeight()});
        });


        $(document).ready(function () {
            $(document).on("scroll", onScroll);
            
            //smoothscroll
            $('nav li a[href^="#"]').on('click', function (e) {
                e.preventDefault();
                $(document).off("scroll");
                
                $('a').each(function () {
                    $(this).removeClass('active');
                })
                $(this).addClass('active');
              
                var target = this.hash,
                    menu = target;
                $target = $(target);
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top - 82
                }, 500, 'swing', function () {
                    window.location.hash = target;
                    $(document).on("scroll", onScroll);
                });
            });
        });

        function onScroll(event){
            var scrollPos = $(document).scrollTop();
            $('nav li a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top-85 <= scrollPos && refElement.position().top-85 + refElement.height() > scrollPos) {
                    $('#menu-center ul li a').removeClass("active");
                    currLink.addClass("active");
                }
                else{
                    currLink.removeClass("active");
                }
            });
        }