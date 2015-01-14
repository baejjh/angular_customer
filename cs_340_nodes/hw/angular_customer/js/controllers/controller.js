myApp.controller('CustomersController', function($scope, CustomerFactory){ 
	$scope.customers = CustomerFactory.getAllCustomers();
	$scope.addCustomer = function() {
		CustomerFactory.addNewCustomer($scope.new_customer);
	}
	$scope.removeCustomer = function () {
		CustomerFactory.removeOldCustomer($scope.customer)
	}
});

myApp.controller('OrdersController', function($scope, OrderFactory){ 
	$scope.orders = OrderFactory.getAllOrders();
	$scope.products = OrderFactory.getAllProducts();
	$scope.addOrder = function() {
		OrderFactory.addNewOrder($scope.new_order);
	}
});