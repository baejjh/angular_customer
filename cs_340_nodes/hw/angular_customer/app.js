var myApp = angular.module('myApp', ['ngRoute']); 

myApp.config(function($routeProvider) { 
	$routeProvider
	.when('/', {
		templateUrl: '/js/partials/customers.html'
	})
	.when('/orders', {
		templateUrl: '/js/partials/orders.html'
	})
	.otherwise({
		redirectTo:'/'
	});
});