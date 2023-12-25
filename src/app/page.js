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

  const [inputDate, setInputDate] = useState ('Birthday')
  const dateChange = (e) => {
    setInputDate(e.target.value);
  }; 

  const [inputDate2, setInputDate2] = useState ('Birthday')
  const dateChange2 = (e) => {
    setInputDate2(e.target.value);
  }; 
  const [popUp, setPopUp]= useState(false)

  const [popReport, setPopReport]=useState({ isOpen: false, type: null })
  const openReport = (type) =>{
    setPopReport({ isOpen: true, type: type });
    }


  const [result, setResult] = useState({})


  const popUpFunction = async() => {
    setPopUp(true);
    const matchData = {
      male:{        
        mbti: selectMBTI,
        birthday: inputDate,
        job: inputValue,
        }
      ,
      female:{
        mbti: selectMBTI2,
        birthday: inputDate2,
        job: inputValue2,
      }      
    };

    console.log('matchData:::',matchData)


    const response = await fetch('/api/gpts',{   //打到後端的資料
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(matchData)
    })                                    
    const data = await response.json() //後端傳回給前端的資料
    console.log("data:",data)
    setResult(data)
    
  };



  const closePopup= () =>{
    setPopReport(false)
  }

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (result && result.compatibility_report) {
      setLoading(false); // 如果 result 有数据，停止显示加载动画
    }
  }, [result]); 

  

  return (
    <ChakraProvider>
      <div style= {{width:'auto', height:'auto', overflow: 'hidden', position: 'relative', minWidth: '500px', minHeight: '500px' }}>
        <Image src={"/Banner2.png"} width={0} height={0} sizes='100vw' 
        style={{width:'100%', height:'100%', objectFit: 'cover', }}></Image>
        

      </div>




      <div className="App">
        <header style= {{ width: '100%', height: '265px', flexShrink: '0', alignItems: 'center', flexDirection: 'column', }}>
           <Image src={"/Banner2.png"} width={0} height={0} sizes='100vw'  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></Image>
        </header>
        <div style= {{width:'100%', display:'inline-flex', padding:'5px', alignItems:'flex-start' }}>

      <div style = {{width:'100%', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px', padding:'15px'}}>


          <header type={{color: 'var(--heading-title-color, #152536)', fontFamily: 'Lemonada', fontSize: '24px', fontStyle: 'normal', fontWeight: '575', lineHeight: 'normal',}}>
          Male
          </header>
        <div style={{width:'100%', display: 'flex', alignItems: 'center', borderRadius: '12px', border: '1px solid #7F9EBD', background: 'var(--default-white, #FFF)',}}>


            <div style = {{width: '324px',height: '265px',flexShrink: '0', }}>
              <Image src={"/ENTP-DALL.png"}  width={0} height={0}  sizes='100vw' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px',}}></Image>
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
                <input placeholder='input your job or else' style = {{width: '300px', height: '30px', padding:'3px', borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                  type= "text" value={inputValue} onChange={jobChange} />            
            </div>
        </div>
      </div>
                    


<div style = {{width:'100%', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px', padding:'15px'}}>
<header type={{color: 'var(--heading-title-color, #152536)', fontFamily: 'Lemonada', fontSize: '24px', fontStyle: 'normal', fontWeight: '575', lineHeight: 'normal',}}>
  Femle</header>
<div style={{width:'100%', display: 'flex', alignItems: 'center', borderRadius: '12px', border: '1px solid #7F9EBD', background: 'var(--default-white, #FFF)',}}>
        <div style = {{width: '324px',height: '265px',flexShrink: '0', }}>
          <Image src={"/ENFP-DALL.png"}  width={0} height={0}  sizes='100vw' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px',}}></Image>
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
          <input  placeholder='input your job or else'  style = {{width: '300px', height: '30px', padding:'3px', borderRadius: '6px', border: '1px solid #58674F', opacity: '0.5', background: 'var(--white, #FFF)',}}
                    type= "text" value={inputValue2} onChange={jobChange2} />

                    </div>
            </div>

          </div>
        </div>

        <div style={{display:'flex', alignItems:'center',flexDirection:'column'}}>
          <Button colorScheme='yellow' size='sm' onClick={popUpFunction}>Click Make Magic</Button>
          {/* isDisabled={!(result&&result.compatibility_report)} */}
          {popUp &&(
            <div  >
              {loading && 
              (<div className={styles.loadWrapp}>
              <div className={styles.load2}>
              <p>Data Loading...</p>  
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              </div>
              </div>
              )}            
              <div style={{
                display:'none',
                alignItems:'center'
              }}>
                            <div><Image src={"/Star.svg"}  width={50} height={50}  sizes='100vw'></Image>
                            <p>Rate</p></div>
                            <div>{result.compatibility_report?.couple_compatibility?.score}</div>
                            <div>{result.compatibility_report?.couple_compatibility?.narrative}</div>   
                            <div><Image src={"/Star.svg"}  width={50} height={50}  sizes='100vw'></Image>
                            <p>Rate</p></div>
                            <div>{result.compatibility_report?.friends_compatibility?.score}</div>
                            <div>{result.compatibility_report?.friends_compatibility?.narrative}</div>   
                            <div><Image src={"/Star.svg"}  width={50} height={50}  sizes='100vw'></Image>
                            <p>Rate</p></div>
                            <div>{result.compatibility_report?.family_compatibility?.score}</div>
                            <div>{result.compatibility_report?.family_compatibility?.narrative}</div>  

                            <div>{result.compatibility_report?.overall_compatibility?.score}</div>
                            <div>{result.compatibility_report?.overall_compatibility?.narrative}</div> 

              </div>
              
          </div>
          )}
          
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
              <Image src = {"/couple.png"}  width={0} height={0}   sizes='100vw'  style={{
              width: '165%',
              height: '165%',
              objectFit: 'cover', 
              position: 'absolute', 
              top: '-23%', 
              transform: 'translate(0, 0)', // 將變換設置為初始位置

            }}/>


            </div>
              <div style = {{width: '185px', justifyContent:'center', display:'flex', flexWrap:'wrap',}}>
                <p style = {{color: 'var(--gray-700, #2D3748)',textAlign: 'center', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '700', lineHeight: '20px',}}>Get your score how suitable to be Lover
                </p>
              </div>

              <div style= {{textAlign: 'center'}}>

                    <Button isDisabled={!(result&&result.compatibility_report)} colorScheme='yellow' size='sm' onClick={()=> openReport('couple')}>
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
                  <Image src = {"/friend.png"}  width={0} height={0}   sizes='100vw'  style={{
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
                            <Button isDisabled={!(result&&result.compatibility_report)} colorScheme='yellow' size='sm' onClick={()=>openReport('friends')}>
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
              <Image src = {"/family.png"}  sizes='100vw' width={0} height={0}   style={{
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
                  <Button isDisabled={!(result&&result.compatibility_report)} colorScheme='yellow' size='sm' onClick={()=>openReport('family')}>
                        Get Report
                      </Button>
                </div>
           </div>



      
    </footer>
    </div>

    {popReport.isOpen&& (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div >
          {popReport.type === 'couple' && (<div>
            
             <div className={styles.modalTitle}>適合指數{result.compatibility_report?.couple_compatibility?.score}%</div>
             <div className={styles.modalContent}>{result.compatibility_report?.couple_compatibility?.narrative}</div>
            </div>)}
          
          {popReport.type === 'friends' && (<div>
            
            <div className={styles.modalTitle}>適合指數{result.compatibility_report?.friends_compatibility?.score}%</div>
            <div className={styles.modalContent}>{result.compatibility_report?.friends_compatibility?.narrative}</div>
           </div>)}

          {popReport.type === 'family' && (<div>
            
            <div className={styles.modalTitle}>適合指數{result.compatibility_report?.family_compatibility?.score}%</div>
            <div className={styles.modalContent}>{result.compatibility_report?.family_compatibility?.narrative}</div>
           </div>)}

           <Button colorScheme='yellow' size='sm' onClick={closePopup}>
                        Close
                      </Button>
          </div>
      </div>
    </div>)}


    

                        {/* {whichButton=='fun'?<div>fun</div>:whichButton=='work'?<div>work</div>:<div>family</div>} */}
                                                                       
                              

  </div>
  </ChakraProvider>

  )
}




