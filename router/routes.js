 //get dependencies
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
const app = express();
var msgCtrl = require('../message_ctrl');
var aMsg = require('../model/message_')


router.get('/', function(req, res) {
  res.render('index', {page:'Home', menuId:'home'});
});


router.get('/index', function(req, res) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get("/staff", (req, res, next) => {
    aMsg.find({})
        .exec()
        .then(docs => {
            res.status(200).json({
                docs
            });
        })
        .catch(err => {
            console.log(err)
        });
     res.render('staff', { title: 'All messages'});    
});


router.get('/contactus', function(req, res) {
  res.render('contactus', {page:'Contact Us', menuId:'contactus'});
});



router.post('/new', msgCtrl.create_msg)


router.get('/staff', msgCtrl.getMessages)


module.exports = router;

