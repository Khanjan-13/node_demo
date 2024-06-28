const express = require('express');
const router = express.Router();
const Person = require('../models/person');  
 // post route to /person
 router.post('/',async (req,res)=>{
    try{
        const data = req.body; //Assuming request body contains person data

    //Create person document using mongoose model
    const newPerson = new Person(data);

   const response = await  newPerson.save();       
            console.log('sucessfully sent');
            res.status(200).json(response)
    
    }catch(err){
        console.log('Error saving data', err);
        res.status(500).json({error:'Internal server error!'})
    }
}) 
  router.get('/',async (req,res)=>{
    try{
        const data =await Person.find();      
            console.log('sucessfully sent');
            res.status(200).json(data)
    
    }catch(err){
        console.log('Error saving data', err);
        res.status(500).json({error:'Internal server error!'})
    }
})

    router.get('/:worktype',async (req,res)=>{
        try{
            const worktype = req.params.worktype;
            if(worktype == 'chef' || worktype == 'waiter' || worktype == 'worker'){
                const response = await Person.find({work:worktype});
                console.log('Fetch Sucessfully');
                res.status(200).json(response);
            }else{
                res.status(404).json({error:'Invalid work type!'});
            }
        }catch(err){
            console.log('Error saving data', err);
            res.status(500).json({error:'Internal Server Error'})
        }
        })  
        
        router.put('/:id',async (req,res)=>{
        try{
            const PersonId = req.params.id;
            const UpdatePerson = req.body;
            const response = await Person.findByIdAndUpdate(PersonId,UpdatePerson,{
                new:true,
                runValidators:true,
            });
            if(!response){
                return res.status(404).json({error:'Person not found'})
            }
            // Send the updated person as a response
        return res.status(200).json(response);
        }catch(err){
            console.log('Error saving data', err);
            return res.status(500).json({error:'Internal Server Error'});
        }
        })

        router.delete('/:id', async (req,res)=>{
            try{
                const PersonId = req.params.id;
                const response = await Person.findByIdAndDelete(PersonId);
                if(!response){
                    return res.status(404).json({error:'Person not found'})
                }
                console.log('data delete');
                return res.status(200).json({message:'Delete Sucessfully'});
            }catch(err){
                console.log('Error deleting', err);
            }
        })

module.exports = router;