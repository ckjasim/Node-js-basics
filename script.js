
//--------Adding to Object--------

// let person = {name:"jasim",age:20}

// person.name="anamika"
// person.dob="02-03-1800"
// person.displayAge=function(){
//   console.log(this.age)
// }


// for (x in person){
//   console.log(person[x])
// }
// console.log(person.displayAge());



//--------------Default Parameter---------

// function abcd(num1=5,num2){  // set 5 as default parameter it works only if num1 have no argument
//   console.log(num1+num2);
// }

// // abcd(2,3)
// abcd(undefined,3)



//-------------------Date Object-------------


// let divasam =new Date("09 february 2000")

// console.log(divasam.getFullYear());



//---------Object Constructor----------


// function Person(name,age,dob){
//   this.name=name;
//   this.age=age;
//   this.dob=dob;
//   this.display=function(){
//     console.log("name: "+this.name+" "+"age: "+this.age);
//   }
// }

// let anamika=new Person("anamika",28,"20-20-1995")
// let jasim=new Person("JASIM",23,"09-02-2000")

// anamika.display()
// jasim.display()


//----------------Class & Object-----------

// class mammootyFather{
//   attitude(){
//     console.log("good attitude");
//   }
// }

// class mammooty extends mammootyFather{

//   constructor(num1,num2){
//     super()
//     this.num1=num1;
//     this.num2=num2
//   }
//   look(){
//     console.log("hello"+" " +(this.num1+ this.num2));
//   }
// }

// let dq=new mammooty(2,3);
// dq.look()


// let mod=require("./module")

// mod.hello()



//------------Sample Code ---------------------------

// const { log } = require('console');
// const readline=require('readline');

// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// rl.question("Enter your name: ",(name)=>{
//     console.log("you have entered : "+name);
//     rl.close();
// })

// rl.on('close',()=>{
//     console.log("interface closed");
//     process.exit(0)
// })


//--------------- Read a file ---------------------------------


// let fs=require('fs')

// let text=fs.readFileSync('./read.txt','utf-8')

// console.log(text)

//--------------- Write A file Synchronous----------------------------------

// let fs =require('fs')

// let text=fs.readFileSync('./read.txt','utf-8')

// let content=`content from text.txt is ${text}  \ndate created : ${new Date()}`

// let write=fs.writeFileSync('./write.txt',content);


//-------------------Write a file Asynchronous------------

// let fs=require('fs')

// fs.readFile('./read.txt','utf-8',(error,data)=>{
//     console.log(data)
// });
// console.log('reading file');


//----------------SERVER---------------------

//--------Create--------

// let http=require('http');

// let server=http.createServer((request,response)=>{
//     // response.end('Hello from server')
//     response.end('<h1>Hello from server</h1>')
//     console.log('A new request received')
//     // console.log(response)
// })

// //--------Start The Server--------------

// server.listen(8000,'127.0.0.1',()=>{
//     console.log('Server has Started');
// })


// ----------------Routing -------------


// let http =require('http')

// let server=http.createServer((request,response)=>{
//     let path=request.url;
//     if(path==='/' || path.toLocaleLowerCase()==='/home'){
//         response.end('you are in home');
//     }else if (path.toLocaleLowerCase()==='/about'){
//         response.end('you are in about');
//     }else if(path.toLocaleLowerCase()==='/contact'){
//         response.end('you are in contact');
//     }else {
//         response.end('Error 404: page not found')
//     }
// })

// server.listen(8000,'127.0.0.1',()=>{
//     console.log('server started');
// })


// -----------------EVENT Driven Architecture------------

// let myEmitter =new events.EventEmitter();

// myEmitter.on('userCreated',()=>{
//     console.log("New user is Created");
// })
// myEmitter.on('userCreated',()=>{
//     console.log("New user is updated");
// })
// myEmitter.emit('userCreated')


//----------------Custom Event-----------

// let myEmitter =new events.EventEmitter();

// myEmitter.on('userCreated',(id,name)=>{
//     console.log(`New user is Created with ${name} and ${id}`);
// })
// myEmitter.on('userCreated',()=>{
//     console.log("New user is updated");
// })
// myEmitter.emit('userCreated',3123,"jasim")


//-------------Readable Stream  &  Writable Stream-----------------

// server.on('request',(req,res)=>{
//     let rs=fs.createReadStream('./files/largefiles.txt');
//     rs.on('data',(chunk)=>{
//         res.write(chunk);
//         res.end();
//     })
//     rs.on('error',(error)=>{
//         res.end(error.message);
//     })
// })


//----------------Pipe Method--------------------

// server.on('request',(req,res)=>{
//     let rs =fs.createReadStream('./files/largefiles.txt')
//     rs.pipe(res)
// })
//     //readableSource.pipe(writableDestination)


//-----------------eventloop------------------

// let fs=require('fs')
// setImmediate(()=>{
//     console.log("set immediate - 3rd PHASE");
// })

