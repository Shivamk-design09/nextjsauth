/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { connect } from "mongoose"

let mongodbURL = process.env.MONGODB_URL
//check if mongodbURL is here or not if it is false throe an error
if (!mongodbURL) {
  throw new Error('MongoDB URL is missing')
}

let cached = global.mongoose
//in type.d.ts we have declare global var mongoose in this we have conn and promise

// if we dont have cached make conn= null and promise= null
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}
//1) if cached have connection return it
//2) if it is in promise you should return it
//3) if both failed then connect it
const connectDb = async () => {
  if (cached.conn) {
    return cached.conn
  }

   if(!cached.promise){
     cached.promise = connect(mongodbURL).then((c)=>c.connection)
   }

  try {
    cached.conn = await cached.promise
  } catch (error) {
    throw error
  }
  return cached.conn
}

export default connectDb
