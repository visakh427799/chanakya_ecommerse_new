const review = require('../model/review_model');
const express= require('express')
const Items  = require('../model/items_model');
const reviewAdd=(req,res,next)=>{
    let payload=res.user;
    console.log(payload);
    let u_id=payload.username.u_id;
    let name=payload.username.name;
    
    let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

let todaydate=year + "-" + month + "-" + date;


  let obj={
    u_id:u_id,
    item_id:req.body.id,
    user_name:req.body.name,
    title:req.body.title,
    review:req.body.review,
    date:todaydate,
  }
console.log(obj);


  review.create(obj,(err,dat)=>{
      if(err){
          console.log("error")
      }
      else{
         
        res.json({"success":true});
      }
  })

}

module.exports={reviewAdd};