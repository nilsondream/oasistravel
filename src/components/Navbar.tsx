'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from "motion/react"
import { links, menu } from '@/animations'

const navRoute = [
    { name: 'Huacachina' },
    { name: 'Nazca Lines' },
    { name: 'Ballestas Islands' },
    { name: 'Paracas' },
    { name: 'Ica' },
]

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const handleMenu = () => setOpen(!open);

    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className='fixed z-50 w-full top-0 left-0 py-5 px-10'
        >
            <div className='grid grid-cols-[1fr_1.25fr] font-semibold uppercase text-white relative z-50'>
                <div>
                    <Link href={'/'}>Oasis Travel</Link>
                </div>
                <div className='grid grid-cols-[1fr_1fr_100px] items-start'>
                    <div className='flex flex-col items-start'>
                        <span className='hover:underline cursor-pointer'>Tours</span>
                        <span className='hover:underline cursor-pointer'>Packages</span>
                        <span className='hover:underline cursor-pointer'>Hotel</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span className='hover:underline cursor-pointer'>About</span>
                        <span className='hover:underline cursor-pointer'>Contact</span>
                    </div>
                    <span
                        onClick={handleMenu}
                        className='text-end cursor-pointer hover:opacity-50'
                    >
                        {open ? 'Close' : 'Menu'}
                    </span>
                </div>
            </div>

            <motion.div
                variants={menu}
                initial='closed'
                animate={open ? 'open' : 'closed'}
                className='fixed z-40 top-0 left-0 w-full bg-red-500 text-white'
            >
                <motion.div
                    variants={links}
                    initial='closeLinks'
                    animate={open ? 'openLinks' : 'closeLinks'}
                    className='grid grid-cols-[1fr_1.25fr] items-center h-full'
                >
                    <div></div>
                    <div className='flex flex-col items-start route-custom'>
                        {navRoute.map((i, j) => (
                            <div key={j} className='flex items-center gap-4 group cursor-pointer duration-300'>
                                <span className='w-20 flex overflow-hidden'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57" className='-translate-x-20 group-hover:translate-x-0 duration-300'>
                                        <path d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z" fill="currentColor" />
                                    </svg>
                                </span>
                                <h3 className='font-bold uppercase text-6xl -translate-x-24 group-hover:translate-x-0 duration-300'>
                                    {i.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    variants={links}
                    initial='closeLinks'
                    animate={open ? 'openLinks' : 'closeLinks'}
                    className='absolute bottom-0 w-full grid grid-cols-[1fr_1.25fr] py-5 px-10 font-semibold uppercase'
                >
                    <span></span>
                    <span>© 2024</span>
                </motion.div>
            </motion.div>
        </motion.header>
    )
}

export default Navbar