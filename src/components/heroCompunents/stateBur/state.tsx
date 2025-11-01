import React from 'react'
const stateData =  [
    {number:"15K+",title:"Students"},
    {number:"75%",title:"top success"},
    {number:"35",title:"main content"},
    {number:"26",title:"chaif expert"},
    {number:"16",title:"year of experience"},
]


function State() {
  return (

      <div className='grid md:grid-cols-5 grid-cols-2  justify-around items-center mt-4 mb-4'>
        {stateData.map((e,id)=>(
           <div key={id} className='flex flex-col items-center '>
      <span className="text-[50px] font-semibold text-center bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] bg-clip-text text-transparent">
  {e.number}
</span>

            <p className='md:text-2xl text-gray-700'>{e.title} </p>
            
             </div>
        ))}
      </div>
   
  )
}

export default State