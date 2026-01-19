'use client'

import React from 'react'
import { useMediaQuery } from '@/hooks/use-media-query'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const categories = [
    {
        id: 1,
        title: 'Hoodies',
        count: '18 Items',
        image: 'https://images.unsplash.com/photo-1680292783974-a9a336c10366?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9vZGllc3xlbnwwfHwwfHx8MA%3D%3D',
        gridClass: 'md:col-span-1 md:row-span-2'
    },
    {
        id: 2,
        title: 'T-Shirts',
        count: '24 Items',
        image: 'https://images.unsplash.com/photo-1608739872119-f78feab7f976?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
        gridClass: 'md:col-span-2 md:row-span-1'
    },
    {
        id: 3,
        title: 'Jeans',
        count: '15 Items',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
        gridClass: 'md:col-span-1 md:row-span-1'
    },
    {
        id: 4,
        title: 'Jackets',
        count: '12 Items',
        image: 'https://images.unsplash.com/photo-1706765779494-2705542ebe74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphY2tldHN8ZW58MHx8MHx8fDA%3D',
        gridClass: 'md:col-span-1 md:row-span-1'
    }
]

const Category = () => {
    const isMobile = useMediaQuery('(max-width: 1024px)')

    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8"
                >
                    <div>
                        <span className="font-quicksand text-xs uppercase tracking-[0.4em] font-bold text-gray-400 block mb-3">
                            Collections 01
                        </span>
                        <h2 className="font-averia-gruesa-libre text-6xl md:text-8xl tracking-tighter leading-none uppercase">
                            Shop By <span className="text-neutral-300">Category</span>
                        </h2>
                    </div>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
                    {categories.map((cat, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            key={cat.id}
                            className={`group relative overflow-hidden rounded-[2.5rem] bg-neutral-100 ${cat.gridClass}`}
                        >
                            {/* Image */}
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110 grayscale-30 group-hover:grayscale-0"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                                <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div>
                                        <p className="font-quicksand text-[10px] uppercase tracking-[0.3em] text-white/60 mb-2 font-bold">
                                            {cat.count}
                                        </p>
                                        <h3 className="font-averia-gruesa-libre text-4xl text-white uppercase tracking-tighter">
                                            {cat.title}
                                        </h3>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="bg-white text-black p-4 rounded-2xl hover:bg-black hover:text-white transition-all"
                                    >
                                        <ArrowUpRight size={20} />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Category