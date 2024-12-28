import React, { useState } from 'react'
import { useEffect } from 'react'

function github() {

  const [data, setdata] = useState([])

  useEffect(()=>{ 
    fetch('https://api.github.com/users/BhavikPrajapati18')
    .then( response => response.json() )
    .then(data =>{
      setdata(data)
    })
  }, [])

  return (
    <>
    <div className='bg-slate-800 p-4 text-center h-100 w-full text-slate-50 font-bold' >
         Github Followers: {data.followers}
         <br />
         Github Following: {data.following}
         <div className='flex justify-center items-center'>
         <img className='rounded-md' src={data.avatar_url} alt="" />  
         </div>
    </div>
    </>
  )
}

export default github
