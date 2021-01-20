const express=require('express');
const app=express();
const PORT=process.env.PORT || 3000; //This here is the port we're using.
const routes=require("./routes/index.js");

app.listen(PORT,() => {
    console.log("Listening ....");
});
