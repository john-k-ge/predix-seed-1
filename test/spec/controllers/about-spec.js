/* jshint unused:false */
define(['angular-mocks', 'app'], function (mocks, app) {
	'use strict';
	describe('app.controllers:', function () {
		beforeEach(module('predixApp'));

		describe('Testing AboutCtrl:', function () {
			var $scope, ctrl;

			beforeEach(inject(function ($rootScope, $controller) {
				$scope = $rootScope.$new();
				ctrl = $controller('AboutCtrl', {
					$scope: $scope
				});
			}));

			it('should have name on $scope', function () {
				expect($scope.name).toBeDefined();
			});
			it('should have correct name on $scope', function () {
				expect($scope.name).toBeDefined('about');
			});
		});
	});
});