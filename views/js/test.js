/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const mongoose = require('mongoose')
const express = require('express')
var aMsg = require('./model/message_')


function getRowHtml(msg) {
    var thtml = getTD(msg.section) 
                + getTD(msg.name) 
                + getTD(msg.phone) 
                + getTD(msg.location)
                + getTD(msg.message)
                + getDelBtn(msg._id);
    thtml = getTR(thtml);
    return thtml;
}
function getTD(val) {
    return '<td>'+ val + '</td>';
}

function getTR(val) {
    return '<tr>'+ val + '</tr>';
}

function getDelBtn(val) {
    return '<td><button type="button" id='+ val +' class="btn btn-default btn-sm btn-del-record"><span class="fa fa-trash-alt"></span> Delete </button></td>';
}

$(document).on("click", ".btn-del-record", function(event) { 

        //identify the row which we will remove from our table.
        var row = $(this).parent().parent();

        $.ajax({
            url: 'msg/delete',
            data: { id:this.id },
            type: 'POST'
        })
        .done((data) => {
            if(data) {
               console.log(data);
               row.remove();
            }
        })
        .fail((err) => {
            console.log("Error");
        });
    });	
    //-------------------------------------------------------END

