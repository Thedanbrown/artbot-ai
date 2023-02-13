import React from 'react'

const FormField = ({ LabelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
    return (
        <div>
            <div className='flex items-center gap-2 mb-2'>
            <input type={type} id={name} placeholder={placeholder} value={value} onChange={handleChange} required 
                className='bg-[#f7f7ff] border border-[#279af1] text-gray-900 text-sm rounded-lg focus:ring-[#279af1] focus:border-[#49beaa] outline-none block w-full p-3' />
                <label htmlFor={name} className='block text-sm font-medium text-gray-900'>{LabelName}</label>
                {isSurpriseMe && (
                    <button type='button'  onClick={handleSurpriseMe} className='font-semibold text-xs bg-[#49beaa] text-white py-1 px-2 rounded-[5px]'>
                        Surprise Me
                    </button>
                )}
            </div>
            
        </div>
    )
}

export default FormField