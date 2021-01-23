const express = require('express');
const Cart    = require('../model/cart_model');
const Item    = require('../model/items_model')


const cart_add=(req,res,next)=>{
 let item_id=req.body.id;



   //console.log(item_id);
   let payload=res.user;//taking value from decoded
   let u_id=payload.username.u_id;


   Item.findOne({_id:item_id},(err,data)=>{
       if(err)
       console.log(err)

       else{

        //console.log(data)
        let cart_obj={
            user_id:u_id,
            item_id:item_id,
            item_name:data.itm_name,
            item_prize:data.itm_prize,
            item_desc:data.itm_description,
            item_image:data.itm_image,
            item_category:data.itm_category,
            item_nos:1,
            }

    // Cart.find({item_id:item_id},(err,dat)=>{

    //    if(data){
    //     let newnos=dat.item_nos+1;
    //     Cart.updateOne({item_id:item_id},{$set: { "item_nos" :newnos}},
    //     (err,data)=>{
                  
    //               if(!err){
    //                   res.redirect('/cart')
    //               }
                
                  
    //     })

    //    }




    //    else{

        Cart.create(cart_obj,(err,data)=>{
            if(err){
            console.log(err)
            res.json({
                "success":false
            })
        }
            else{
            console.log("Added to cart");
            res.json({
                "success":true
            })
            
        } 
        })


    //    }

    // })



          }

   })
 
            
    
}

module.exports={
    cart_add
}