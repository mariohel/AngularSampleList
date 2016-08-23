(function () { 
	'use strict';
	angular.module('crossApp.home')
	.factory('HomeService', ['$q','$http',HomeService]);
	
	function HomeService($q,$http) {	
		  
		var factory = {};		
		factory._data = null;		

		factory.getDataList = function () {
			
			var deferred = $q.defer();
			
			if (factory._data)
				deferred.resolve(factory._data);
			else{
				$http.get('http://localhost:3000/crossover')
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
		
		factory.resetDataList = function () {
			
			var deferred = $q.defer();
			
			if (factory._data)
				deferred.resolve(factory._data);
			else{
				$http.get('db/data.json')
				.then(function (data) {
					factory._data=data;
					$http.post('http://localhost:3000/crossover')
					.then(function (data) {
						deferred.resolve(data);
					})
					.catch(function (error) {
						deferred.reject(error);
					});
					
				})
				.catch(function (error) {
					deferred.reject(error);
				});
	
			}
	
			
			return deferred.promise;
	
		};
		
		factory.addItem = function (item) {
			
			var deferred = $q.defer();
			
			$http.post('http://localhost:3000/crossover',item)
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
			
			$http.delete('http://localhost:3000/crossover/'+id)
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