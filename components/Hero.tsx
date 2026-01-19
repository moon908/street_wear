'use client'

import React from 'react'
import { useMediaQuery } from '@/hooks/use-media-query'
import { FaLocationArrow } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { motion } from 'framer-motion'

const Hero = () => {
    const isMobile = useMediaQuery('(max-width: 1024px)')

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    }

    const fadeIn = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8 }
    }

    return (
        <div className='relative w-full h-screen overflow-hidden'>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className='absolute bottom-0 left-[32%]'
            >
                <img src="/firstHero.png" alt="Hero Image" width={!isMobile ? 530 : 720} className="drop-shadow-[0_45px_70px_rgba(0,0,0,0.7)]" />
            </motion.div>

            <div className={isMobile ? 'absolute top-[22%] left-[5%] flex gap-6 font-averia-gruesa-libre text-7xl' : 'absolute top-[25%] left-[22%] flex gap-90 font-averia-gruesa-libre text-9xl'}>
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Aura
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Store
                </motion.h1>
            </div>

            <motion.div
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.4 }}
                className={isMobile ? 'absolute top-[33%] left-[5%]' : 'absolute top-[54%] left-[8%]'}
            >
                <h2 className={isMobile ? 'font-quicksand text-2xl font-bold' : 'font-quicksand text-3xl font-bold'}>
                    Clothes Without {!isMobile && <br />}
                    Excess. Only Style.
                </h2>
                {!isMobile && (
                    <p className='font-quicksand text-lg font-medium mt-5 w-105'>
                        Discover the latest trends in streetwear. Premium quality, unique designs, and the perfect fit for your style. High Quality fabrics and unique designs. All day comfort and trendy look and Easy to style with any outfit
                    </p>
                )}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <button className='font-quicksand border-2 rounded-2xl text-lg font-medium mt-5 w-36 h-9 flex items-center justify-center gap-2 cursor-pointer transition-transform'>
                        Shop Now <FaShoppingBag className='ml-2' />
                    </button>
                </motion.div>
            </motion.div>

            {!isMobile && (
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className='absolute border-2 rounded-2xl bottom-[14%] right-[13%] bg-transparent w-70 h-70'
                    >
                        <img src="/herosub.png" alt="Jacket" width={220} className='ml-6 mt-1' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className='absolute border-2 rounded-2xl bottom-[5%] right-[11.5%] bg-transparent w-80 h-10'
                    >
                        <motion.p
                            whileHover={{ scale: 1.05 }}
                            className='font-quicksand text-lg font-medium flex justify-center items-center w-full h-full cursor-pointer transition-transform'
                        >
                            New Collection <FaLocationArrow className='ml-3' />
                        </motion.p>
                    </motion.div>
                </div>
            )}
        </div>
    )
}

export default Hero
