myApp.controller('CustomersController', function($scope, CustomerFactory){ 
	$scope.customers = CustomerFactory.getAllCustomers();
	$scope.addCustomer = function() {
		CustomerFactory.addNewCustomer($scope.new_customer);
	}
	$scope.removeCustomer = function () {
		CustomerFactory.removeOldCustomer($scope.customer)
	}
});

myApp.controller('ProductsController', function($scope){
	$scope.hello_msg = "Example of Routes: Products Page";
});