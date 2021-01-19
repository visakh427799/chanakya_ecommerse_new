var express = require('express');
var mongoose = require('mongoose');
var Items = require('../model/items_model');

const productShow=(req,res,next)=>{

     let id=req.params.id;
     console.log(id);

     Items.findOne({_id:id},(err,data)=>{

         if(data){
             Items.find({itm_category:data.itm_category,_id: { $ne: id }},(err,dat)=>{
                res.render('product',{data:data,similar:dat})
             })
             
           
         }
     })

}


module.exports={
    productShow
}