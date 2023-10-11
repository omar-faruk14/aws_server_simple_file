const express = require('express');
const app=express();

const port = process.env.PORT || 5000;

app.listen(3000, () =>{
    console.log("Server is running on 3000 port");
    
});

app.get("/", (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});