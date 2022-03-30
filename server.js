const express = require('express');
const logger = require("./middleware/logger")
const app = express();

const userDB = [
    {
        id:1,
        name:"dante"
    },
    {
        id:2,
        name:"el 3ati"
    },
]

app.use(logger)

// app.get('/hi',(req,res)=>{
//    res.send("hello me !!!!!")
// })

app.get("/users",(req,res)=>{
    res.status(200).send({
        success:"true",
        message:"we're getting data",
        users:userDB
    })
})

app.post("/users",(req,res)=>{
    userDB.push(req.body)
    res.status(200).send({
        success:"true",
        message:"adding data success",
        newUser:req.body
    })
})

app.use(express.static(__dirname + "/public"))

app.use(express.json())



const PORT = 5000 ;

app.listen(PORT , (err)=>{
    err? console.log(err)
    : console.log(`server is running on port ${PORT}`)
})