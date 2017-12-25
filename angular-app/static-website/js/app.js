var app = angular.module("myapp", ['ui.router', 'ui.bootstrap']);
// 'slickCarouse'
app.config(function($stateProvider) {
  $stateProvider
    .state('home',{
      url:'',
      templateUrl:'../views/home.html',
      controller:'myCtrl as vm'
    })
});


var menuUl = document.getElementById("main-menu");
  var mHeight = document.getElementById("nav").clientHeight;
  function scrollToEele(id) {
    // vm.closeModal();
    var secId = document.getElementById(id).offsetTop;
    window.scroll({top: secId - mHeight, left: 0, behavior: 'smooth'});
  }
  window.onscroll = function(){
    var scrollPosY = window.pageYOffset | document.body.scrollTop;
    var x = menuUl.querySelectorAll('li');
    for (var i = 0; i < x.length; i++) {
      var picId = x[i].querySelector('a').getAttribute('data');
      var offsetTop = document.getElementById(picId).offsetTop;
      var secHeight = document.getElementById(picId).clientHeight;
      if (offsetTop - scrollPosY - mHeight <= 3){
        x[i].className = "active";
      }
      else{x[i].className = "";}
      if (offsetTop - scrollPosY - mHeight + secHeight <= 0){
        x[i].className = "";
      }
      // console.log(picId);
    };

    // header
    // if (scrollPosY >= 3){
    //   $("header").find(".small-logo").addClass("show-logo");
    // }

  }

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



