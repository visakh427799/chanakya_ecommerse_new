const express = require('express');
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


addressSchema=new Schema({

    user_id:String,
    user_name:String,
    user_pincode:String,
    user_phone:String,
    user_postoffice:String,
    user_state:String,
    user_district:String,
    user_housename:String,
    user_locality:String,
    
})

const Address=mongoose.model('Address',addressSchema);
module.exports=Address;