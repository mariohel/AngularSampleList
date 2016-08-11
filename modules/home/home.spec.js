describe('Home Controller', function() {
  beforeEach(module('crossApp'));

  var $controller,homeService;

  beforeEach(inject(function(_$controller_,_HomeService_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    homeService = _HomeService_;
  }));

  describe('$scope.dataList', function() {
	  var $scope ,  controller;
	  
	  beforeEach(function() {
		  $scope = {};
	      controller = $controller('HomeController', { $scope: $scope , HomeService:homeService});
	      $scope.getDataList();
	    });
	  
    it('expect dataList to be defined', function() {
    	
     expect($scope.dataList).toBeDefined();
    });
  });
});