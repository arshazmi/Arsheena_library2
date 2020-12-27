const mongoose=require('mongoose');
//mongoose.connect('mongodb://localhost:27017/ExpressJS_Library');
mongoose.connect('mongodb+srv://azmi:azmi@arsheena.vwkoy.mongodb.net/library?retryWrites=true&w=majority');      //connecting mongodb database
                //database:mongodb , Port:27017(default) , database name::LIBRARY  
const Schema=mongoose.Schema;               //to define schema
const userSchema=new mongoose.Schema(       //schema definition
                                    {
                                  name:{
                                    fname:String,
                                    lname:String
                                        },
                                    phone:String,
                                    address:String,
                                    email:String,
                                    type:String,
                                    dob:Date,
                                    password:String
                                    }
                                    );
var userData=mongoose.model('userdata',userSchema); //converting schema into a collection--model creation
                            //creation of "userdatas" collection in the Database as an effect 
module.exports=userData;