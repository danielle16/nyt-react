const express = require("express");

const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3001;
var routes = require("./routes");


//Set up middleware 
app.use(express.urlencoded({extended: true}));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  // Add routes, both API and view
  app.use(routes);
//   app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client/build/index.html')));
  
  // Connect to the Mongo DB
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");



// Start the server 
app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`);
});









