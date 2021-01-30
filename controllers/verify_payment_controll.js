const express = require('express');
const crypto = require('crypto');
const secret='dFleabkUSXa5N5Pj7KcKxAQt';

const verifyPay=(req,res,next)=>{

   console.log(req.body);
  let bd=req.body;
//    let Pay=req.body.pay;
   console.log(Ordr)
   console.log(pay)
   var hmac = crypto.createHmac('sha256',secret);
   hmac.update(bd.pay.razorpay_order_id+"|"+bd.pay.razorpay_payment_id)

  hmac=hmac.digest('hex')
  if(hmac===bd.payrazorpay_signature){
      res.json({"msg":true})
  }
  else{
    res.json({"msg":false})
  }

}

module.exports={
    verifyPay
}