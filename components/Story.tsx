'use client'

import React from 'react'
import { useMediaQuery } from '@/hooks/use-media-query'
import { motion } from 'framer-motion'

const Story = () => {
    const isMobile = useMediaQuery('(max-width: 1024px)')

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Text */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.03 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none whitespace-nowrap"
            >
                <p className="font-averia-gruesa-libre text-[40vw] leading-none uppercase">
                    CULTURE
                </p>
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className={`grid items-center gap-16 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="relative aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1668299812264-a94a8167f71b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RydWdnbGV8ZW58MHx8MHx8fDA%3D"
                                alt="Brand Culture"
                                className="object-cover w-full h-full grayscale-20 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                            />
                        </div>

                        {/* Floating Capsule */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute -bottom-6 -right-6 bg-black text-white p-10 rounded-[2.5rem] shadow-2xl hidden lg:block"
                        >
                            <p className="font-averia-gruesa-libre text-5xl leading-none">EST.<br />2024</p>
                        </motion.div>
                    </motion.div>

                    {/* Text Side */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="font-quicksand text-xs uppercase tracking-[0.6em] font-bold text-gray-400 block mb-4">
                                Beyond the Fabric
                            </span>
                            <h2 className="font-averia-gruesa-libre text-6xl md:text-8xl tracking-tighter leading-[0.9] uppercase">
                                Crafted for <br /> <span className="text-neutral-300">The Movement</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6 max-w-lg"
                        >
                            <p className="font-quicksand text-lg font-bold leading-relaxed text-black/80">
                                Aura wasn't born in a boardroom. It was born in the streets,
                                at 2 AM under flickering neon, between the concrete and the
                                collective pulse of urban life.
                            </p>
                            <p className="font-quicksand text-md font-medium leading-relaxed text-neutral-500">
                                We believe streetwear is more than just a uniform. It's a
                                silent language. A choice to prioritize form without sacrificing
                                the raw edge of functional design. Our pieces are limited
                                because your identity isn't mass-produced.
                            </p>
                        </motion.div>

                        {/* Core Values */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="grid grid-cols-2 gap-8 pt-6 border-t border-neutral-100"
                        >
                            <div>
                                <h4 className="font-averia-gruesa-libre text-2xl uppercase mb-2">Purity</h4>
                                <p className="font-quicksand text-xs font-bold text-neutral-400 tracking-wider">Minimalist silhouettes with zero excess detail.</p>
                            </div>
                            <div>
                                <h4 className="font-averia-gruesa-libre text-2xl uppercase mb-2">Quality</h4>
                                <p className="font-quicksand text-xs font-bold text-neutral-400 tracking-wider">Premium heavyweight cotton and technical blends.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story