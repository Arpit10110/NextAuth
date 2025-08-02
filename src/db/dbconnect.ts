import mongoose from "mongoose"; 
export const connectdb = async()=>{ 
    mongoose.connect(process.env.NEXT_PUBLIC_MongooseUrl!,({dbName:"nextauth"})).then(()=>{
        console.log("Connected to the database");
    }).catch((err)=>{
        console.log(err);
    })
}