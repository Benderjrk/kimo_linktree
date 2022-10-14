import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Survival from '../components/Survival'
import Hounds from '../components/Hounds'
import Headz from '../components/Headz'
import styles from '../styles/Home.module.css'

import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <motion.div 
      initial={{
        backgroundColor: '#0A101E'
      }}
      animate={{
        backgroundColor: ['#50006C', '#0A101E']
      }}
      transition={{
        duration: 2.5,
      }}
      className=" text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth">
      <Head>
        <title>Kimosabe Art</title>
      </Head>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-start'>
        <About />
      </section>
      {/* Machine Headz */}
      <section id='headz' className='snap-center'>
        <Headz />
      </section>
      
      {/* Hell Hounds */}
      <section id='hounds' className='snap-center'>
        <Hounds />
      </section>

      {/* Survival Arena */}
      <section id='survival' className='snap-center'>
        <Survival />
      </section>
      
      {/* Contact Me */}

    </motion.div>
  )
}

export default Home
