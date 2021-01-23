const cart = require('../model/cart_model');


const cartNumber=(req,res,next)=>{
    let payload=res.user;//taking value from decoded
    let u_id=payload.username.u_id;

    cart.find({user_id:u_id},(err,data)=>{

        let length=data.length;
        res.json({
            "num":length
        })
    })
}

module.exports={
    cartNumber
}