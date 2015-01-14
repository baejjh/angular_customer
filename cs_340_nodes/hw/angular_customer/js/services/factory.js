myApp.factory('CustomersFactory', function() {
	var customers = [
		{name: 'Finn, the Human', created_at: "Mon Jan 12 2015"},
		{name: 'Lady Rainicorn', created_at: "Wed Mar 3 2035"},
		{name: 'Jake, the Dog', created_at: "Sat May 15 1970"},
		{name: 'Princess Bubblegum', created_at: "Fri Jan 24 1934"},
	];
	var factory = {}; 
	factory.getAllCustomers = function () {
		return customers;
	}
	factory.addNewCustomer = function(info){
		var bool = true;
		for(var i = 0; i < customers.length; i++) {
			if(customers[i].name === info.name){
				alert("The name already exists");
				bool = false;
			}
		}	
		if(bool === true) {
			var time = Date();
			var date = time.substring(0, 15);
			// console.log(time);
			customers.push({
				id: info.id,
				name: info.name,
				created_at: date
			});	
		}
		// else {
		// 	alert(err);
		// }	
	}
	factory.removeOldCustomer = function (info) {
		// code to remove customer
	}
	return factory;
});