import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div  className="flex items-center py-4 px-4 bg-blue-500 gap-5 w-full">
      <div className='flex justify-between items-center w-[85%] mx-auto'>
      <h1 className='text-2xl font-bold text-white cursor-pointer'>LunoShop</h1>
      <ul className='flex items-center font-bold text-white gap-4'>
        <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} className='text-2xl' />
        </Link>
      </ul>
      </div>
    </div>
  )
}
