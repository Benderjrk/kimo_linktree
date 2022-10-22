import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';

type Props = {
    about: any,
    projects: any
}

export default function Header({ about, projects }: Props) {
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
                {about.links.map((link: any) => (
                    <SocialIcon
                        key={link.buttonTitle}
                        url={link.url}
                        fgColor="gray"
                        bgColor='transparent' 
                        className='heroButton hover:border-yellow-600  hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80' 
                    />
                ))}
                <Link href={'#home'}>
                    <button className='heroButton hover:border-yellow-600  hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80'>Home</button>
                </Link>
                <Link href={'#about'}>
                    <button className='heroButton hover:border-yellow-600  hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80'>About</button>
                </Link>
                {projects.map((project: any) => (
                    <Link key={project.projectName} href={`#${project.projectName}`}>
                        <button className='heroButton hover:border-yellow-600  hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80'>{project.projectName}</button>
                    </Link>
                ))}
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