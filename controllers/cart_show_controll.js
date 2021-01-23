const express = require('express');
const Cart    = require('../model/cart_model');



const Cart_show=async (req,res,next)=>{

   if(res.user){
   let payload=res.user;
   var name=payload.username.name;
   var u_id=payload.username.u_id
}
    await Cart.find({user_id:u_id},(err,data)=>{
       console.log(data)
       if(data){
       let sum=0;
       let k=0;
       data.forEach((val)=>{
           sum+=val.item_prize*val.item_nos;
           k++;
       })

          res.render('cart_show',{data,k,sum,name,u_id})

    }
    })
}


module.exports={
    Cart_show
}