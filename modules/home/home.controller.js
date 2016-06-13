'use strict';
(function () { 
	angular.module('crossApp.home')
	.controller('crossApp.home.homeController', ['$scope', 'crossApp.home.homeService',HomeController]);
	                                    
	function HomeController($scope, HomeService) {
	
		var getDataList = function(){
			if (!$scope.dataList) {
				HomeService.getDataList().then(function (response) {
					$scope.dataList= response.data;
				}); 
			}
		};
		getDataList();
	}
})();