import React, { useState, useEffect } from 'react'
import { ImageCard, Carousel } from '../components'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <main>
            <section className='max-w-7xl mx-auto'>
            <div className='text-center'>
                <h2 className='font-extrabold text-[#49beaa] text-[32px]'>Welcome to ArtbotAI</h2>
                <p className='mt-2 text-[#279af1] text-[16px]'>Here are some recently created images from the community</p>
            </div>
            <div>
                {/* <Carousel /> */}
            </div>
            
            
        </section>
        <section className='flex justify-center max-w-auto bg-[white] align-center'>
            <div className='flex flex-col justify-around'>
                <div className='flex text-justify text-sm sm: text-base py-4 px-4 m-4 max-w-prose'>
                    <p>Welcome to ArtBot, your go-to AI art generator! Our cutting-edge technology was designed to help people without artistic abilities create stunning graphics and assets for personal or business use.
                        We understand that not everyone has the time, skill, or resources to create beautiful artwork, which is why we created ArtBot. Our AI-powered system uses complex algorithms to analyze your preferences and generate unique designs that suit your needs perfectly.
                        Whether you need images for your social media campaign, marketing materials, or personal projects, ArtBot has got you covered. 
                        Our team of experienced developers and designers worked tirelessly to create a user-friendly interface that is easy to use and navigate. Simply enter what you are looking for and let ArtBot do the rest.
                        At ArtBot, we believe that everyone should have access to high-quality designs, regardless of their artistic abilities. Our mission is to empower people to create visually appealing and professional-looking assets that elevate their personal or business projects to the next level.
                        So why wait? Sign up for ArtBot today and start creating stunning artwork in seconds!
                    </p>
                </div>
                <div className='flex align-center justify-center'>
                    <Link to='/login-signup' className='font-inter text-sm bg-[#279af1] text-white px-4 py-7 rounded-md max-w-max max-h-20'>
                    Let's Get Started
                    </Link>
                </div>
            
            </div>
        </section>
        </main>
        
    )
}

export default Home