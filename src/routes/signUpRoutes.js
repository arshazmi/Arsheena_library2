const express = require("express");
const userData=require('../model/userData');
//const popupS=require('popups');
//const alert=require('alert');
var signupStatus;

const signUpRouter=express.Router();

function router(nav)
{
    signUpRouter.get('/',(req,res)=>
    {
      res.render('signUp',{nav});
    });
signUpRouter.post('/submitData',(req,res)=>
                                  {
                                let data = {
                                     name:{
                                       fname : req.body.fname,
                                       lname : req.body.lname
                                          },
                                      phone : req.body.phone,
                                      email : req.body.email,
                                      type:req.body.userType,
                                      dob : req.body.dob,
                                      password : req.body.password
                                      };
    userData.findOne({email:data.email,password:data.password})
    .then((user)=>{
              if(user==null)
              {
                let user=userData(data);
                user.save();
                res.render('logIn',{
                nav,
                //alertMSG:"signedUp Successfully!",
                status:"Enter Username and Password!"
                                });
              }
              else
              {
                signupStatus="Account Exists!";
                res.redirect('/signUp');
              }
             })
                    });
    return signUpRouter;
}

module.exports = router;