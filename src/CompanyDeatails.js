
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import  "./Hiringstyle.css"
// import {MdOutlineLocation } from "react-icons/md"
import { Store } from './Datacompo'


const CompanyDeatails = () => {
    const id=useParams().id
    console.log(id)
    const [companydata1]=useContext(Store)
    var company=companydata1.find((data2)=>{return ( data2.id===Number(id))})
  
  // useEffect( async() => {        
  //          await axios.get("http://localhost:3420/add")
  //               .then((res) => {
  //                   console.log(res.data);
  //                   setData1(res.data)
  //                   console.log(companydata1)
  //     company=companydata1.find((data2)=>{return ( data2.id===Number(id))})
  //     console.log("hiiiii")
  //    console.log(company)
                    
                  
  //               })
  //               .catch(err => console.log(err))
        
            
  //   },[])
    
   
  return (<>
  <div className='bgimg'>
  
  <h2 className='job_details-heading'>More Details About the job</h2>
 
  
  {}
  
   <div className='company-logo'><img src={company.img} alt='not-loaded' className='imgsty'/></div>
   <div className='styl1'><h2>Job Role:</h2></div>
   <div className='styl2'>{company.jobrole}</div>
  <div className='styl1'><h2>Description:</h2></div>
  <div className='styl2'>{company.description}</div>
 <div className='styl5'><div> <div className='styl1'><h2>Experience:</h2></div>
                <div className='styl4'>{company.min_exp}-{company.max_exp}years
                </div></div>
                <div> <div className='styl1'><h2>Lpa:</h2></div>
                <div className='styl4'>{company.lpa}
                </div></div>
                <div> <div className='styl1'><h2>Location:</h2></div>
                <div className='styl4'>{company.location}
                </div></div>
                </div>
                <div className='styl1'><h2>Skills:</h2>
                
                <ul >
                  {company.skills.map((skillsdata)=>{
                    return(<>
                    <li>{skillsdata}</li>
                    </>)
                })}</ul></div> 
  <div className='styl1'>
    <h2>Responsibilites:</h2>
  </div>
  <div className='styl2'><ul type="square">
                  {company.responsibilites.map((skillsdata)=>{
                    return(<>
                    <li>{skillsdata}</li>
                    </>)
                })}</ul></div>
  <div className='styl1'>
    <h2>Job highlights:</h2>
  </div>
  <div className='styl2'><ul >
                  {company.jobhighlights.map((skillsdata)=>{
                    return(<>
                    <li>{skillsdata}</li>
                    </>)
                })}</ul></div>
                <div className='styl1'>
    <h2>Company Information:</h2>
  </div>
  <div className='styl3'>{company.companyinfo}</div>
  
  

  
  </div>
                 
    </>)
}

export default CompanyDeatails
