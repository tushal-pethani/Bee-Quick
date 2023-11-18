import express from 'express'
import { db } from './db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRoutes from './routes/userRoute.js'
const app = express()
//MIDDLEWARES
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
app.use(cookieParser())
// app.use(cors:)
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use(express.json());

//ROUTES
app.use('/api/user',userRoutes)

app.get("/", (req, res) => {
    res.json("Hello there!")
})
db.connect(error=>{
    if(error) {
        console.log("Error");
        console.log(error);
    }
    else{
        console.log("Connected to Database!");
    } 
})
app.listen(8800, () => {
    console.log("Connected to server!")
})