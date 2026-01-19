'use client'

import React from 'react'
import { Instagram, Twitter, Facebook, Youtube, ArrowRight } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Top Section: Brand & Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="font-averia-gruesa-libre text-7xl md:text-9xl tracking-tighter mb-8">
                            AURA
                        </h2>
                        <p className="font-quicksand text-lg text-white/60 max-w-sm mb-12 font-bold">
                            Redefining urban culture through minimal design and premium quality. Made for the movement.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-white/50 hover:text-white transition-colors"><Instagram size={24} /></a>
                            <a href="#" className="text-white/50 hover:text-white transition-colors"><Twitter size={24} /></a>
                            <a href="#" className="text-white/50 hover:text-white transition-colors"><Facebook size={24} /></a>
                            <a href="#" className="text-white/50 hover:text-white transition-colors"><Youtube size={24} /></a>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end">
                        <p className="font-quicksand text-xs uppercase tracking-[0.4em] font-bold text-white/40 mb-6">
                            Join the inner circle
                        </p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                className="w-full bg-transparent border-b border-white/20 py-4 font-quicksand text-sm focus:outline-none focus:border-white transition-colors"
                            />
                            <button className="absolute right-0 bottom-4 hover:translate-x-2 transition-transform">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                        <p className="font-quicksand text-[10px] text-white/30 mt-4 uppercase tracking-widest font-bold">
                            By signing up, you agree to our privacy policy.
                        </p>
                    </div>
                </div>

                {/* Middle Section: Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 border-t border-white/10 pt-16">
                    <div className="space-y-6">
                        <h4 className="font-quicksand text-xs uppercase tracking-[0.3em] font-black">Shop</h4>
                        <ul className="font-quicksand text-sm text-white/50 space-y-4 font-medium uppercase tracking-widest">
                            <li><a href="#" className="hover:text-white transition-colors">T-Shirts</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Hoodies</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Jeans</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Jackets</a></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="font-quicksand text-xs uppercase tracking-[0.3em] font-black">Company</h4>
                        <ul className="font-quicksand text-sm text-white/50 space-y-4 font-medium uppercase tracking-widest">
                            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Culture</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Stores</a></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="font-quicksand text-xs uppercase tracking-[0.3em] font-black">Support</h4>
                        <ul className="font-quicksand text-sm text-white/50 space-y-4 font-medium uppercase tracking-widest">
                            <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="font-quicksand text-xs uppercase tracking-[0.3em] font-black">Legal</h4>
                        <ul className="font-quicksand text-sm text-white/50 space-y-4 font-medium uppercase tracking-widest">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
                    <p className="font-quicksand text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">
                        © 2024 AURA STORE. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8 font-quicksand text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">
                        <span>Purity</span>
                        <span>Quality</span>
                        <span>Heritage</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer