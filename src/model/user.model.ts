/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose"


// _id comes from mongodb when it store the data it gives us
// _id is mongoose.types.objectid
// we are miking it option because in start it will be not their until user is store in mongodb
interface Iuser {
    _id?:mongoose.Types.ObjectId
    name:string,
    email:string
    password:string 
    image:string
    createdAt?:Date
    upDatedAt?:Date
}

//shcem has default eny type make an iterface
const UserSchema = new mongoose.Schema<Iuser>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
    }
},{timestamps:true})


// first check if mongoose.model.User exist or not if yes then use it 
// if not then create  mongoose.model("User",UserSchema)
// their is difference in mongoose.models.User and mongoose.model 
const User =mongoose.models.User ||  mongoose.model("User",UserSchema)
export default User


// jab ham model creat karte h mongoose me ek bject banta h
//mongoose.model = {user:UserModel}
// in next this line will try ot execute again and it will get an error in nextjs only  
// error = cannot overwrite 'user' model once compiled


// ek bar next js chlne ke baad model banegga fir jab bhi code change hoga use fir se user modle ko 
//mongoose.models me dalega or vaha par error ayga oeverwritemodel  cnntoer user model once compile

// first check wheater it is already exist or not if yes use this only  and if not then only creae new one