app.controller("myCtrl", function($scope,$uibModal) {
   
    var vm = this;
    vm.artworks = [
        {
          "Image" : "images/artsmaniac_vikram_2.jpg",
          "TitleName" : "Paintings"
        },
        {
          "Image" : "images/comic.jpg",
          "TitleName" : "Comic",
        },
        {
          "Image" : "images/drawing.jpg",
          "TitleName" : "Drawing",
        },
        {
          "Image" : "images/misl.jpg",
          "TitleName" : "Miscellaneous",
        },
    ]

    vm.projects = [

      {"filename" : "artsmaniac_vikram_1.jpg"},
      {"filename" : "artsmaniac_vikram_2.jpg"},
      {"filename" : "artsmaniac_vikram_3.jpg"},
      {"filename" : "artsmaniac_vikram_4.jpg"},
      {"filename" : "artsmaniac_vikram_5.jpg"},
      {"filename" : "artsmaniac_vikram_6.jpg"},
    ],

    vm.galleries = [

      {"filename" : "artsmaniac_vikram_gal1.jpg"},
      {"filename" : "artsmaniac_vikram_gal2.jpg"},
      {"filename" : "artsmaniac_vikram_gal3.jpg"},
      {"filename" : "artsmaniac_vikram_gal4.jpg"},
      {"filename" : "artsmaniac_vikram_gal5.jpg"},
      {"filename" : "artsmaniac_vikram_gal6.jpg"},
      {"filename" : "artsmaniac_vikram_gal7.jpg"},
      {"filename" : "artsmaniac_vikram_gal8.jpg"},
      {"filename" : "artsmaniac_vikram_gal10.jpg"},
      {"filename" : "artsmaniac_vikram_gal11.jpg"},
      {"filename" : "artsmaniac_vikram_gal12.jpg"},
      {"filename" : "artsmaniac_vikram_gal13.jpg"},
      {"filename" : "artsmaniac_vikram_gal14.jpg"},
      {"filename" : "artsmaniac_vikram_gal15.jpg"},
      {"filename" : "artsmaniac_vikram_gal16.jpg"},
    ]

      vm.showModal = function(category){
          $uibModal.open({
                templateUrl: '../views/painting-modal.html',
                controller:'myClose as vm',
                resolve :{
                  categoryType:
                      ['$q', function ($q) {
                        var deferred = $q.defer();
                        deferred.resolve(category);
                        return deferred.promise;
                    }],
                }
           })
      }


      
        $('.slider').slick({
          dots: true,
          infinite: false,
          speed: 700,
          autoplay: true,
          slidesToShow: 1
        });



    vm.openImage = function(fileName,index){
      vm.fileIndex = index;
      vm.fileName = fileName;
    }

    vm.nextImage = function(){
      if(vm.galleries.length > vm.fileIndex){
        vm.fileName = vm.galleries[++vm.fileIndex].filename;
      }
      else{
        vm.fileIndex=0;
        vm.fileName = vm.galleries[0].filename;
      }
    }

    vm.previousImage = function(){
      if(vm.fileIndex >0){
        vm.fileName = vm.galleries[--vm.fileIndex].filename;  
      }
      else{
        vm.fileIndex=vm.galleries.length-1;
        vm.fileName = vm.galleries[vm.fileIndex].filename;
      }
    }


});
app.controller("myClose", function($scope,$uibModalInstance,categoryType) {
    console.log('categoryType',categoryType);
    var vm = this;  
    vm.closeModal = function(){
        $uibModalInstance.dismiss('cancel');
    }

    switch(categoryType){
      case 'Paintings':
        vm.artworks = [
          {"Image" : "painting/artsmaniac_vikram_Jai_Jawan_Kisan.jpg"},
          {"Image" : "painting/artsmaniac_vikram_portrait_apoorva.jpg"},
          {"Image" : "painting/artsmaniac_vikram_towards_yakshi.jpg"},
          {"Image" : "painting/artsmaniac_vikram_1.jpg"},
          {"Image" : "painting/artsmaniac_vikram_2.jpg"},
          {"Image" : "painting/artsmaniac_vikram_3.jpg"},
          {"Image" : "painting/artsmaniac_vikram_4.jpg"},
          {"Image" : "painting/artsmaniac_vikram_5.jpg"},
          {"Image" : "painting/artsmaniac_vikram_6.jpg"},
        ]
        break;
      case 'Comic':
        vm.artworks = [
          {"Image" : "comic/artsmaniac_vikram_gotya2.jpg"},
          {"Image" : "comic/artsmaniac_vikram_gotya5.jpg"},
          {"Image" : "comic/artsmaniac_vikram_gotya6.jpg"},
          {"Image" : "comic/artsmaniac_vikram_gotya7.jpg"},
          {"Image" : "comic/artsmaniac_vikram_gotya8.jpg"},
          {"Image" : "comic/artsmaniac_vikram_gotya9.jpg"},
          {"Image" : "comic/artsmaniac_vikram_gotya10.jpg"},
          {"Image" : "comic/artsmaniac_vikram_gotya11.jpg"},
          {"Image" : "comic/artsmaniac_vikram_gotya12.jpg"},
          {"Image" : "comic/artsmaniac_vikram_gotya13.jpg"},
          {"Image" : "comic/artsmaniac_vikram_gotya14.jpg"},
          {"Image" : "comic/artsmaniac_vikram_mela.jpg"},
          {"Image" : "comic/artsmaniac_vikram_page1.jpg"},
          {"Image" : "comic/artsmaniac_vikram_page2.jpg"},
          {"Image" : "comic/artsmaniac_vikram_page3.jpg"},
          {"Image" : "comic/artsmaniac_vikram_page4.jpg"},
          {"Image" : "comic/artsmaniac_vikram_page5.jpg"},
          {"Image" : "comic/artsmaniac_vikram_page6.jpg"},
        ]
        break;
      case 'Drawing':
        vm.artworks = [
          
        ]
        break;
      case 'Miscellaneous':
        vm.artworks = [
          {"Image" : "miscellaneous/artsmaniac_vikram_1.jpg"},
          {"Image" : "miscellaneous/artsmaniac_vikram_2.jpg"},
          {"Image" : "miscellaneous/artsmaniac_vikram_3.jpg"},
          {"Image" : "miscellaneous/artsmaniac_vikram_4.jpg"},
          {"Image" : "miscellaneous/artsmaniac_vikram_5.jpg"},
          {"Image" : "miscellaneous/artsmaniac_vikram_6.jpg"},
          {"Image" : "miscellaneous/artsmaniac_vikram_7.jpg"},
          {"Image" : "miscellaneous/artsmaniac_vikram_8.jpg"},
          {"Image" : "miscellaneous/artsmaniac_vikram_9.jpg"},
          {"Image" : "miscellaneous/artsmaniac_vikram_10.jpg"},
          {"Image" : "miscellaneous/artsmaniac_vikram_11.jpg"},
        ]
      default:
        break;
    }
});

