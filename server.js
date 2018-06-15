var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var customers = [
    {
      customerName: "yoda",
      phoneNumber: "8675309",
      customerEmail: "yoda@georgelucas.com",
      customerID: "lukesdaddy",
    },];

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
      });
      
      app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "reserve.html"));
      });
      
      app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "tables.html"));
      });

      app.get("/api/tables", function(req, res) {
        return res.json(customers);
      });
    

      


// Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcustomer = req.body;
  

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcustomer.customerName = newcustomer.customerName.replace(/\s+/g, "").toLowerCase();

  console.log(newcustomer);

  customers.push(newcustomer);

  res.json(newcustomer);
});

//starts the server to begin
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  