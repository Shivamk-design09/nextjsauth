// here we can use global only any other will return an error

import { Connection } from "mongoose";

// connection is coming from mongoose

// ------------------- global nodejs me hoti h-------------

declare global{
    var mongoose:{
        conn: Connection | null,
        promise:Promise <Connection> | null
    }
}

export {}
// connection and promise type
// conn =  connection type , promise = Promise  type 
 
// promise is <Connection type>
