const Cart = require('../model/cart_model');
const express = require('express')

const placeOrder=(req,res,next)=>{
    let sum=0;

    let dat=[
       {
           d:"Tvm"
       },
       {
        d:"Kollam"
    },
    {
        d:"Pathanm"
    }
    ]
    let u_id=req.params.id;
    console.log(u_id)
    Cart.find({user_id:u_id},(err,arr)=>{
        if(arr){
            arr.forEach((val)=>{
                sum+=val.item_prize*val.item_nos;
               
            })
            res.render('placeorder',{u_id,dat,sum})

        }
    })
  
}


module.exports={
    placeOrder
}