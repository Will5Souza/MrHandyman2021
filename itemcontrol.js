exports.getWorld = function(req,res){
    res.json({result: 'Hello Wrold from Controller'});
}

exports.getWorldParams = function(req,res){
    res.json({message: 'Hello BScBest!', data: [
        req.params.foo,
        req.params.bar
    ]});
};

exports.postWorld = function(req,res){
   new msg ({
         section: sectionName,
            name: req.body.name,
            phone: req.body.phone,
            location: req.body.location,
            message: req.body.message
   }).save(function(err){
       if(err) res.json(err);
       else res.send("Well done")
   });
}
