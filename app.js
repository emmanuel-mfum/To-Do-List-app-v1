const express = require("express"); // import the express package
const bodyParser = require("body-parser"); // import the body-parser package
const date = require(__dirname + "/date.js"); // import the date.js module of this project

const app = express(); // initialize the Express app

const items = ["Buy Food", "Cook Food", "Eat Food"]; // initialize our array
const workItems = []; // initialize the array

app.set('view engine', 'ejs'); // tells our app to use EJS as its view engine

app.use(bodyParser.urlencoded({extended:true})); // line necessary to use the module body-parser and parsing data coming from HTML forms

app.use(express.static("public")); // tells Express to serve the static files inside the "public folder"


app.get("/", function(req,res){

   let day = date.getDate();

  res.render("list",{listTitle:day, newListItems:items}); // we create a response by rendering a file called list and passing a variable kindOfDay with the value of the variable day

});



app.post("/",function(req,res){

  const item = req.body.newItem; // tap into the data sent by the form

  if(req.body.list === "Work"){ // checks if the list from which the new item comes from
    workItems.push(item); // add the item to workItems array
    res.redirect("/work"); // redirect to work route
  } else{
    items.push(item);
    res.redirect("/"); // redirect to the home route
  }

  items.push(item); // we add the new item into our array



});

app.get("/work", function(req,res){

  res.render("list", {listTitle:"Work List", newListItems:workItems}); // render template with the values passed


});

app.get("/about", function(req,res){

  res.render("about");

});
// app.post("/work", function(req,res){
//
//    let item = req.body.newItem; // tap into the data sent by the form
//
//    items.push(item); // we add the new item into our array
//
//    app.redirect("/work"); // redirect to the home route
//
//
//
// });
//
app.listen(3000, function(){ // connects our app to the HTTPS port 3000
  console.log("The server is running on port 3000");
});
