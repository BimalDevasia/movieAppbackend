const mongoose= require('mongoose');

const Favourite = new mongoose.Schema({
    Poster:{
        type:String
    },
    Title:{
        type:String,
        required:true
    },
    Type:{type:String,
        required:true
    },
    Year:{
        type:String,
        required:true
    },  
    imdbID:{
        type:String,
        required:true
    },
},{
    timestamps:true
})

module.exports = mongoose.models.Favourite || mongoose.model('Favourite',Favourite)
