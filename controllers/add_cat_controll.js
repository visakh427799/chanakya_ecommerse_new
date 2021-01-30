const expresss = require('express');
const Category= require('../model/category_model');

const Category_add=(req,res,next)=>{

    let name=req.body.name;
    let img =req.body.img;
    let filename;
    if(req.files){
        console.log(req.files);
        let file=req.files.img;
         filename=file.name;
        file.mv('./public/assets/img/Categories/'+filename,(err)=>{
            if(err)return console.log(err)
            else console.log("File uploaded")
        })
    }


    // console.log(name);
    let obj={
        cat_name:name,
        cat_images:filename,
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
