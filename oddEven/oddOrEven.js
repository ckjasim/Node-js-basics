// const express = require('express')
// const app = express()

// app.set('view engine','ejs')
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))


// app.get('/',(req,res)=>{
//     res.render('index')
// })
// const a ={
//     email:"jasim@gmail.com",
//     password:"12345"
// }

// app.post('/',(req,res)=>{
//     if(a.email===req.body.email&& a.password===req.body.password){
//         res.send('success')
//     }else{
//         res.send('fail')
//     }
// })


// // app.post('/',(req,res)=>{
// //     let num=Number(req.body.number)
// //     console.log(num);
// //     if(num%2===0){
// //         res.send('even')
// //     }else{
// //         res.send('odd')
// //     }
// // })

// app.listen(5000)

// const http = require('http')
 
// let server =http.createServer((req,res)=>{
//     res.write("sdfsdf")
//     console.log("dfd");
//     res.end("dfdfd")
// })
// server.listen(4000)



const express =require('express')
const app = express()

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
   res.render('index')
})

let a={
    email:"asd@gmail.com",
    password:'123'
}
app.post('/',(req,res)=>{
    if(a.email===req.body.email&&a.password===req.body.password){
        res.send('login')

    }else{
        res.render('fail')
    }
})
app.listen(3000)