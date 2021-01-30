const express = require('express');

const Address=require('../model/address_model');
const Order = require('../model/order_model');
const Cart = require('../model/cart_model');
const Razorpay = require('razorpay')
var instance = new Razorpay({
    key_id: 'rzp_test_xW84bcRrCALV2O',
    key_secret: 'P2T6u8pc5ye3bGtFkPRD1GG0'
  })


const Order_item=async (req,res,next)=>{

    let mt=req.body.p_method;
    // console.log("Hiiii")
    let payload=res.user;//taking value from decoded
    let u_id=payload.username.u_id;
    var sum=0;

   await Cart.find({user_id:u_id},(err,cartArray)=>{
        if(err){
            //console.log("err");
        }
        else{

            Address.findOne({user_id:u_id},(err,userAddress)=>{
                if(err){
                    console.log("err");
                }
                else{

                    Cart.find({user_id:u_id},(err,data)=>{
                        // console.log(data)
                        if(data){
                       
                      
                        data.forEach((val)=>{
                            sum+=val.item_prize*val.item_nos;
                           
                        })

                    }
                })
                    //console.log(data);
                    // console.log(userAddress)

                    console.log(typeof sum)
                    let total=800;
                    const obj={
                        U_id:u_id,
                        Items:cartArray,
                        Date:2020-12-09,
                        Total:total,
                        Address:userAddress,
                        Payment_status:false,
                        Order_status:false,
                        Payment_method:mt,
                    }
                
                    Order.create(obj,(err,data)=>{
                        if(err){
                            console.log(err)
                        }
                        else{

                                        if(obj.Payment_method==="Online"){
                                        //console.log("Sucess")
                                                var rept=""+data._id
                                                    var options = {
                                                        amount: sum*100,  // amount in the smallest currency unit
                                                        currency: "INR",
                                                        receipt:rept
                                                    };
                                                    if(options){
                                                        instance.orders.create(options, function(err, order) {
                                                            if(err){
                                                                console.log(err)
                                                            }
                                                            else{
                                                                // console.log('order',order);
                                                                res.json({
                                                                   "success":true,
                                                                   "p_method":true,
                                                                   "order_id":order.id,
                                                                   "Order":order
                                                            
                                                                })
                                                            }
                                                            
                                                        });
                                                     }
                                        }
                                        else{
                                            // res.json({
                                            //     "success":false,
                                            //     "p_method":"COD"
                                         
                                            //  })
                                            res.render('success')
                                        }
                                                   
                                    }
                                   
                                   
                                        })
                                    
                                    
                                    }
                                    
                                })
        
        
        }
    })
  
    
   
}

module.exports={
    Order_item
}