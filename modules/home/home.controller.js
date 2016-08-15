(function () { 
	'use strict';
	angular.module('crossApp.home')
	.controller('HomeController', ['$scope', 'HomeService',HomeController]);
	                                    
	function HomeController($scope, HomeService) {
		$scope.dataList=[];
		$scope.getDataList = function(){
			if ($scope.dataList.length==0) {
				HomeService.getDataList().then(function (response) {
					$scope.dataList= response.data;
				}); 
			}
		};
		$scope.getDataList();
	}
})();