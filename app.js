let express = require("express");
var bodyParser = require('body-parser');

let app=express()


app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

app.post('/read',(req,res)=>{
    var getName= req.body.name
    var getRoll= req .body.rollno
    var getCollegename=req.body.college
    var getClassname = req.body.class
    

    res.json({"Name" :getName,    "Rollno" :getRoll,"College " :getCollegename,"Class " :getClassname}) 

} )


app.post('/add',(req,res)=>{
    var getNum1=parseFloat(req.body.num1)
    var getNum2= parseFloat(req.body.num2)

    var result=getNum1+getNum2


    res.json({"Result":result})


}

)


app.get('/home',(req,res)=>{
    res.json("welcome to my page")

})




app.listen( process.env.PORT || 3000, ()=>{
    console.log("server started at http://localhost:3000/ ")
})