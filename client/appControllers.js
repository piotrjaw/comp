'use strict'

var appControllers = angular.module('appControllers', [
    'ngFileUpload',
    'noCAPTCHA'
]);

appControllers.controller('submitController', [
    '$scope',
    'Upload',
    
    function($scope, Upload) {
        $scope.notRobot = false;
        $scope.toggle = function() {
            $scope.notRobot = !$scope.notRobot;
        };
        $scope.gRecaptchaResponse = '';
        $scope.submitEntry = function(){
            alert('uploading');
            
            Upload.upload({
                url: '/postEntry',
                fields: $scope.entryData,
                file: $scope.photos.slice(0,2),
                fileFormDataName: 'photos'
            }).success(function(data, status, headers, config) {
                alert('OK');
            }).error(function(data, status, headers, confih) {
                alert('Ooops: ' + status);
            })
/*			var requestBody = JSON.stringify($scope.entryData);
            
            var request = {
                method: 'POST',
                url: '/postEntry',
                data: requestBody
            };
            
            $http(request)
                .success(function(data){
                    alert('OK ' + data);
                })
                .error(function(err){
                    alert('Not so OK ' + err);
                });*/
				
			return false;
        };
    }
]);