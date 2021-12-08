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

app.get("/read/products", function (req, res) {
    try {
        var mongodb = require("mongodb");
        var MongoClient = mongodb.MongoClient;
        res.header("Access-Control-Allow-Origin", "*");
        if (!req.query.type || !req.query.name) {
            return res.send({ result: "missing the parameters" });
        } else {
            var url = "mongodb://localhost:27017";
            MongoClient.connect(url, function (err, client) {
                if (err) {
                    return res.send({ result: "failed" });
                } else {
                    var db = client.db(DB);
                    var collection = db.collection(products);
                    collection.findOne(
                        { Type: req.query.type } & { Name: req.query.name },
                        function (err, request) {
                            if (err) throw err;
                            client.close();
                            console.log(request);
                            return res.send(request);
                        }
                    );
                }
            });
        }
    } catch (error) {
        console.error(error);
    }
});

app.post("/create", function (req, res) {
    try {
        //Require the NPM Node Package Module mongodb
        var mongodb = require("mongodb");
        //Create the MongoClient object
        var MongoClient = mongodb.MongoClient;
        //Response HTTP Header parameter setting
        res.header("Access-Control-Allow-Origin", "*");
        //Check the requests so that it has a value
        console.log("request type: " + req.body.type);
        console.log("data name: " + req.body.name);
        if (!req.body.type || !req.body.name) {
            console.log("missing parameters in request");
            //respond back with the JSON status error message
            return res.send({ result: "missing parameters in request" });
        } else {
            //Create the JSON object
            var request = {
                type: req.body.type,
                name: req.body.name,
            };
            console.log(request);
            //Create the URL to connect to the local Mongo Database Server
            var url = "mongodb://localhost:27017";
            MongoClient.connect(url, function (err, client) {
                if (err) {
                    console.log(err); //Used for debugging in the console window
                    //respond there was Mongo connection error
                    return res.send({ result: "failed" });
                } else {
                    var db = client.db(DB); //Select the Mongo Database
                    var collection = db.collection("USERS"); //Select the Collection
                    collection.insertOne(request, function (err, res) {
                        if (err) throw err;
                        client.close(); //Close the client connection
                    }); //insertOne code block
                    return res.send({ result: "passed" }); //respond the create operation worked
                } //close if err check
            }); //close the connect function
        } //close else code block
    } catch (error) {
        console.error(error);
    } //Close the catch code block
}); //Close the app.get code block

app.get("/create/user", function (req, res) {
    try {
        var mongodb = require("mongodb");
        //Create the MongoClient objectDB
        var MongoClient = mongodb.MongoClient;
        //Response HTTP Header parameter setting
        res.header("Access-Control-Allow-Origin", "*");
        //Check the request query studentID so that it has a value
        console.log("user", req.query.userName);

        //Create JSON object
        var json = {
            UserName: req.query.userName,
            EmailAddress: req.query.emailAddress,
            Password: crypto
                .createHash("sha256")
                .update(req.query.password)
                .digest("hex"),
        };
        console.log(json); //Used for debugging in the console window
        //Create the URL to connect to the local Mongo Database Server
        var url = "mongodb://localhost:27017";
        MongoClient.connect(url, function (err, client) {
            if (err) {
                console.log(err); //Used for debugging in the console window
                //respond there was Mongo connection error
                return res.send({ result: "failed" });
            } else {
                var db = client.db(DB); //Select the Mongo Database OakesDB
                var collection = db.collection(users); //Select the Collection Students
                collection.insertOne(json, function (err, res) {
                    if (err) throw err;
                    client.close(); //Close the client connection
                }); //insertOne code block
                return res.send({ result: "passed" }); //respond the create operation worked
            } //close if err check
        }); //close the connect function
    } catch (error) {
        console.error(error);
    } //Close the catch code block
}); //Close the app.get code block

app.get("/create/product", function (req, res) {
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
                var db = client.db(DB);
                var collection = db.collection(products);
                collection.insertOne(json, function (err, res) {
                    if (err) throw err;
                    client.close(); //Close the client connection
                }); //insertOne code block
                return res.send({ result: "passed" }); //respond the create operation worked
            } //close if err check
        }); //close the connect function
    } catch (error) {
        console.error(error);
    } //Close the catch code block
}); //Close the app.get code block

app.get("/create/fill-db", function (req, res) {
    try {
        var mongodb = require("mongodb");
        //Create the MongoClient objectDB
        var MongoClient = mongodb.MongoClient;
        //Response HTTP Header parameter setting
        res.header("Access-Control-Allow-Origin", "*");
        //Check the request query studentID so that it has a value
        console.log("user", req.query.userName);

        //Create the customer JSON object
        //It is filled in with request query student field values sent
        var json = {
            UserName: req.query.userName,
            EmailAddress: req.query.emailAddress,
            Password: crypto
                .createHash("sha256")
                .update(req.query.password)
                .digest("hex"),
        };
        console.log(json); //Used for debugging in the console window
        //Create the URL to connect to the local Mongo Database Server
        var url = "mongodb://localhost:27017";
        MongoClient.connect(url, function (err, client) {
            if (err) {
                console.log(err); //Used for debugging in the console window
                //respond there was Mongo connection error
                return res.send({ result: "failed" });
            } else {
                var db = client.db(DB); //Select the Mongo Database OakesDB
                var collection = db.collection("USERS"); //Select the Collection Students
                collection.insertOne(json, function (err, res) {
                    if (err) throw err;
                    client.close(); //Close the client connection
                }); //insertOne code block
                return res.send({ result: "passed" }); //respond the create operation worked
            } //close if err check
        }); //close the connect function
    } catch (error) {
        console.error(error);
    } //Close the catch code block
}); //Close the app.get code block

//=========================================================//
//Start the listening NodeJS Server on Networking Port 3000//
//=========================================================//

try {
    var server = app.listen(3000, function () {
        console.log("Listening on port %$...", server.address().port);
    });
} catch (error) {
    console.error(error);
} //Close the catch code block
