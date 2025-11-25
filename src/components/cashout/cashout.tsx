import Image from 'next/image'
import React from 'react'

function Cashout() {
  return (
    <div>
      <div className='flex justify-around items-center px-6 gap-10 py-10'>
        <div className='w-1/2 shadow-2xl px-10 py-3'>
          <h1 className=' text-2xl font-semibold py-4'>Checkout</h1>
          <p className='text-gray-600 py-3'>Cart Type</p>
          <div className='flex items-center mb-4   gap-6 '>
            <Image src={"https://assets.weforum.org/organization/image/responsive_small_webp_ktSFaikjtTuIrdL-p8mH4Z_-pDG6DN-VotbLtdE2KR4.webp"} alt='payple image'
            height={50}
            width={50} 
            className=' rounded-2xl '/>
            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/800px-American_Express_logo_%282018%29.svg.png"}
            height={50}
            width={50}
            className=' rounded-2xl '
            alt='american express ' />
            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Visa_Debit_SVG_logo.svg/2560px-Visa_Debit_SVG_logo.svg.png"}
            height={50}
            width={50}
            className=' rounded-2xl '
            alt='american express ' />
            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"}
            height={50}
            width={50}
            className=' rounded-2xl '
            alt='american express ' />

          
          </div>


        <form >
          <label htmlFor="" className='mt-4'>Name of card :</label><br />
          <input type="text" className='px-4  mb-10 py-3 border-gray-300 w-full rounded-2xl border ' placeholder='Enter your Card name' />
          <label htmlFor="" className=''>Card No:</label><br />
          <input type="text" className='px-4 mb-10 py-3 border-gray-300 w-full rounded-2xl border ' placeholder='Enter your Card no' />
          <div className='flex gap-4 items-center'>
         <div>
           <label htmlFor="" className='mt-4'>Expiration Date ( MM/YY ) :</label><br />
          <input type="text" className='px-4  mb-10 py-3 border-gray-300 w-full rounded-2xl border ' placeholder='Enter Expiration Date' />
         </div>
        <div>
            <label htmlFor="" className=''>CVC:</label><br />
          <input type="text" className='px-4 mb-10 py-3 border-gray-300 w-full rounded-2xl border ' placeholder='Enter CVC' />
        </div>
          </div>
          <div>
     <div className='flex gap-3'>
             <input type="checkbox" name="" id="" placeholder='' />
            <p className='text-gray-400'>Save my information for faster checkout</p>
     </div>
     <button className='w-full mt-4 text-white font-semibold hover:opacity-65 transition-all cursor-pointer rounded-2xl bg-[#49BBBD] py-4 px-10'>Confirm Payment</button>
          </div>
        </form>
        </div>
        <div className='w-1/2'>hello</div>

      </div>
    </div>
  )
}

export default Cashout