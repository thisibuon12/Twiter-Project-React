//dotenv
require('dotenv').config();
//connect DB
const {connectDB} =require('./config/db')

connectDB();

const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const { register, login } = require('./controllers/authController');

const app = express();

// Cors
app.use(cors());

// Body Parser
app.use(express.json());

// app.get('/',(req,res,next)=>{
//     res.status(200).json({
//         status:'success',
//         data:{
//             posts: [{
//                 content: "hello word!!!",
//                 date: "23/05/2022"
//             }]
//         }
//     })
// })

//Mount the  Route
app.use('/api/v1/auth',authRoute);


const port = process.env.APP_PORT;

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
})