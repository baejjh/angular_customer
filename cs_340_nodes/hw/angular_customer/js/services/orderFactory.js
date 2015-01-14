myApp.factory('OrderFactory', function() {
	var orders = [
		{
		 cust_name: 'Finn, the Human',
		 product: 'Nike Shoes',
		 quantity: '2',
		 created_at: "Mon Jan 12 2015"
		},
		{
		 cust_name: 'Lady Rainicorn',
		 product: 'Rainbows',
		 quantity: '5',
		 created_at: "Wed Mar 3 2035"}
		 ,
		{
		 cust_name: 'Jake, the Dog',
		 product: 'Ice Cream',
		 quantity: '9',
		 created_at: "Sat May 15 1970"
		},
		{
		 cust_name: 'Princess Bubblegum',
		 product: 'Candies',
		 quantity: '5',
		 created_at: "Fri Jan 24 1934"
		},
	];
	var products = [
		{ name: 'Ice Cream' },
		{ name: 'Pencil' },
		{ name: 'Rainbows' },
		{ name: 'Musical Tickets for 2' },
		{ name: 'Nike Shoes' },
	];
	var factory = {}; 
	factory.getAllOrders = function () {
		return orders;
	}
	factory.getAllProducts = function () {
		return products;
	}
	factory.addNewOrder = function(info){
		var bool = true;
		for(var i = 0; i < orders.length; i++) {
			if(orders[i].cust_name === info.cust_name){
				alert("Order Already Exists");
				bool = false;
			}
		}	
		if(bool === true) {
			var time = Date();
			var date = time.substring(0, 15); //print only date - console.log(time);
			orders.push({
				id: info.id,
				cust_name: info.cust_name,
				created_at: date
			});	
		}	
	}
	return factory;
});