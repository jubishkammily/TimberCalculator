const  express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const adminroutes = require('./routes/routes')

app.use(adminroutes);   
app.use(express.static(path.join(__dirname,'.', 'public')));


// app.use('/add-product',(req,res,next)=>{
//    console.log('In the Middleware');
//    res.send("<h1>The add product</h1>")
//    //next(); // Allows the next middlware  if paths are there not required
// }); 

// app.use('/',(req,res,next)=>{
//     console.log('In the Middleware');
//     res.send("<h1>Hello from express</h1>")
//  }); 

//  // get and use are same
//  app.get('/product',(req,res,next)=>{
//     console.log('In the Middleware');
//     res.send("<h1>Hello from express</h1>")
   
//  }); 


// app.use((req,res,next)=>{
//     console.log('In another test the Middleware')
//  }); 

const port = process.env.PORT || 3000; 
const server = http.createServer(app);
server.listen(port);