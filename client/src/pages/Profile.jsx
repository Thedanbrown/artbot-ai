import React, { useState, useEffect } from 'react'
import { Loader, ImageCard, FormField } from '../components'
import { getRandomPrompt } from '../utils';
import { preview } from '../assets/preview.png'

const Profile = () => {
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [form, setForm] = useState({ name: '', prompt: '', photo: '',});
    const [generatingImg, setGeneratingImg] = useState(false);

    const handleSubmit = () => {};
    
    const handleChange = () => {};

    const handleSurpriseMe = () => {};

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
                    placeholder='john doe'
                    value={form.prompt}
                    handleChange={handleChange}
                    isSurpriseMe
                    handleSurpriseMe={handleSurpriseMe}
                    />
                </div>
            </form>
            <div className='mt-16'>
                <FormField />
            </div>
            <div className='mt-10'>
                {loading ? (
                    <div className='flex justify-center items-center'>
                        <Loader />
                    </div>
                ) : (
                    <>
                    {searchText && (
                        <h3 className='font-medium text-[#253031] text-xl mb-3'>
                            Showing results for <span className='text-[#4392f1]'>{searchText}</span>
                        </h3>
                    )}
                    </>
                )}
            </div>
        </section>
    )
}

export default Profile