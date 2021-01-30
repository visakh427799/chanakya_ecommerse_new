const express=require('express');
const crypto = require('crypto');


const Demo=(req,res,next)=>{

    console.log(req.body)
   

    let bd=req.body;
   let Pay=req.body.pay;
//    console.log(Ordr)
   console.log(Pay)
//    
//    const hmac = crypto.createHmac('sha256',secret);
//    console.log(hmac)
  /* hmac.update()

  hmac=hmac.digest('hex');
  console.log(hmac)
  if(hmac===bd.payrazorpay_signature){
      res.json({"msg":true})
  }
  else{
    res.json({"msg":false})
  }*/



const text = bd.pay.razorpay_order_id+"|"+bd.pay.razorpay_payment_id;
const key = 'P2T6u8pc5ye3bGtFkPRD1GG0'

let hmac=crypto.createHmac('sha256', key)
  .update(text)
  .digest('hex')

  console.log(hmac);

  if(hmac==Pay.razorpay_signature){
    res.json({"msg":true})
}
else{
  res.json({"msg":false})
}
 
}

module.exports={
    Demo
}