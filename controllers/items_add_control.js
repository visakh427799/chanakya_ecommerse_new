  const express =require('express');
  const Items   =require('../model/items_model');
  
  
  var filename;

  const ItemAdd=(req,res,next)=>{
    itm_Availability=req.body.inputAvail;
if(req.files){
    console.log(req.files);
    let file=req.files.inputImg;
     filename=file.name;
    file.mv('./public/assets/img/products/'+filename,(err)=>{
        if(err)return console.log(err)
        else console.log("File uploaded")
    })
}

    if(itm_Availability==="yes"){
        itm_Avail=true;
    }
    else{
        itm_Avail=false;
    }
    
    let item_data ={
        itm_name:req.body.inputName,
        itm_prize:req.body.inputPrize,
        itm_image:filename,
        itm_category:req.body.inputCategory,
        itm_description:req.body.inputDesc,
        itm_Availability:itm_Avail,
        itm_stock:req.body.inputStock,
    }
      console.log(itm_Availability)



     Items.create(item_data,(err,data)=>{
         if (err){
             console.log(err)
            }
         else{
             console.log(data)
             
             res.redirect('/admin')
         }
         
     })
    }
  module.exports={
      ItemAdd
  }