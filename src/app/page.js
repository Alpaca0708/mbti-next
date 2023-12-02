'use client'

import Image from 'next/image'
import styles from './page.module.css'
import {useState,useEffect} from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';


export default function Home() {

  
  
  const MBTIOptions = ["請選擇", "INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ","ISTP", "ISFP", "ESTP", "ESFP" ]

  const [selectMBTI,setSelectMBTI] = useState('ENTP') 
  const MBTIChanged =(event) => {
    setSelectMBTI(event.target.value);
  };
  const [selectMBTI2,setSelectMBTI2] = useState('ENFP') 
  const MBTIChanged2 =(event) => {
    setSelectMBTI2(event.target.value);
  };

  const [inputValue, setInputValue] = useState('');   
  const jobChange = (e) => {
    setInputValue(e.target.value);
  };           
  const [inputValue2, setInputValue2] = useState('')
  const jobChange2 = (e) => {
    setInputValue2(e.target.value);
  }; 

  const [inputDate, setInputDate] = useState ('1991-05-02')
  const dateChange = (e) => {
    setInputDate(e.target.value);
  }; 

  const [inputDate2, setInputDate2] = useState ('1989-11-03')
  const dateChange2 = (e) => {
    setInputDate2(e.target.value);
  }; 
  const [popUp, setPopUp]= useState(false)


  const [result, setResult] = useState({})

  const popUpFunction = async() => {
    setPopUp(true);
    const matchData = {
      male:{        
        MBTI: selectMBTI,
        Birthday: inputDate,
        job: inputValue,
        }
      ,
      female:{
        MBTI: selectMBTI2,
        Birthday: inputDate2,
        job: inputValue2,
      }      
    };
    const response = await fetch('/api/gpts',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(matchData)
    })
    const data = await response.json()
    console.log("data:",data)
    setResult(data)
    
  };
  const closePopup= () =>{
    setPopUp(false)
  }

  

  const ABC = ['rabbit']
  

  return (
    <ChakraProvider>

      <div className="App">
        <header style= {{ width: '100%', height: '265px', flexShrink: '0', alignItems: 'center', flexDirection: 'column', }}>
           <Image src={'/Bubble.jpg'} width={0} height={0} sizes='100vw'  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></Image>
        </header>
        <div style= {{display:'flex', padding:'5px' }}>

      <div style = {{width:'100%', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px', padding:'15px'}}>


          <header type={{color: 'var(--heading-title-color, #152536)', fontFamily: 'Lemonada', fontSize: '24px', fontStyle: 'normal', fontWeight: '575', lineHeight: 'normal',}}>
          Male
          </header>
        <div style={{display: 'flex', alignItems: 'center', borderRadius: '12px', border: '1px solid #7F9EBD', background: 'var(--default-white, #FFF)',}}>


            <div style = {{width: '324px',height: '265px',flexShrink: '0', }}>
              <Image src={"/ENFP.jpg"}  width={0} height={0}  sizes='100vw' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px',}}></Image>
            </div>

            <div style= {{display: 'flex', width: '348px',padding: '33px 45px',flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '33px', alignSelf: 'stretch',}}>            
                <select style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                value= {selectMBTI} onChange= {MBTIChanged}>
                      
                      {MBTIOptions.map((option, index) =>(
                        <option key={index} value={option}>
                          {option}
                          </option>
                      ))} 
                      
                </select>

                <input style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                  type = "date" value = {inputDate} onChange={dateChange}/>
                <input placeholder='input more information' style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                  type= "text" value={inputValue} onChange={jobChange} />            
            </div>
        </div>
      </div>
                    


<div style = {{width:'100%', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px', padding:'15px'}}>
<header type={{color: 'var(--heading-title-color, #152536)', fontFamily: 'Lemonada', fontSize: '24px', fontStyle: 'normal', fontWeight: '575', lineHeight: 'normal',}}>
  Femle</header>
<div style={{display: 'flex', alignItems: 'center', borderRadius: '12px', border: '1px solid #7F9EBD', background: 'var(--default-white, #FFF)',}}>
        <div style = {{width: '324px',height: '265px',flexShrink: '0', }}>
          <Image src={"/ENTP.jpg"}  width={0} height={0}  sizes='100vw' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px',}}></Image>
        </div>
        <div style= {{display: 'flex', width: '348px',padding: '33px 45px',flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '33px', alignSelf: 'stretch',}}>
          
          <select style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
          value= {selectMBTI2} onChange= {MBTIChanged2}>
                
                {MBTIOptions.map((option, index) =>(
                  <option key={index} value={option}>
                    {option}
                    </option>
                ))} 
                
          </select>

          <input style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                                type = "date" value = {inputDate2} onChange={dateChange2}/>
                                <input  placeholder='input more information'  style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                    type= "text" value={inputValue2} onChange={jobChange2} />

                    </div>
            </div>

          </div>
        </div>
        <div style = {{alignItems:'center',display:'flex',justifyContent:'center',marginTop:'30px'}}>
    <footer style ={{width:'1032px', height:'291px', background: 'beige', display:'flex', justifyContent:'space-around', paddingTop: '25px', }}>


          <div style = {{flexDirection:'column',}}>  
            <div   style={{
            width: '185px',
            height: '185px',
            display:'inline-block',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
          }} >
              <Image src = {"/couple-holiday.png"}  width={0} height={0}   sizes='100vw'  style={{
              width: '165%',
              height: '165%',
              objectFit: 'cover', 
              position: 'absolute', 
              top: '-33%', 
              left: '-32%', // 調整圖片的左邊距
              transform: 'translate(0, 0)', // 將變換設置為初始位置

            }}/>


            </div>
              <div style = {{width: '185px', justifyContent:'center', display:'flex', flexWrap:'wrap',}}>
                <p style = {{color: 'var(--gray-700, #2D3748)',textAlign: 'center', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '700', lineHeight: '20px',}}>Get your score how suitable to be Lover
                </p>
              </div>

              <div>

                    <Button style= {{colorScheme:'yellow ', size:'sm',}}onClick={popUpFunction}>
                        Get Report
                      </Button>

              </div>
              </div>
              <div style= {{width: '1px', height: '190.003px',background: '#A9C6A4',}}></div>
              <div style = {{flexDirection:'column',}}> 
                <div   style={{
                  width: '185px',
                  height: '185px',
                  display:'inline-block',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                  }} >
                  <Image src = {"/two-friends.png"}  width={0} height={0}   sizes='100vw'  style={{
                  width: '165%',
                  height: '165%',
                  objectFit: 'cover', 
                  position: 'absolute', 
                  top: '-35%', 
                  left: '-32%', // 調整圖片的左邊距
                  transform: 'translate(0, 0)', // 將變換設置為初始位置

                }}/>
                    </div>
                    <div style = {{width: '185px', justifyContent:'center', display:'flex', flexWrap:'wrap',}}>
                    <p style = {{color: 'var(--gray-700, #2D3748)',textAlign: 'center', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '700', lineHeight: '20px',}}>Get your score how suitable to be Friends
                    </p>
                  </div>        

                      <div>

                            <Button style= {{colorScheme:'yellow', size:'sm',}} onClick={popUpFunction}>
                                Get Report
                              </Button>

                      </div>


            </div>
            <div style= {{width: '1px', height: '190.003px',background: '#A9C6A4',}}></div>
            <div style = {{flexDirection:'column',}}>

            <div   style={{
            width: '185px',
            height: '185px',
            display:'inline-block',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
          }} >
              <Image src = {"/family-members.png"}  sizes='100vw' width={0} height={0}   style={{
              width: '165%',
              height: '165%',
              objectFit: 'cover', 
              position: 'absolute', 
              top: '-35%', 
              left: '-32%', // 調整圖片的左邊距
              transform: 'translate(0, 0)', // 將變換設置為初始位置
              
            }}/>

            </div>
            <div style = {{width: '185px', justifyContent:'center', display:'flex', flexWrap:'wrap',}}>
                <p style = {{color: 'var(--gray-700, #2D3748)',textAlign: 'center', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '700', lineHeight: '20px',}}>Get your score how suitable to be Family
                </p>
              </div>

              <div>

                    <Button style= {{colorScheme:'yellow', size:'sm'}} onClick={popUpFunction}>
                        Get Report
                      </Button>
                </div>
           </div>



      
    </footer>
    </div>


    {popUp && (
                <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center',}}>
                        <div style={{justifyContent: 'center', alignItems: 'center', width:'300px', height:'360px', border:'1px solid #000'}}>
                              {/* condition ? expressionIfTrue : expressionIfFalse */}
                              {/* <p>male:</p>
                              {selectMBTI}<br/>
                              {inputDate}<br/>
                              {inputValue}<br/>
                              <br/>
                              <p>female</p>
                              {selectMBTI2}<br/>
                              {inputDate2}<br/>
                              {inputValue2}<br/>
                              <br/> */}
                              {/* {console.log (ABC)} */}
                              {/* <p>Match Data: {JSON.stringify(matchData)}</p> */}
                              {/* {<p>Result Data: {JSON.stringify(result)}</p>} */}
                              <div>{result.compatibility_report?.fun_compatibility?.narrative}</div>
                              <div>{result.compatibility_report?.fun_compatibility?.score}</div>

                              
                              <button onClick={closePopup}>Close</button>
                        </div>
                  </div>
                  )}

  </div>
  </ChakraProvider>

  )
}
