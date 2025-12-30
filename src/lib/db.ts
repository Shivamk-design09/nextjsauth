/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
// step in express
// step-1connectDb function
// step-2mongoose.connect('mongodburl')

import { connect } from "mongoose"
import { cache } from "react"

let mongodburl = process.env.MONGODB_URL

if(!mongodburl){
    throw new Error("mongodb URl not found")
}

//in global their is no mongoose this is why it is give error but in js it will not give any error
// mongoose is in global type.d.ts
let cached = global.mongoose

// if connection is 
if(!cached){
    cached = global.mongoose={conn:null,promise:null}
}

// making an async connect db function because we have a pormise to resolve
// if their is any connection in cache return it other check in promise if both dont have any connectoin
// run mongodb connect


// we are makign an async function because their is promise in global.cachec
const connectdb = async ()=>{
    if(cached.conn){
        return cached.conn
    }

    // we want a promise here
    if(!cached.promise){
       cached.promise =   connect(mongodburl).then((c)=>c.connection)
    }

    // they tyr in promise if thir is any connection waiting resolve it and 
    try{
        cached.conn = await cached.promise
    }catch(error){
        throw error
    }
    return cached.conn

    // if connection is also null and their is no promise then created a mongo db connect function



}

export default connectdb