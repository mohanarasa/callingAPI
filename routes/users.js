var express = require('express');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

app.createUser({
     'firstname': this.state.firstname,
     'surname': this.state.surname,
     'email': this.stae.email,
     'password': this.state.password

   }, (error, userData) => {

     if(error){
       switch(error.code){

         case "EMAIL_TAKEN":
           alert("The new user account cannot be created because the email is already in use.");
         break;

         case "INVALID_EMAIL":
           alert("The specified email is not a valid email.");
         break;

         default:
           alert("Error creating user:");
       }

     }else{
       alert('Your account was created!');
     }

     this.setState({
       email: '',
       password: '',
       loaded: true
     });

   });

 }
