const express = require('express');
const Cart  = require('../model/cart_model');


const minusCart=async (req,res,next)=>{
      
    let id=req.params.id;
    //console.log(id)
    await Cart.findOne({_id:id},(err,data)=>{
   //console.log(data)
   if(data){
   let nos=data.item_nos;
   if(nos===1)
   {
       nos=1;
   }
   else{
    nos--;
   }
   
   console.log(nos)


                  
    Cart.updateOne({_id:id},{$set: { "item_nos" :nos}},
    (err,data)=>{
              
              if(!err){
                  res.redirect('/cart')
              }
            
              
    })

   }
   //               //console.log(data)
    
       })  



}


module.exports={
    minusCart
}