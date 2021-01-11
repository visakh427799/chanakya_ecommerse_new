var express = require('express');
var mongoose = require('mongoose');
var Items = require('../model/items_model');

const productShow=(req,res,next)=>{

     let id=req.params.id;
     console.log(id);

     Items.findOne({_id:id},(err,data)=>{

         if(data){
             console.log(data)
             res.render('product',{data:data})
         }
     })

}


module.exports={
    productShow
}