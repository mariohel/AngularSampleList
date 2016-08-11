
describe('directive: crossapp-home-list-item-result', function() {
  var element, scope;
  
  beforeEach(module(
		  'crossApp.common',
		  'crossApp.funcTest'
		  ));
  
  beforeEach(inject(function ($templateCache) {
	            var templateUrl = 'modules/funcTest/components/list-item/list-item.template.html';
	            var html='<div class="text-center"><h5>Result:</h5><div ng-class="getClass(item.state)" ng-bind-html="getText(item.state) | rawHtml"></div>	<button ng-if="item.state== \'Accepted\'" class="btn btn-primary"><span class="glyphicon glyphicon-search" aria-hidden="true"></span>Merged Build</button><button ng-if="item.state==\'Rejected\'" class="btn btn-primary">Find Issues</button><div  ng-if="item.state==\'Complete\'"><button class="btn btn-primary">Deploy</button> to:	<select> <option value="production">Production</option><option value="development">Development</option></select></div></div>';
	               $templateCache.put(templateUrl, html);	      
  }));
  
  beforeEach(inject(function($compile,$rootScope) {

		scope = $rootScope.$new();
	    
	    var html = '<crossapp-home-list-item-result ng-click="clickHandler()" class="col-sm-2 col-5" item="data"></crossapp-home-list-item-result>';
	    scope.clickHandler = angular.noop;
	    scope.data={funcTest:{result:50,debug:true,release:true}};
	    element = $compile(html)(scope);
	    scope.$digest();
  }));
  
  
  describe('element', function() {
    it("click should be called", function() {
    	var isolateScope = element.isolateScope();
    	spyOn(scope, 'clickHandler');
    	element.click();
    	expect(scope.clickHandler).toHaveBeenCalled();
    });
  });  

});