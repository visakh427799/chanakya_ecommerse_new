const express = require('express');
const Address = require('../model/address_model');
const Cart  = require('../model/cart_model')
var P_key='pk_test_51HzOX8H1q928mWLKe7WnxPL2UBbFx52f5dIckwG2DZbJnLRhoBo4bhnPSUPgONhGO1dkjKF6vN41VXUlLJhLqOEN000x01Lm9U';
const Add_address=(req,res,next)=>{

let payload=res.user;
console.log(payload);
let u_id=payload.username.u_id;
var userObj={
    user_id:u_id,
    user_name:req.body.username,
    user_pincode:req.body.userpin,
    user_phone:req.body.userphone,
    user_postoffice:req.body.userpostoffice,
    user_state:req.body.userstate,
    user_district:req.body.userdistrict,
    user_housename:req.body.userhouse,
    user_locality:req.body.usercity
 
}

console.log(userObj);
console.log(req.body.userpaymentmethod);
// let sum=0;
// //console.log(userObj);

Address.findOne({user_id:u_id},(err,data)=>{
    if(data){
        console.log("Address found");

        Cart.find({user_id:u_id},(err,data)=>{
           // console.log(data)
           
            // data.forEach((val)=>{
            //     sum+=val.item_prize*val.item_nos;
            // })
            
            res.redirect('/order/confirm')
            
         })
     
    }

    else{

                Address.create(userObj,(err,data)=>{
                    if(err){
                        console.log(err)
                    }
                    else if(data){
                       if(req.body.userpaymentmethod==="COD"){
                                  
            res.redirect('/order/confirm')
            
                       }
                    }
                })
       }

    
})

 
}
module.exports={
    Add_address
}