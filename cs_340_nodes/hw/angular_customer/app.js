var myApp = angular.module('myApp', ['ngRoute']); 

myApp.config(function($routeProvider) { 
	$routeProvider
	.when('/', {
		templateUrl: '/js/partials/customer.html'
	})
	.when('/products', {
		templateUrl: '/js/partials/product.html'
	})
	.otherwise({
		redirectTo:'/'
	});
});