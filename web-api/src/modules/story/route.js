const express = require("express");

//Creating a story route
const storyRoute = express.Router();



//Defining Stories Routes
storyRoute.get("/",(req,res) =>res.send("You reached a stories"));
storyRoute.get("/:id",(req,res) =>res.send("You reached a story"));
storyRoute.post("/",(req,res) =>res.send("You reached  create story"));
storyRoute.patch("/:id",(req,res) =>res.send("You reached update story"));
storyRoute.delete("/:id",(req,res) =>res.send("You reached delete story"));

//Exporting storyRoute
module.exports = storyRoute;