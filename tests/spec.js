'use strict';

describe('ngTap', function () {

	var element;

	beforeEach(function () {
		module('ngTap');
	});

	it('should get called on tap', inject(function($rootScope, $compile) {
		element =  $compile('<div ng-tap="itHappened = true"></div>')($rootScope);
		$rootScope.$digest();
		expect($rootScope.itHappened).toBeUndefined();
		element.triggerHandler('touchstart');
		element.triggerHandler('touchend');
		expect($rootScope.itHappened).toEqual(true);
	}));

});
