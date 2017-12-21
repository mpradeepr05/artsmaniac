var app = angular.module("myapp", ['ui.router', 'ui.bootstrap']);
// 'slickCarouse'
app.config(function($stateProvider) {
  $stateProvider
    .state('home',{
      url:'',
      templateUrl:'../views/home.html',
      controller:'myCtrl as vm'
    })
    // .state('painting',{
    //   url:'/painting',
    //   templateUrl:'../views/painting.html'
    // })
});      

app.controller("myCtrl", function($scope,$uibModal) {
   
    var vm = this;
    // home page

    // $http.get('/records').success(function(response){
    //   console.log("working");
    //   vm.records = response;
    // });

    vm.artworks = [
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

      vm.showModal = function(){
          $uibModal.open({
                templateUrl: '../views/painting-modal.html',
                controller:'myClose',
           })
      }


      
        $('.slider').slick({
          dots: true,
          infinite: false,
          speed: 700,
          autoplay: true,
          slidesToShow: 1
        });



    // vm.openImage = function(fileName,index){
    //   vm.fileIndex = index;
    //   vm.fileName = fileName;
    // }

    // vm.nextImage = function(){
    //   if(vm.records.length > vm.fileIndex){
    //     vm.fileName = vm.records[++vm.fileIndex].filename;
    //   }
    //   else{
    //     vm.fileIndex=0;
    //     vm.fileName = vm.records[0].filename;
    //   }
    // }

    // vm.previousImage = function(){
    //   if(vm.fileIndex >0){
    //     vm.fileName = vm.records[--vm.fileIndex].filename;  
    //   }
    //   else{
    //     vm.fileIndex=vm.records.length-1;
    //     vm.fileName = vm.records[vm.fileIndex].filename;
    //   }
    // }
});
app.controller("myClose", function($scope,$uibModalInstance) {
    var vm = this;
    vm.closeModal = function(){
        $uibModalInstance.dismiss('cancel');
    };
});

