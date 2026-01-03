"use client";

import { useState } from 'react';
import PlusMUI from '../Icons/PlusMUI'
import CreateCompanyModal from '../Modal/CreateCompanyModal'

type Props = {
    text : string
}

const CreateCompany = ({ text } : Props) => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <button 
        className='flex items-center gap-2 px-4 py-2 border-2 border-gray-100 rounded-xl shadow-md shadow-black/10 mt-50 lg:mt-70 transition-all duration-200 hover:scale-105'
        onClick={() => setOpen(true)}
      >
        <PlusMUI/>
        <p className='font-semibold'>{text}</p>
      </button>

      {open && <CreateCompanyModal onClose={() => setOpen(false)}/>}
    </>
  )
}

export default CreateCompany