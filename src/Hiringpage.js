import React, { useContext } from 'react'
import   "./Hiringstyle.css"

import {useNavigate } from 'react-router-dom'
import { Store } from './Datacompo'


const Hiringpage = () => {
  const [companydata]=useContext(Store)
  // useEffect(() => {
        
  //           axios.get("http://localhost:3420/add")
  //               .then((res) => {
  //                   console.log(res.data);
  //                   setData(res.data)
  //               })
  //               .catch(err => console.log(err))
        
            
  //   }, [])

const navigate=useNavigate()

  return (<>
    <div className='main-container'>
      {companydata.map((data)=>{
        return(
            <>
            <div className='company-container' key={data.id}>
              <div className='company-exp'>Exp:{data.min_exp}-{data.max_exp}years</div>
                <div className='company-logo'><img src={data.img} alt='not-loaded' className='imgsty'/></div>
                
                <div className='company-description'><h2>Description:</h2><h3>{data.jobrole}</h3>{data.description}</div>
                
                <div className='company-skills'><h2>Skills:</h2>
                <ul key={data.id}>
                  {data.skills.map((skillsdata)=>{
                    return(<>
                    <li>{skillsdata}</li>
                    </>)
                })}</ul></div>
              <button onClick={() =>navigate(`/CompanyDeatails/${data.id}`) } className='button1' >Click here to know more information </button>
              
            </div>
            </>
        )
      })}
    </div>
    
    </>
  )
}

export default Hiringpage
