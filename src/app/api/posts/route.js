import { NextResponse } from "next/server";

const url = "https://jsonplaceholder.typicode.com/posts"

export const GET = async () => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return NextResponse.json(data)
    }catch(err){    
        return NextResponse.error({message: err.message})
    }
}

export const POST = async (req) => {
    try{
        const {userId,title,body} = await req.json()
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                title,
                body,
                userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const data = await response.json()
        console.log(data)
        return NextResponse.json(data)
    }catch(err){    
        return NextResponse.error({message: err.message})
    }
}   