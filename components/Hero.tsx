import React from 'react'
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import legend from '../public/legendary.gif'


type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Links related to Kimosabe Art',
        ],
        loop: 1,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <Image
                src={legend.src}
                alt="Legendary Machine Skull"
                layout="fill"
                className='opacity-20'
        />
        <BackgroundCircles />
        <div className='relative rounded-full h-32 w-32 mx-auto'>
            <Image
                    src={legend.src}
                    alt="Legendary Machine Skull"
                    layout="fill"
                    className='rounded-full'
            />
        </div>
        
        <div className='z-20'>
            <h2 className='text-lg md:text-3xl uppercase text-gray-300 pb-2 tracking-[15px]'>Kimosabe Art</h2>
            <h1 className='text-2xl md:text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F55010' />
            </h1>
        </div>
    </div>
  )
}

export default Hero