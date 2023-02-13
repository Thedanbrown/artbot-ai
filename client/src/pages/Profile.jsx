import React, { useState, useEffect } from 'react'
import { Loader, ImageCard, FormField } from '../components'
import { getRandomPrompt } from '../utils';

const Profile = () => {
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [form, setForm] = useState({ name: '', prompt: '', photo: '',});
    const [generatingImg, setGeneratingImg] = useState(false);

    const handleSubmit = () => {};
    
    const handleChange = (e) => {
        
    };

    const handleSurpriseMe = () => {};

    const generateImage = () => {};

    return (
        <section className='max-w-7xl' mx-auto>
            <div>
                <h2 className='font-extrabold text-[#253031] text-[32px]'>Create</h2>
                <p className='mt-2 text-[#279af1] text-[16px]'>Create stunning images with the DALL-E AI and share them with the community</p>
            </div>
            <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-5'>
                    <FormField 
                    LabelName='Your Name'
                    type='text'
                    name='name'
                    placeholder='john doe'
                    value={form.name}
                    handleChange={handleChange}
                    />
                    <FormField 
                    LabelName='Prompt'
                    type='text'
                    name='prompt'
                    placeholder='what should we create'
                    value={form.prompt}
                    handleChange={handleChange}
                    isSurpriseMe
                    handleSurpriseMe={handleSurpriseMe}
                    />

                    <div className='relative bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#4392f1]-500 focus:border-[#4392f1]-500 w-64 p-3 h-64 flex justify-center items=center'>
                        {form.photo ? (
                            <img src={form.photo} alt={form.prompt} className='w-full h-full object-contain' />
                        ): (
                            <img src='/preview.png' alt='preview' className='w-9/12 h-9/12 object-contain opacity-40' />
                    )}

                        {generatingImg && (
                            <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                                <Loader />
                        </div>
                    )}
                    </div>
                </div>

                <div className='mt-5 flex gap-5'>
                    <button type='button' onClick={generateImage} className='font-semibold text-xs bg-[#49beaa] text-white py-2.5 px-5 rounded-[5px] w-full sm:w-auto text-center'>
                        {generatingImg ? 'Generating' : 'Generate'}
                    </button>
                </div>

                <div className='mt-10'>
                    <button type='submit' className='font-semibold text-xs bg-[#279af1] text-white py-2.5 px-5 rounded-[5px] w-full sm:w-auto text-center'>Save Image</button>
                </div>
            </form>
        </section>
    )
}
export default Profile