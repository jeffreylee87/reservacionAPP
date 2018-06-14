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

      




//starts the server to begin
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  