// fs.readFile('./read.txt',()=>{
//     console.log("file read - 2nd phase");
// })

// setTimeout(()=>{
//     console.log("SET timeout -1st phase");
// })

// console.log("top level - main thread")


//---------------phase inside a phase----------------------------


// let fs=require('fs')


// fs.readFile('./read.txt',()=>{

//     console.log("file read - 2nd phase");

//     setTimeout(()=>{
//         console.log("SET timeout -1st phase");
//     })
    
//     setImmediate(()=>{
//         console.log("set immediate - 3rd PHASE");
//     })

//     process.nextTick(()=>{
//         console.log("nextTick - higher priority");
//     })
// })


// console.log("top level - main thread")




//--------------------------------------EXPRESS-----------------------------------------------


//import Package
// const express=require('express')
// let app = express();

// //Route=HTTP METHOD + URL
// app.get('/',(req,res)=>{
//     res.status(200).send('hello from express server')
//     res.status(200).json({name:jasim,place:mongam})
// })

// //create server
// const port=3000;
// app.listen(port,()=>{
//     console.log('server has started....!');
// })


//----------------------Create Api--------------------

// const { log } = require('console');
// const express=require('express')
// let fs=require('fs')


// let app = express();

// let movies = JSON.parse(fs.readFileSync("./data/movies.json"))

//----------Route= GET + URL-----------
// app.get('/api/v1/movies',(req,res)=>{
//    res.status(200).json({
//     status : "success",
//     count : movies.length,
//     data : {
//         movies : movies
//     }
//    })
// })

//-----------------PARAMS---------------------

// app.get('/api/v1/movies/:id/:name/:genere',(req,res)=>{
//     console.log(req.params);

//     res.send('test movie');
// })

//-----------------PARAMS OPTIONAL---------------------

// app.get('/api/v1/movies/:id?/:name?/:genere?',(req,res)=>{
//     console.log(req.params);

//     res.send('test movie');
// })

//-----------------Request Movie by ID---------------------

// app.get('/api/v1/movies/:id',(req,res)=>{

//     // Convert id to Number Type
//    let id = req.params.id *1;

//    // FIND Movie Based On ID PARAMETER
//    let movie = movies.find(value=>value.id===id)

//    //IF MOvie is not Available with that ID

//    if(!movie){
//         res.status(404).json({
//             status :"failed",
//             message : 'The movie With id '+id+' is Not available'
//         })
//    }

//    // Send MOVIE in RESPONSE
//    res.status(200).json({
//         status:"success",
//         data :{
//             movie : movie
//         }
//    })
// })


//------POST-----

// app.use(express.json()) //middle Ware

// app.post('/api/v1/movies',(req,res)=>{
//     // console.log(req.body); // the req.body and req.object is not connected so use middle ware
//     // res.send('connected')
//     let newId=movies[movies.length-1].id + 1
//     let newMovie=Object.assign({id:newId},req.body)

//     movies.push(newMovie)

//     fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
//         res.status(201).json({
//             status :"success",
//             data :{
//                 movie: newMovie
//             }
//         })
//     })

// })

//create server
// const port=3000;
// app.listen(port,()=>{
//     console.log('server has started....!');
// })



//-------------------Route Handler-----------------

// createMovie=(req,res)=>{
//         // console.log(req.body); // the req.body and req.object is not connected so use middle ware
//         // res.send('connected')
//         let newId=movies[movies.length-1].id + 1
//         let newMovie=Object.assign({id:newId},req.body)
    
//         movies.push(newMovie)
    
//         fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
//             res.status(201).json({
//                 status :"success",
//                 data :{
//                     movie: newMovie
//                 }
//             })
//         })
    
//     }


//--------------------API----------------
// app.get('/api/v1/movies',getAllMovie)
// app.get('/api/v1/movies/:id',getMovie)
// app.post('/api/v1/movies',createMovie)
// app.patch('/api/v1/movies/:id',updateMovie)
// app.delete('/api/v1/movies',deleteMovie)

//---------------------Route-----------

// app.route('/api/v1/movies')
//     .get(getAllMovie)
//     .post(createMovie)

// app.route('/api/v1/movies/:id')
//     .get(getMovie)
//     .patch(updateMovie)
//     .delete(deleteMovie)

//-------------Middleware------------

//record time of each request

// app.use((req,res,next)=>{
//     req.requestedAt = new Date().toISOString()
//     next()
// })


//---------Morgan--------

// let morgan=require('morgan')

// app.use(morgan('dev'))

//---------Middle ware for specefic url---------

// const moviesRouter =express.Router()

// app.route('/')
//     .get(getAllMovie)
//     .post(createMovie)

// app.route('/:id')
//     .get(getMovie)
//     .patch(updateMovie)
//     .delete(deleteMovie)

// app.use('/api/v1/movies',moviesRouter)   