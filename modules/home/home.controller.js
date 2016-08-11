(function () { 
	'use strict';
	angular.module('crossApp.home')
	.controller('HomeController', ['$scope', 'HomeService',HomeController]);
	                                    
	function HomeController($scope, HomeService) {
		var vm=this;
		$scope.dataList={};
		$scope.getDataList = function(){			
				HomeService.getDataList().then(function (response) {
					$scope.dataList= response.data;
				});			
		};
		if (!$scope.dataList) 
			$scope.getDataList();
	}
		
})();