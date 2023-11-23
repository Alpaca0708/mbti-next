'use client'

import Image from 'next/image'
import styles from './page.module.css'
import {useState,useEffect} from 'react'

export default function Home() {

  const [information,setInformation] = useState(null)
  const [loading,setLoading] = useState(false)

  const [match_data,setMatchData] = useState({
    male:{
      mbti:'ENTP',
      birthday:'1991/05/02',
      job:'engineer',
    },

    female:{
      mbti:'ENFP',
      birthday:'1989/11/03',
      job:'sales',
    }
  })

  const postGPTresponse = async() => {
    setLoading(true)
    const response = await fetch('/api/gpts',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(match_data)
    })
    const data = await response.json()
    // {
    //   "compatibility_report": {
    //     "life_compatibility": {
    //       "narrative": "在日常生活中，ENFJ和INTJ可能會遇到一些挑戰。作為感受型的ENFJ，他會注重和諧和人際關係，而INTJ則是理性和自我導向，可能在面對情感表達和需求時顯得比較冷漠。然而，如果兩人能在溝通和相互尊重上達成共識，他們可以學習如何平衡彼此的不同需求，建立一個充滿愛與理解的共同生活環境。",
    //       "score": 70
    //     },
    //     "fun_compatibility": {
    //       "narrative": "在尋求樂趣和共享興趣方面，這對搭檔可能需要進行一些妥協。ENFJ通常喜歡社交性的活動，而INTJ可能更喜歡安靜的環境和深入的對話。不過，他們共有的創新精神和對新知的好奇心可以使他們找到共同點，例如進行知識共享或解決問題的遊戲會是兩人都能享受的活動。",
    //       "score": 65
    //     },
    //     "work_compatibility": {
    //       "narrative": "工作合作方面，ENFJ的工程師和INTJ的設計師可以形成一個互補性很高的團隊。ENFJ擅長推進項目和激勵團隊，而INTJ則善於規劃和系統化的思維。兩者的不同天賦可以促進一個既有創意又有效率的工作環境。這種互補可以幫助彼此在職業上成長，也有助於建立彼此間的尊重和價值認同。",
    //       "score": 80
    //     },
    //     "overall_compatibility_score": 73,
    //     "summary": "總而言之，這對ENFJ和INTJ在感情兼容性上得到73分，表明他們有相當好的潛力去建立一段穩定而充實的關係。儘管他們在一些方面可能有不同，但透過有效的溝通和相互理解，可以克服這些差異，共創美好未來。"
    // }
    setInformation({
      ...information,
      lover:data
    })
    console.log(data)
    setLoading(false)
    console.log(information)
  }

  useEffect(()=>{
    // postGPTresponse()
  },[])
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <p>hello</p>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <p>MBTI</p>
       
      </div>
      <div>
        {JSON.stringify(match_data)}
        <button onClick={postGPTresponse}>click</button>
      </div>

    <div style={loading||(information&&information.lover)?{display:'flex',width:'100%',height:'100vh',justifyContent:'center',position:'fixed'}:{display:'none'}}>
      <div style={{backgroundColor:'white',width:'80%',height:'80vh',border:'1px solid black',padding:'30px'}}>
        {loading&&<p>loading...(約等待30秒產生AI報告)</p>}
        <h3>生活</h3>
        <p>{information?.lover?.compatibility_report.life_compatibility.narrative}</p>
        <h3>樂趣</h3>
        <p>{information?.lover?.compatibility_report.fun_compatibility.narrative}</p>
        <h3>工作</h3>
        <p>{information?.lover?.compatibility_report.work_compatibility.narrative}</p>
        <h3>綜合分數</h3>
        <h2 style={{color:'red'}}>{information?.lover?.compatibility_report.overall_compatibility_score}</h2>
        <button onClick={()=>setInformation(null)}>close</button>
      </div>
    </div>
    </main>
  )
}
