'use client'

import React, { useState, useEffect } from 'react'
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react'

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Shop', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Collections', href: '#' },
        { name: 'Sale', href: '#' },
    ]

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
            }`}>
            <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>

                {/* Left: Mobile Menu Toggle / Search (Desktop) */}
                <div className='flex items-center gap-6 lg:flex-1'>
                    <button className='lg:hidden' onClick={() => setIsMobileMenuOpen(true)}>
                        <Menu size={24} />
                    </button>
                    <button className='hidden lg:block hover:opacity-60 transition-opacity'>
                        <Search size={22} strokeWidth={1.5} />
                    </button>
                    <div className='hidden lg:flex items-center gap-8 ml-8'>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className='font-quicksand text-xs uppercase tracking-[0.2em] font-medium hover:opacity-50 transition-opacity'
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right: Icons */}
                <div className='flex items-center justify-end gap-5 lg:flex-1'>
                    <button className='lg:hidden'>
                        <Search size={22} strokeWidth={1.5} />
                    </button>
                    <button className='hidden lg:block hover:opacity-60 transition-opacity'>
                        <User size={22} strokeWidth={1.5} />
                    </button>
                    <button className='relative group'>
                        <ShoppingBag size={22} strokeWidth={1.5} className='group-hover:opacity-60 transition-opacity' />
                        <span className='absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold'>
                            0
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-[60] transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className='p-6 flex flex-col h-full'>
                    <div className='flex justify-between items-center mb-12'>
                        <span className='font-averia-gruesa-libre text-2xl'>AURA</span>
                        <button onClick={() => setIsMobileMenuOpen(false)}>
                            <X size={28} />
                        </button>
                    </div>
                    <div className='flex flex-col gap-8'>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className='font-quicksand text-2xl uppercase tracking-widest font-bold'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className='mt-auto flex gap-6 pb-8 border-t pt-8'>
                        <a href="#" className='font-quicksand uppercase text-sm tracking-widest'>Account</a>
                        <a href="#" className='font-quicksand uppercase text-sm tracking-widest'>Support</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation