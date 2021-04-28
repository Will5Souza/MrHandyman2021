var aMsg = require('./model/message_')
var allMsgs = aMsg.find({});


//Creating messages function



exports.create_msg = async(req, res) =>{ 
      console.log("section: " + req.body.sec_n);
        var sectionName='Painting';
        
        if(req.body.sec_n == 1){
            sectionName = 'Plumbing';
        }else if(req.body.sec_n == 2){
            sectionName = 'Electric';
        }else if(req.body.sec_n == 3){
            sectionName = 'Heating';
        }

        const newMessage = new aMsg ({
            
            section: sectionName,
            name: req.body.name,
            phone: req.body.phone,
            location: req.body.location,
            message: req.body.message
            
        });
    try{
        await newMessage.save();
        console.log(newMessage)        
    }catch(error){
        console.log("There was an error with your messsage");
        console.log(error);      
    }
    //redirecting to index page, therefore will update table
    res.redirect('/');
};

exports.getMessages = async(req,res)=>{
   let allMsgs= [];
   try{
    allMsgs = await aMsg.find()

    res.render('staff',{msgs:allMsgs})
   }catch{
    console.log("Something happend at getting products")
       res.render('staff',{msgs:allMsgs})
   }
    
  };



//delete function
exports.deleteMsg = async(req, res)=> {
    try{
        await aMsg.findByIdAndRemove(req.params.id)
        console.log("trying to delete product with with id " + req.params.id);
        res.redirect('/');
    }catch(error){
        console.log("couldnt delete this message")
        console.log(error);
        res.redirect('/');
    }
    
};