'use client'

import Image from 'next/image';
import styles from './page.module.css';
import {useState,useEffect} from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';



export default function Home() {

  
  
  const MBTIOptions = ["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ","ISTP", "ISFP", "ESTP", "ESFP" ]

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
  const [popUp, setPopUp]= useState(true)


  const [result, setResult] = useState({})

  const popUpFunction = async() => {
    setPopUp(false);
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

  

  return (
    <ChakraProvider>

      <div className="App">
        <header style= {{ width: '100%', height: '265px', flexShrink: '0', alignItems: 'center', flexDirection: 'column', }}>
           <Image src={'/Bubble.jpg'} width={0} height={0} sizes='100vw'  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></Image>
        </header>
        <div style= {{width:'100%', display:'inline-flex', padding:'5px', alignItems:'flex-start' }}>

      <div style = {{width:'100%', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px', padding:'15px'}}>


          <header type={{color: 'var(--heading-title-color, #152536)', fontFamily: 'Lemonada', fontSize: '24px', fontStyle: 'normal', fontWeight: '575', lineHeight: 'normal',}}>
          Male
          </header>
        <div style={{width:'100%', display: 'flex', alignItems: 'center', borderRadius: '12px', border: '1px solid #7F9EBD', background: 'var(--default-white, #FFF)',}}>


            <div style = {{width: '324px',height: '265px',flexShrink: '0', }}>
              <Image src={"/ENFP.jpg"}  width={0} height={0}  sizes='100vw' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px',}}></Image>
            </div>

            <div style= {{display: 'flex', width: '100%',padding: '33px 45px',flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '33px', alignSelf: 'stretch',}}>            
                <select style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                value= {selectMBTI} onChange= {MBTIChanged}>
                      
                      {MBTIOptions.map((option, index) =>(
                        <option key={index} value={option}>
                          {option}
                          </option>
                      ))} 
                      
                </select>

                <input style = {{width: '300px', height: '30px', padding:'3px', borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                  type = "date" value = {inputDate} onChange={dateChange}/>
                <input placeholder='input more information' style = {{width: '300px', height: '30px', padding:'3px', borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                  type= "text" value={inputValue} onChange={jobChange} />            
            </div>
        </div>
      </div>
                    


<div style = {{width:'100%', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px', padding:'15px'}}>
<header type={{color: 'var(--heading-title-color, #152536)', fontFamily: 'Lemonada', fontSize: '24px', fontStyle: 'normal', fontWeight: '575', lineHeight: 'normal',}}>
  Femle</header>
<div style={{width:'100%', display: 'flex', alignItems: 'center', borderRadius: '12px', border: '1px solid #7F9EBD', background: 'var(--default-white, #FFF)',}}>
        <div style = {{width: '324px',height: '265px',flexShrink: '0', }}>
          <Image src={"/ENTP.jpg"}  width={0} height={0}  sizes='100vw' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px',}}></Image>
        </div>
        <div style= {{display: 'flex', width: '100%',padding: '33px 45px',flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '33px', alignSelf: 'stretch',}}>
          
          <select style = {{width: '300px', height: '30px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
          value= {selectMBTI2} onChange= {MBTIChanged2}>
                
                {MBTIOptions.map((option, index) =>(
                  <option key={index} value={option}>
                    {option}
                    </option>
                ))} 
                
          </select>

          <input style = {{width: '300px', height: '30px',padding:'3px',borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                                type = "date" value = {inputDate2} onChange={dateChange2}/>
          <input  placeholder='input more information'  style = {{width: '300px', height: '30px', padding:'3px', borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                    type= "text" value={inputValue2} onChange={jobChange2} />

                    </div>
            </div>

          </div>
        </div>
        <div style = {{alignItems:'center',display:'flex',justifyContent:'center',marginTop:'30px'}}>
    <footer style ={{width:'1032px', height:'291px', display:'flex', justifyContent:'space-around', paddingTop: '25px', }}>


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
              transform: 'translate(0, 0)', // 將變換設置為初始位置

            }}/>


            </div>
              <div style = {{width: '185px', justifyContent:'center', display:'flex', flexWrap:'wrap',}}>
                <p style = {{color: 'var(--gray-700, #2D3748)',textAlign: 'center', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '700', lineHeight: '20px',}}>Get your score how suitable to be Lover
                </p>
              </div>

              <div style= {{textAlign: 'center'}}>

                    <Button colorScheme='yellow' size='sm' onClick={popUpFunction}>
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
                  transform: 'translate(0, 0)', // 將變換設置為初始位置

                }}/>
                    </div>
                    <div style = {{width: '185px', justifyContent:'center', display:'flex', flexWrap:'wrap',}}>
                    <p style = {{color: 'var(--gray-700, #2D3748)',textAlign: 'center', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '700', lineHeight: '20px',}}>Get your score how suitable to be Friends
                    </p>
                  </div>        

                      <div style= {{textAlign: 'center'}}>

                            <Button colorScheme='yellow' size='sm' onClick={popUpFunction}>
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
              transform: 'translate(0, 0)', // 將變換設置為初始位置
              
            }}/>

            </div>
            <div style = {{width: '185px', justifyContent:'center', display:'flex', flexWrap:'wrap',}}>
                <p style = {{color: 'var(--gray-700, #2D3748)',textAlign: 'center', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '700', lineHeight: '20px',}}>Get your score how suitable to be Family
                </p>
              </div>

              <div style= {{textAlign: 'center'}}>
                  <Button colorScheme='yellow' size='sm' onClick={popUpFunction}>
                        Get Report
                      </Button>
                </div>
           </div>



      
    </footer>
    </div>


    {popUp && (
         <div style={{  display: 'none',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', /* 半透明的遮罩背景 */
            zIndex: '1000', /* 置於最上層 */ }}>
            <div style= {{justifyContent:'center',textAlign:'center',  
                position: 'absolute',
                top: '50%', /* 將窗口置中 */
                left: '50%',
                transform: 'translate(-50%, -50%)', /* 水平和垂直置中 */
                backgroundColor: 'white',
                border: '5px solid #ca64da',
                borderRadius: '20px',
                padding: '20px',
                zIndex: '1001', /* 置於遮罩之上 */}}>
                    
                              <div>{result.compatibility_report?.fun_compatibility?.narrative}</div>
                              <div>{result.compatibility_report?.fun_compatibility?.score}</div>

                              
                              <Button colorScheme='orange' size='xs' onClick={closePopup}>Close</Button>
                       
            </div>
         </div>
                   )} 

  </div>
  </ChakraProvider>

  )
}




