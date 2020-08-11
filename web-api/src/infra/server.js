const express = require("express");
//Setup Variables
const port = 4000;

const server = async() =>{
    
//Create an express app
const app = express();

//Routes
 app.post("/stories",(req,  res) =>{
    res.send("Hey,stories here");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);

    console.table({
        "App Name": "Covid Anchor API",
        path: `http://localhost:${port}`,
    });
});

};

module.exports = server;

