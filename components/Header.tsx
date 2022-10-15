import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center'>
            {/* Social Icons */}
            
            <div className='pt-5'>
                <SocialIcon 
                    url='https://discord.gg/EmUQKuT79g'
                    network="discord"
                    fgColor="gray"
                    bgColor='#0A101E'
                    className='heroButton hover:border-yellow-600  hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80' 
                />
                <SocialIcon 
                    url="https://twitter.com/Nft4R"
                    fgColor="gray"
                    bgColor='transparent' 
                    className='heroButton hover:border-yellow-600  hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80' 
                />
                <Link href={'#hero'}>
                    <button className='heroButton hover:border-yellow-600  hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80'>Home</button>
                </Link>
                <Link href={'#about'}>
                    <button className='heroButton hover:border-yellow-600  hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80'>About</button>
                </Link>
                <Link href={'#headz'}>
                    <button className='heroButton hover:border-yellow-600 hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80'>Machine Headz</button>
                </Link>
                <Link href={'#hounds'}>
                    <button className='heroButton hover:border-yellow-600 hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80'>Hell Hounds</button>
                </Link>
                <Link href={'#survival'}>
                    <button className='heroButton hover:border-yellow-600  hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80'>Survival Arena</button>
                </Link>
            </div>
        </motion.div>

        {/* <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 2
            }}
            className='flex flex-row items-center text-gray-300 cursor-pointer'>
        </motion.div> */}
    </header>
  );
}