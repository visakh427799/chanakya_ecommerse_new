const review = require('../model/review_model');

const getReviews=(req,res,next)=>{

    let id=req.query.id;
   console.log(id)
   
    review.find({item_id:id},(err,data)=>{
      if(data){
          console.log(data);

          res.json({
              "data":data
          })
      }

    })

}
module.exports={getReviews}