'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'

const products = [
    {
        id: 1,
        name: 'Noir Oversized Hoodie',
        price: '₹3,499',
        category: 'Drop 01',
        image: 'https://plus.unsplash.com/premium_photo-1673826949174-332a3abac161?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        name: 'Racing Bomber Jacket',
        price: '₹1,899',
        category: 'Summer 24',
        image: 'https://images.pexels.com/photos/30615470/pexels-photo-30615470.jpeg',
    },
    {
        id: 3,
        name: 'Black Designer Pants',
        price: '₹4,299',
        category: 'Street Tech',
        image: 'https://images.unsplash.com/photo-1623596305214-19f21cbf48ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RyZWV0d2VhcnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 4,
        name: 'Classic Denim Outfit',
        price: '₹6,499',
        category: 'Limited',
        image: 'https://images.pexels.com/photos/17029536/pexels-photo-17029536.jpeg',
    },
    {
        id: 5,
        name: 'Skate White Sweatshirt',
        price: '₹2,799',
        category: 'Autumn 24',
        image: 'https://images.pexels.com/photos/30315681/pexels-photo-30315681.jpeg',
    },
    {
        id: 6,
        name: 'Rhythm Graphic Tee',
        price: '₹1,599',
        category: 'Core',
        image: 'https://images.unsplash.com/photo-1636047250452-6772f6144b3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHN0cmVldHdlYXIlMjBvdXRmaXR8ZW58MHx8MHx8fDA%3D',
    }
]

const NewDrip = () => {
    const isMobile = useMediaQuery('(max-width: 1024px)')
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            slidesToScroll: isMobile ? 1 : 2
        },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    )

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 space-y-8 md:space-y-0">
                    <div className="w-full md:w-auto">
                        <span className="font-quicksand text-xs uppercase tracking-[0.6em] text-white/40 block mb-4">
                            New Arrivals / Series 2026
                        </span>
                        <h2 className="font-averia-gruesa-libre text-6xl md:text-7xl tracking-tighter leading-none">
                            LATEST <br /> <span className="text-white/20">DRIP</span>
                        </h2>
                    </div>

                    {/* Controls */}
                    <div className="flex gap-4">
                        <button
                            onClick={scrollPrev}
                            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div className="embla overflow-visible" ref={emblaRef}>
                    <div className="embla__container flex">
                        {products.map((product) => (
                            <div key={product.id} className="embla__slide flex-[0_0_100%] md:flex-[0_0_40%] min-w-0 pl-8 lg:pl-10 group cursor-pointer first:pl-0">
                                <div className="relative aspect-3/4 rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl">
                                    {/* Product Image */}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    />

                                    {/* Overlay Info */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <p className="font-quicksand text-[10px] uppercase tracking-[0.4em] text-white/50 mb-3 font-black">
                                                        {product.category}
                                                    </p>
                                                    <h3 className="font-averia-gruesa-libre text-3xl md:text-4xl text-white uppercase tracking-tighter">
                                                        {product.name}
                                                    </h3>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-quicksand text-xl font-bold text-white mb-2">
                                                        {product.price}
                                                    </p>
                                                    <button className="bg-white text-black p-3 rounded-2xl hover:scale-110 transition-transform">
                                                        <Plus size={20} strokeWidth={3} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subtle Static Info (Visible when not hovered) */}
                                    <div className="absolute bottom-10 left-10 group-hover:opacity-0 transition-opacity">
                                        <p className="font-quicksand text-[10px] uppercase tracking-[0.4em] text-white/50 mb-1 font-bold">
                                            {product.category}
                                        </p>
                                        <h4 className="font-quicksand text-lg font-bold text-white uppercase">{product.name}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Visual Decorative Text */}
            <div className="mt-20 flex whitespace-nowrap overflow-hidden opacity-[0.02] select-none pointer-events-none">
                <p className="font-averia-gruesa-libre text-[15vw] leading-none uppercase">
                    AURA STREETWEAR AURA STREETWEAR AURA STREETWEAR
                </p>
            </div>
        </section>
    )
}

export default NewDrip