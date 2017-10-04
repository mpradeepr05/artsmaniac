var app = angular.module("myapp", ['ui.router']);
// 'slickCarouse'
app.config(function($stateProvider) {
  $stateProvider
    .state('home',{
      url:'',
      templateUrl:'../views/home.html',
      controller:'myCtrl'
    })
    .state('painting',{
      url:'/painting',
      templateUrl:'../views/painting.html'
    })
});      

app.controller("myCtrl", function($scope) {


    // home page
    $scope.artwork = [
        {
          "Image" : "images/2.jpg",
          "lDate" : "Latest Date",

          
          "TitleName" : "Paintings",
          "Description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit"
        },
        {
          "Image" : "images/comic.jpg",
          "lDate" : "Latest Date",
          "TitleName" : "Comic",
          "Description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit"
        },
        {
          "Image" : "images/drawing.jpg",
          "lDate" : "Latest Date",
          "TitleName" : "Drawing",
          "Description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit"
        },
        {
          "Image" : "images/misl.jpg",
          "lDate" : "Latest Date",
          "TitleName" : "Miscellaneous",
          "Description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit"
        },
    ],




    
      $('.slider').slick({
          dots: true,
          infinite: false,
          speed: 700,
          autoplay: true,
          slidesToShow: 1
        });
    
    // $("nav").hide();

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
            var navHite=$("header>nav").innerHeight();
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top-navHite

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


    $(document).ready(function() {
      var gallery = new Gallery({
        elements: {
          slideshow: '#slideshow',
          currentImage: '#slideshow .current .image',
          currentCaption: '#slideshow .current .caption',
          thumbnailAnchor: '#gallery .gallery li a',
          previousAnchor: '#slideshow .previous a',
          nextAnchor: '#slideshow .next a',
          closeAnchor: '#slideshow .close a',
        }
      });
    });

    $(window).load(function() {
      $(".slider").removeClass("loading");;
    });
});  