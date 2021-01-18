const expresss = require('express');
const Category= require('../model/category_model');

const Category_add=(req,res,next)=>{

    let name=req.body.name;
    let img =req.body.img;
    // console.log(name);
    let obj={
        cat_name:name,
        cat_images:img,
    }
    console.log(obj)
    Category.create(obj,(err,dat)=>{

        if(dat)
        {
            console.log(dat)
        }
    })

    res.redirect('/admin');
}
module.exports={
    Category_add
}
