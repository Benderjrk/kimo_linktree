import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Button from './Button';

type Props = {
    about: any,
    projects: any
}

export default function Header({ about, projects }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-8xl mx-auto z-20 xl:items-center'>
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
            
            <div className='hidden md:flex md:flex-wrap justify-center'>
                {about.links.map((link: any) => (
                    <SocialIcon
                        key={link.buttonTitle}
                        url={link.url}
                        fgColor="white"
                        className='mx-3' 
                    />
                ))}
                <Button href={`#home`} words={'Home'}/>
                <Button href={`#about`} words={'About'}/>
                {projects.map((project: any) => (
                    <Button key={project.projectName} href={`#${project.projectName}`} words={project.projectName}/>
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