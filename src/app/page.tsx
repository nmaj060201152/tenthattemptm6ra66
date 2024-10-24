'use client'
import {useState} from 'react'
export default function FirstMileStone(){

  const [showskills, setShowSkills] = useState(true)

  function skillsShowHide(){
    setShowSkills(!showskills)
    


  };




  return(
    <>
    <section className='bg-green-500'>
      <h1>Personal Information</h1>
      <p>Name: Saif Ali Khan</p>
      <p>Wife Name: Kareena Kapoor</p>
      <p>Email: abc@gmail.com</p>
      <p>Phone: 1234567890</p>
    </section>

    <section className='bg-yellow-500'>
      <h1>Academic Qualification</h1>
      <p>SSC: 90%</p>
      <p>HSC: 85%</p>
      <p>Master: 100%</p>
    </section>


    <button className="bg-blue-600 font-bold rounded px-4 py-3 hover:bg-green-500" onClick={skillsShowHide}>ABC</button>

    {
    
    showskills &&
    (<section className='bg-blue-500'>
      <h1>Skills</h1>
      <p>Dance</p>
      <p>Cricket</p>
      <p>typescript</p>
    </section>)
    
    }
    
    </>
  )
}