const express= require('express');
const User = require('../model/user_model');



const UserShow=(req,res,next)=>{

      User.find({},(err,data)=>{
          res.render('admin_allusers',{data})
      })


}

module.exports={
    UserShow    
}