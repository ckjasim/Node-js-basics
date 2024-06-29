const express = require('express')
const app = express()

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.render('index')
})
    
const a ={
    email:'jasim@gmail.com',
    password:"12345"
}

app.post('/',(req,res)=>{

   
    if(a.email===res.body.email&& a.password===res.body.password){
        res.send('success')
    }else{
        res.send('fail')
    }
})
app.listen(5000)