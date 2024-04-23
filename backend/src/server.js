import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes/index"


dotenv.config({path:"./.env"})
const app = express();

app.use(bodyParser.json());
app.use("/path",routes);

const dburl = process.env.DATABASE_URL;
// console.log(dburl)
 mongoose.connect(dburl).then(()=>console.log("Database connected successfully"));


const port = process.env.PORT || 4045;

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})


export default app;
