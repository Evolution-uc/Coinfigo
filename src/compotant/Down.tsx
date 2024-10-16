import  { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';




export default function Down() {
  const [toggle,setToggle] = useState(false);
  function handleTogle () {
    setToggle(!toggle)
  }
  return (
    <div>
      
      
      <GiHamburgerMenu className=""onClick={handleTogle} />
     

      { toggle ?
      <div className=' absolute right-24 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20'>
         <Link className='block px-4 py-2 text-gray-700 hover:bg-gray-100' to="HOME">HOME</Link>
        <Link className='block px-4 py-2 text-gray-700 hover:bg-gray-100' to="ABOUT">ABOUT</Link>
        <Link className='block px-4 py-2 text-gray-700 hover:bg-gray-100' to="Contact"> Contact </Link>
        <Link className='block px-4 py-2 text-gray-700 hover:bg-gray-100' to="FAQS">FAQS</Link>
        <Link className='block px-4 py-2 text-gray-700 hover:bg-gray-100' to="TRADE">TRADE</Link>
        
        

      </div> : null

      }
    </div>
  )
}