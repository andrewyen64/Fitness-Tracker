const Exercises = require('../models/Exercises');

module.exports = function(app){ 
    app.get("/api/workouts",function(req,res){  
        Exercises.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    app.post("/api/workouts",function (req,res){    
        Exercises.create({})
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });


    app.get("/api/workouts/range",function(req,res){  
        Exercises.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    app.post("/api/workouts/range",function (req,res){    
        Exercises.create({})
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });


    app.put("/api/workouts/:id",({body,params},res)=>{   
        Exercises.findByIdAndUpdate(  
            params.id,
            {$push:{exercises:body} },
            {new: true,runValidators:true }
        )
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });
}

