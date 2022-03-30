let date = new Date();
console.log(date)
let currentDay = date.getDay()
console.log(currentDay)
let currentHour = date.getHours();
console.log(currentHour)

const logger =(req,res,next)=>{
    if(currentHour>1 && currentHour <18 && currentDay>0 && currentDay<6) {
        next();
    }else{
        res.send("<h1> Sorry, we are Closed </h1>")
    }
}

module.exports = logger