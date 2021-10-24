
const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

router.get('/timber-calculator',(req,res,next)=>{
  console.log('In the Middleware');
  res.sendFile(path.join(__dirname,'../','views','timbercalculator.html'))
}); 

router.get('/',(req,res,next)=>{
    console.log('In the Middleware');
    res.sendFile(path.join(__dirname,'../','views','timbermain.html'))
 }); 

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
