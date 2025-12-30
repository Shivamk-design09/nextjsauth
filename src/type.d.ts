// here we can use global only any other will return an error

import { Connection } from "mongoose";

// connection is coming from mongoose
declare global {
 var mongoose:{
    conn:Connection | null,
    promise:Promise <Connection> | null
 }
}

export {}
// first field connection
// if the api already call and connection is made it will be in conn:connection conneciotn is mongoose type
// othervise 
// if their is no connection then the type will be nul


//second field is promise which is still 
// second is pormise
// promise is conntion type 

