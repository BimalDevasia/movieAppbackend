const express = require('express');
const router = express.Router();
const connectDB = require('../lib/db');
const Favourite = require('../models/favourite');
router.post('/', async ( req, res ) => {
   
    const { Poster, Title, Type, Year, imdbID } = req.body
    try{
        await connectDB();
        const existingMovie = await Favourite.findOne({ imdbID });
        if (existingMovie) {
        return res.status(409).json({ message: "Movie already exists in favourites" });
     }
        const favourite = new Favourite({
            Poster,
            Title,
            Type,
            Year,
            imdbID
        })
        await favourite.save();
        res.status(201).json({message:"Movie added ",favourite});

    }catch(error){
        res.status(500).json({message:"Error adding Movie",error:error.message});
    }
})

router.get('/',async (req,res)=>{
    try{
        await connectDB();
        const data= await Favourite.find();
        res.status(200).json(data);

    }catch(error){
        response.status(500).json(error.message);
    }
})

router.delete('/:id',async (req,res) => {
    const imdbID  = req.params.id;
    try{
        await connectDB();
        const data = await Favourite.findOneAndDelete({ imdbID});
        if(!data){
            return res.status(404).json({message:"Movie not Found"});
        }
        res.status(200).json({message:"Movie Deleted",data});

    }catch(error){
        res.status(500).json({message:"Fault in deleting movie",error:error.message})
    }
})


module.exports = router;