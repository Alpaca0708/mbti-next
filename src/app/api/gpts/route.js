import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// const model_version = 'gpt-4'
// const model_version = 'gpt-3.5-turbo'
// const model_version = 'gpt-4-1106-preview'
const model_version = 'gpt-3.5-turbo-1106'

export const POST = async (req) => {
    try{
        // const input_data = {
        //     male:{
        //         mbti:'ENFJ',
        //         birthday:'2000/9/1',
        //         job:'engineer',
        //     },
        //     female:{
        //         mbti:'INTJ',
        //         birthday:'1997/9/1',
        //         job:'designer',
        //     }
        // }
        const { male, female} = await req.json()
        const message = `
            幫我算兩個的戀愛報告，著重在兩個已經是戀人上面
            男生的mbti是${male.mbti}人格，生日為${male.birthday}，工作為${male.job}，
            女生的mbti是${female.mbti}人格，生日為${female.birthday}，工作為${female.job}，
            分別從戀人、朋友、家人上去分析他兩個的相處模式，
            另外請給我一個1~100分的分數，他們速配指數有多少，謝謝，用中文回我，輸出格式為json，格式大約如以下
            {
                "compatibility_report": {
                  "couple_compatibility": {
                    "narrative": 
                    "score": 
                  },
                  "friends_compatibility": {
                    "narrative": 
                    "score": 
                  },
                  "family_compatibility": {
                    "narrative": 
                    "score": 
                  },
                  "overall_compatibility_score": 
                  "summary":
            }
        `
            
        console.log(123)
        // let sendContent = `我在寫一本電子書，幫我想條列式大綱，吸引人一點的，輸出格式為JSON，規則如以下{ "title": "", "sections": [ { "title": "", "subsections": [ "", "" ] }}，主題是 ${message}，不要問我問題直接寫` 
        const completion = await openai.chat.completions.create({
          messages: [
            { role: "system", content: "你是一個情感專家、心理學專家、人格測驗專家" },
            { role: "user", content:  message}
          ],
          model: model_version,
          response_format: { type: "json_object" }
        });
        let str = completion.choices[0].message.content
        console.log('choices[0]:::',completion.choices[0])
        console.log('====分析報告====')
        let strJSON = JSON.parse(str)
        console.log(typeof strJSON)
        return NextResponse.json(strJSON)
    }catch(err){    
        console.log('err::',err)
        return NextResponse.error({message: err.message})
    }
}