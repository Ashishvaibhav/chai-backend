import dotenv from "dotenv"
import connectDB from "./db/index";


dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`Server is running at port:$
           {process.env.PORT }`);
    })
})
.catch((err)=>{
    crossOriginIsolated.log("MONGO db connection faileed !!!",err);
})













/*import express  from "express";
const app = express()

(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Ashish}`)
       app.on("error",(error)=>{
        console.log("ERROR",error);
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`App is  listning on port ${process.env.PORT}`);
       })

    }catch(error){
        console.error("ERROR:",error);
        throw err
    }
})()
*/