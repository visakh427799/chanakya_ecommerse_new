const express = require('express');
const Items   = require('../model/items_model')
const fs = require('fs');

const itemDelete=async (req,res,next)=>{


   let id=req.body.id;
   let img=req.body.imgname;
   console.log(id);
    if(id){
        
        await Items.deleteOne({_id:id},(err,dat)=>{
            if(err){ 
                console.log(err);
                res.json({
                    success:false
                })
                
            }

            else if(dat){

                const path = `public/assets/img/Products/${img}`

                fs.unlink(path, (err) => {
                  if (err) {
                    console.error(err)
                    return
                  }
                });
                res.json({
                    success:true
                })




            }
            else{
                res.json({
                    success:false
                })
            }
        })
    }



}

module.exports={
    itemDelete
}