(function () { 
	'use strict';
	angular.module('crossApp.home')
	.factory('HomeService', ['$q','$http',HomeService]);
	
	function HomeService($q,$http) {	
		  
		var factory = {};		
		factory._data = null;
		factory.url="http://localhost:3000/crossover/";

		factory.getDataList = function () {
			
			var deferred = $q.defer();
			
			if (factory._data)
				deferred.resolve(factory._data);
			else{
				$http.get(factory.url)
				.then(function (data) {
					factory._data=data;
					deferred.resolve(data);
				})
				.catch(function (error) {
					deferred.reject(error);
				});
	
			}
	
			
			return deferred.promise;
	
		};
				
		factory.addItem = function (item) {
			
			var deferred = $q.defer();
			
			$http.post(factory.url,item)
				.then(function (data) {
					deferred.resolve(data);
				})
				.catch(function (error) {
					deferred.reject(error);
				});
	
			
	
			
			return deferred.promise;
	
		};
		
		factory.deleteItem = function (id) {
			
			var deferred = $q.defer();
			
			$http.delete(factory.url+id)
				.then(function (data) {
					deferred.resolve(data);
				})
				.catch(function (error) {
					deferred.reject(error);
				});
	
			
	
			
			return deferred.promise;
	
		};
		
		return factory;
	}
})();