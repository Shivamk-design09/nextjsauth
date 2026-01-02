/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import connectDb from '@/lib/db'
import User from '@/model/user.model'
import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'

// status code
//200 - 300 = success code
//create- 201

// frontend  error = 400-409
//backend error = 500

export async function POST(request: NextRequest) {
    // write it in try catch if is their any error
    try {
        const { name, email, password } = await request.json()
        await connectDb()

        //check if user exist in data base
        let existUser = await User.findOne({ email })
        if (existUser) {
            return NextResponse.json(
                { message: 'User already exist' },
                { status: 400 }
            )
        }

        if (password.length < 6) {
            return NextResponse.json(
                { message: 'User must be greater than 6 digit' },
                { status: 400 }
            )
        }

        const hashpassword = await bcrypt.hash(password,10)
        const user = await User.create({
            name,
            email,
            password:hashpassword
        })

        //after creating the User return it
        return NextResponse.json(
            user,
            {status:201}
        )

        //server error
    } catch (error) { 
        return NextResponse.json(
            {message:`register ${error}`},
            {status:500}
        )
    }
}

//flow
//signup =
//  first check if use exist or notk
// password must be 8 characters (optional)
// creaet user
// first we hash the password with bcrypt
// create user
