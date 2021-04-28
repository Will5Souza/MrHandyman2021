const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
const app = express();
var aMsg = require('./model/message_')


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
});

router.post("/delete", (req, res, next) => {
    const rid = req.body.id;

    aMsg.findById(rid)
        .exec()
        .then(docs => {
            docs.remove();
            res.status(200).json({
                deleted:true
            });
        })
        .catch(err => {
            console.log(err)
        });
});