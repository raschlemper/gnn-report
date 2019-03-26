'use strict';

app.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider', 
	function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {

	// $locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/404');

	$stateProvider
		.state('app', {
			abstract: true,
			url: '',
			template: '<div ui-view></div>'
		})
		.state('app.board', {
			url: '/board',
			abstract: true,
			template: '<div ui-view></div>'
		})
		.state('app.board.list', {
			url: '/',
			templateUrl: 'partials/boards.html',
			controller: 'BoardController'
		});

}]);