const express=require('express');
const cors=require('cors');
const config=require('./config/env');
const favouriteRouter = require('./routes/favourite');

const app=express();


app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message:"Welcome to the server"})
});

app.use('/api/favourite',favouriteRouter)



app.listen(config.PORT,()=>{
    console.log(`Server is running on port ${config.PORT}`);
}
)