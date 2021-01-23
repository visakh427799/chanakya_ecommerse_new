const express = require('express');
const mongoose = require('mongoose');
const Schema   =mongoose.Schema;


const reviewSchema= new Schema({


    u_id:String,
    item_id:String,
    user_name:String,
    title:String,
    review:String,
    date:Date,

})

const review=mongoose.model('review',reviewSchema);
module.exports=review;