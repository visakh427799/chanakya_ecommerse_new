var express = require('express');
var mongoose = require('mongoose');
var Items = require('../model/items_model');
var Cart  = require('../model/cart_model')

const productShow=async (req,res,next)=>{

     let id=req.params.id;
     if(res.user){
        let payload=res.user;
        var name=payload.username.name;
        var u_id=payload.username.u_id
     }
    //  console.log(id);

   await  Items.findOne({_id:id},(err,data)=>{

         if(data){
         Items.find({itm_category:data.itm_category,_id: { $ne: id }},(err,dat)=>{

                if(dat){

            Cart.find({user_id:u_id},(err,da)=>{
                        if(da){
                            let num=da.length;
                            res.render('product',{data,similar:dat,name,num})
                        }
                    })
                }
             
             })
             
           
         }
     })

}


module.exports={
    productShow
}