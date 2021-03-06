var app = angular.module('myApp', ['ngFileUpload']);
app.controller('myCtrl', function($scope, $http) {
    console.log("i am");

    var vm = this;
	$http.get('/records').success(function(response){
	  console.log("warking");
	  vm.records = response;
	});

	vm.submit = function () {
		console.log(vm.record);
		$http.post('/records', vm.record).success(function(response){
			vm.records.push(vm.record);
			vm.record = "";
			console.log(response);
		});
	};

	vm.remove = function (id) {
		console.log(id);
		$http.delete('/records/' + id).success(function(response){
			// refresh();
		});
	};

	vm.edit = function (id) {
		console.log(id);
		$http.get('/records/' + id).success(function(response){
			vm.record = response;
		});
	};

	vm.update = function() {
		console.log(vm.record._id);
		$http.put('/records/' + vm.record._id, vm.record).success(function(response){
		// 	vm.record = response;
		});
	};

});




app.controller('UploadCtrl', function(Upload, $window){

	// image upload start
	var vm = this;
    vm.submit = function(){ //function to call on form submit
        if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
            vm.upload(vm.file); //call upload function
        }
    }
    
    vm.upload = function (file) {
        Upload.upload({
            url: 'http://localhost:3000/upload', //webAPI exposed to upload the file
            data:{file:file} //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
            if(resp.data.error_code === 0){ //validate success
                $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
            } else {
                $window.alert('an error occured');
            }
        }, function (resp) { //catch error
            console.log('Error status: ' + resp.status);
            $window.alert('Error status: ' + resp.status);
        }, function (evt) { 
            console.log(evt);
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
        });
    };
	// image upload end

});