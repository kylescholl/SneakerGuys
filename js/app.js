var express = require("express");
const { spawn } = require("child_process");
var app = express();
var crypto = require("crypto");

var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const DB = "SNEAKERS_DB";
const users = "USERS";
const products = "PRODUCTS";
const cart = "CART";

// Returns Entire SNEAKERS_DB.PRODUCTS Collection
app.get("/read/products", function (req, res) {
	console.log(`/read/products`);
	try {
		var mongodb = require("mongodb");
		var MongoClient = mongodb.MongoClient;
		res.header("Access-Control-Allow-Origin", "*");

		var url = "mongodb://localhost:27017";
		MongoClient.connect(url, function (err, client) {
			if (err) {
				return res.send({ result: "failed" });
			} else {
				var database = client.db(DB);
				var collection = database.collection(products);

				collection.find({}).toArray(function (err, result) {
					if (err) {
						res.send(err);
					} else {
						res.send(JSON.stringify(result));
					}
				});
			}
		});
	} catch (error) {
		console.error(error);
	}
});

// Returns row given a productID from SNEAKERS_DB.PRODUCTS
app.get("/read/products/:id", function (req, res) {
	console.log("req.url:", req.url);
	try {
		var mongodb = require("mongodb");
		var MongoClient = mongodb.MongoClient;
		res.header("Access-Control-Allow-Origin", "*");
		if (!req.params.id) {
			return res.send({ result: "missing parameters" });
		} else {
			var url = "mongodb://localhost:27017";
			MongoClient.connect(url, function (err, client) {
				if (err) {
					return res.send({ result: "failed" });
				} else {
					var database = client.db(DB);
					var collection = database.collection(products);

					collection.findOne(
						{ productID: req.params.id },
						function (err, json) {
							if (err) throw err;
							client.close();
							console.log(json);
							return res.send(json);
						}
					);
				}
			});
		}
	} catch (error) {
		console.error(error);
	}
});

app.get("/create/product", function (req, res) {
	console.log("/create/product");
	try {
		var mongodb = require("mongodb");
		var MongoClient = mongodb.MongoClient;
		res.header("Access-Control-Allow-Origin", "*");
		console.log("product", req.query.name);

		var json = {
			productID: req.query.productID,
			name: req.query.name,
			brand: req.query.brand,
			price: req.query.price,
			category: req.query.category,
			theme: req.query.theme,
			src: req.query.src,
			descShort: req.query.descShort,
			descLong: req.query.descLong,
		};
		console.log(json);

		var url = "mongodb://localhost:27017";
		MongoClient.connect(url, function (err, client) {
			if (err) {
				console.log(err);
				return res.send({ result: "failed" });
			} else {
				var database = client.db(DB);
				var collection = database.collection(products);
				collection.insertOne(json, function (err, res) {
					if (err) throw err;
					client.close();
				});
				return res.send({ result: "passed" });
			}
		});
	} catch (error) {
		console.error(error);
	}
});

app.get("/create/users", function (req, res) {
	console.log("/create/users");
	try {
		var mongodb = require("mongodb");
		//Create the MongoClient objectDB
		var MongoClient = mongodb.MongoClient;
		//Response HTTP Header parameter setting
		res.header("Access-Control-Allow-Origin", "*");
		//Check the request query userName so that it has a value
		console.log("user", req.query.userName);

		//Create JSON object
		var json = {
			userName: req.query.userName,
			emailAddress: req.query.emailAddress,
			password: crypto
				.createHash("sha256")
				.update(req.query.password)
				.digest("hex"),
		};
		console.log(json);
		var url = "mongodb://localhost:27017";
		MongoClient.connect(url, function (err, client) {
			if (err) {
				console.log(err);
				return res.send({ result: "failed" });
			} else {
				// Select the Database
				var database = client.db(DB);
				// Select the Collection
				var collection = database.collection(users);
				collection.insertOne(json, function (err, res) {
					if (err) throw err;
					client.close();
				});
				return res.send({ result: "passed" });
			}
		});
	} catch (error) {
		console.error(error);
	}
});

app.get("/create/cart", function (req, res) {
	console.log("/create/cart");
	try {
		var mongodb = require("mongodb");
		//Create the MongoClient objectDB
		var MongoClient = mongodb.MongoClient;
		//Response HTTP Header parameter setting
		res.header("Access-Control-Allow-Origin", "*");
		//Check the request query userName so that it has a value
		console.log("user", req.query.userName);

		//Create JSON object
		var json = {
			userName: req.query.userName,
			productID: req.query.productID,
			productName: req.query.productName,
		};
        
        
		console.log(json);
		if (!req.query.userName || !req.query.productID) {
			return res.send({ result: "missing parameters" });
		} else {
			var url = "mongodb://localhost:27017";
			MongoClient.connect(url, function (err, client) {
				if (err) {
					console.log(err);
					return res.send({ result: "failed" });
				} else {
					var database = client.db(DB);
					var collection = database.collection(cart);
					collection.insertOne(json, function (err, res) {
						if (err) throw err;
						client.close();
					});
					return res.send({ result: "passed" });
				}
			});
		}
	} catch (error) {
		console.error(error);
	}
});

//==========================================================//
//Start the NodeJS Server and listen on Networking Port 3000//
//==========================================================//
try {
	var server = app.listen(3000, function () {
		console.log(
			"App started. Listening on port %$...",
			server.address().port
		);
	});
} catch (error) {
	console.error(error);
} //Close the catch code block
