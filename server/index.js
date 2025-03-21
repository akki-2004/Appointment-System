const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app=express();
app.use(express.json());
app.use(cors());
const port =8000;

mongoose.connect("mongodb+srv://Akshay2:Akshay2@ems.yzofrjh.mongodb.net/AppointmentSystem")
.then(console.log("MongoDb connected"))

app.get("/hey",(req,res)=>{
    res.send("Hellooooooooo");
})

app.post("/appointment",(req,res)=>{
    
})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
    
})