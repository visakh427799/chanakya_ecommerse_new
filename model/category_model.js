const express= require('express');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const categorySchema=new Schema({

    cat_name:String,
    cat_images:String,

})

const Category=mongoose.model('Category',categorySchema);
module.exports=Category;