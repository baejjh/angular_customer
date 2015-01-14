myApp.controller('CustomersController', function($scope, CustomersFactory){ 
	$scope.customers = CustomersFactory.getAllCustomers();
	$scope.addCustomer = function() {
		CustomersFactory.addNewCustomer($scope.new_customer);
	}
	$scope.removeCustomer = function () {
		CustomersFactory.removeOldCustomer($scope.customer)
	}
});

myApp.controller('ProductsController', function($scope){
	$scope.hello_msg = "Example of Routes: Products Page";
});