 const express=require('express');

 const Cart =require('../model/cart_model');


 const removeCart=async (req,res,next)=>{

    let id=req.params.id;
    console.log(id);

     await Cart.deleteOne({_id:id},(err,data)=>{
         if(err)
         console.log(err)
         else
         console.log(data)
        
         Cart.find({},(err,data)=>{
             res.redirect('/cart')
         })
     })

 }


 module.exports={
     removeCart
 }