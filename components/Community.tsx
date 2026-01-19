'use client'

import React from 'react'
import { Instagram, Heart, MessageCircle } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'
import { motion } from 'framer-motion'

const feed = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
        likes: '1.2k',
        comments: '45'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1687333613763-c99165e625f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
        likes: '2.4k',
        comments: '128'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
        likes: '3.1k',
        comments: '89'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop',
        likes: '950',
        comments: '22'
    }
]

const Community = () => {
    const isMobile = useMediaQuery('(max-width: 1024px)')

    return (
        <section className="py-24 px-6 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="bg-black text-white p-4 rounded-full mb-6 cursor-pointer"
                    >
                        <Instagram size={32} />
                    </motion.div>
                    <span className="font-quicksand text-xs uppercase tracking-[0.5em] font-bold text-gray-400 block mb-2">
                        Join the Movement
                    </span>
                    <h2 className="font-averia-gruesa-libre text-5xl md:text-7xl tracking-tighter uppercase mb-4">
                        Aura <span className="text-neutral-300">Community</span>
                    </h2>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-quicksand text-lg font-bold hover:opacity-50 transition-opacity"
                    >
                        @aura_streetwear
                    </a>
                </motion.div>

                {/* Feed Grid */}
                <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-4'}`}>
                    {feed.map((post, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            key={post.id}
                            className="group relative aspect-square overflow-hidden rounded-4xl bg-neutral-200"
                        >
                            <img
                                src={post.image}
                                alt="Community Post"
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Instagram-style Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex gap-6 text-white font-quicksand font-bold">
                                    <div className="flex items-center gap-2">
                                        <Heart size={20} fill="white" />
                                        <span>{post.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MessageCircle size={20} fill="white" />
                                        <span>{post.comments}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="font-quicksand text-sm uppercase tracking-[0.3em] font-bold text-gray-400">
                        Tag us to be featured #AuraVibe
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Community