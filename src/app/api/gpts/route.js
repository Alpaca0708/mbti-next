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
            從生日算出兩人星座，並用星座、工作和人格，分別從生活、樂趣、工作上去分析他兩個的相處模式，
            另外請給我一個1~100分的分數，他們速配指數有多少，謝謝，輸出格式為json，格式大約如以下
            {
                "compatibility_report": {
                  "life_compatibility": {
                    "narrative": "在日常生活中，ENFJ和INTJ可能會遇到一些挑戰。作為感受型的ENFJ，他會注重和諧和人際關係，而INTJ則是理性和自我導向，可能在面對情感表達和需求時顯得比較冷漠。然而，如果兩人能在溝通和相互尊重上達成共識，他們可以學習如何平衡彼此的不同需求，建立一個充滿愛與理解的共同生活環境。",
                    "score": 70
                  },
                  "fun_compatibility": {
                    "narrative": "在尋求樂趣和共享興趣方面，這對搭檔可能需要進行一些妥協。ENFJ通常喜歡社交性的活動，而INTJ可能更喜歡安靜的環境和深入的對話。不過，他們共有的創新精神和對新知的好奇心可以使他們找到共同點，例如進行知識共享或解決問題的遊戲會是兩人都能享受的活動。",
                    "score": 65
                  },
                  "work_compatibility": {
                    "narrative": "工作合作方面，ENFJ的工程師和INTJ的設計師可以形成一個互補性很高的團隊。ENFJ擅長推進項目和激勵團隊，而INTJ則善於規劃和系統化的思維。兩者的不同天賦可以促進一個既有創意又有效率的工作環境。這種互補可以幫助彼此在職業上成長，也有助於建立彼此間的尊重和價值認同。",
                    "score": 80
                  },
                  "overall_compatibility_score": 73,
                  "summary": "總而言之，這對ENFJ和INTJ在感情兼容性上得到73分，表明他們有相當好的潛力去建立一段穩定而充實的關係。儘管他們在一些方面可能有不同，但透過有效的溝通和相互理解，可以克服這些差異，共創美好未來。"
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