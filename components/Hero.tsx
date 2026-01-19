'use client'

import React from 'react'
import { useMediaQuery } from '@/hooks/use-media-query'
import { FaLocationArrow } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const Hero = () => {
    const isMobile = useMediaQuery('(max-width: 1024px)')

    return (
        <div className='relative w-full h-screen overflow-hidden'>
            <div className='absolute bottom-0 left-[32%]'>
                <img src="/firstHero.png" alt="Hero Image" width={530} className="drop-shadow-[0_45px_70px_rgba(0,0,0,0.7)]" />
            </div>
            <div className={isMobile ? 'absolute top-[22%] left-[5%] flex gap-6 font-averia-gruesa-libre text-8xl' : 'absolute top-[25%] left-[22%] flex gap-90 font-averia-gruesa-libre text-9xl'}>
                <h1>
                    Aura
                </h1>
                <h1>
                    Store
                </h1>
            </div>
            <div className={isMobile ? 'absolute top-[48%] left-[3%]' : 'absolute top-[54%] left-[8%]'}>
                <h2 className={isMobile ? 'font-quicksand text-xl font-bold' : 'font-quicksand text-3xl font-bold'}>
                    Clothes Whithout <br />
                    excess. Only Style.
                </h2>
                <p className={isMobile ? 'font-quicksand text-md font-medium mt-5 w-58' : 'font-quicksand text-lg font-medium mt-5 w-105'}>
                    Discover the latest trends in streetwear. Premium quality, unique designs, and the perfect fit for your style. High Quality fabrics and unique designs. All day comfort and trendy look and Easy to style with any outfit
                </p>
                <div>
                    <button className='font-quicksand border-2 rounded-2xl text-lg font-medium mt-5 w-36 h-9 flex items-center justify-center gap-2'>
                        Shop Now <FaShoppingBag className='ml-2' />
                    </button>
                </div>
            </div>
            {!isMobile && (
                <div>
                    <div className='absolute border-2 rounded-2xl bottom-[14%] right-[13%] bg-transparent w-70 h-70'>
                        <img src="/herosub.png" alt="Jacket" width={220} className='ml-6 mt-1' />
                    </div>
                    <div className='absolute border-2 rounded-2xl bottom-[5%] right-[11.5%] bg-transparent w-80 h-10'>
                        <p className='font-quicksand text-lg font-medium flex justify-center items-center w-full h-full'>
                            New Collection <FaLocationArrow className='ml-3' />
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Hero