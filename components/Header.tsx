import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <div>
    <div className='max-w-7xl mx-auto px-4 flex justify-between items-center py-5'>
        <Image src="/logo.png" alt='logo' width={50} height={50}/>
        <button className='border px-5 py-2 cursor-pointer hover:bg-lime-400 hover:text-white rounded-full'>Contact Us</button>
    </div>
    </div>
  )
}
