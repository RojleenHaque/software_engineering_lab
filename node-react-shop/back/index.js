import express from 'express'
import cors from 'cors'
import 'dotenv/config'
//import connectDB from './config/mongodb.js'
//import userRouter from './routes/User.js'

const app=express()
const PORT=process.env.PORT|| 4000
//connectDB()

app.use(express.json())
app.use(cors())


//endpoints
app.get("/", (req, res) =>{
    res.send("Api Working")
 })

 //start
 app.listen(PORT || 4000, () => {
    console.log(`Server listening on port ${PORT}`); // Correct use of backticks
});