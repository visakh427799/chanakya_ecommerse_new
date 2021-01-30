const express=require('express');
const Cart   = require('../model/cart_model');

const addNumber=async (req,res,next)=>{

     let id=req.body.id;
     //console.log(id)
     await Cart.findOne({_id:id},(err,data)=>{
    //console.log(data)
    if(data){
    let nos=data.item_nos;
    nos++;
    console.log(nos)


                   
     Cart.updateOne({_id:id},{$set: { "item_nos" :nos}},
     (err,data)=>{
               
               if(!err){
                   res.json({
                       "success":true
                   })
               }
             
               
     })

    }
    //               //console.log(data)
     
        })  


      
}
module.exports={
    addNumber
}