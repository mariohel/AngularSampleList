(function () { 
	'use strict';
	angular.module('crossApp.home')
	.controller('HomeController', ['$scope', 'HomeService' , '$mdSidenav' ,HomeController]);
	                                    
	function HomeController($scope, HomeService , $mdSidenav) {
		$scope.dataList=[];
		$scope.toggleLeft = buildToggler('left');
		$scope.toggleRight = buildToggler('right');
		
		$scope.getDataList = function(){
			if ($scope.dataList.length==0) {
				HomeService.getDataList().then(function (response) {
					$scope.dataList= response.data;
				}); 
			}
		};
		
		$scope.addItem=function(form){
			var item={
			        "code" : $scope.item.code, 
			        "deletable":true,
			        "type":$scope.item.type,
			        "owner" : $scope.item.owner,
			        "start_time" : "4/18/2014 10:53am",
			        "state" : $scope.item.state,
			        "metrics" : {
			            "progress":$scope.item.metrics,
			            "result":($scope.item.metrics>0)?1:-1,
			            "test":64,
			            "maintain":-53,
			            "security":64,
			            "workmanship":72            
			        },
			        "build" : {
			        	"progress":$scope.item.build,
			            "result":($scope.item.build>0)?1:-1,
			        	"build_time":"10:46am - 4/17/2014",
			        	"debug":true,
			        	"release":true
			       	}, 
			        "unitTest" : {
			        	"progress":$scope.item.unitTest,
			            "result":($scope.item.unitTest>0)?1:-1,
			        	"chart_data":[142,10],
			        	"test_passed_percentage":73,
			        	"code_covered_percentage":76
			        },
			        "funcTest" :{ 
			        	"progress":$scope.item.funcTest,
			            "result":($scope.item.funcTest>0)?1:-1,
			        	"chart_data":[4321,2145],
			        	"test_passed_percentage":68,
			        	"code_covered_percentage":23
					}
				};
			
			
			// save Data to database
			HomeService.addItem(item).then(function (response) {
				item=response.data;
				$scope.dataList.push(item);
				$scope.toggleLeft();
				$scope.item=null;
				form.$setUntouched();
				form.$setValidity("form.typeSelect.$error", false);
			}); 
			
		};
		function buildToggler(componentId) {
	      return function() {
	        $mdSidenav(componentId).toggle();
	      }
	    }
		$scope.getDataList();
		
	}
})();