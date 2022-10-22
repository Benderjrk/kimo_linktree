import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProjectLinks from '../components/ProjectLinks'
import projectJson from '../public/project_info.json'

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
        <title>{projectJson.title}</title>
      </Head>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero json={projectJson} />
      </section>
      <section id='about' className='snap-start'>
        <About about={projectJson.about} />
      </section>
      {}
{/*       
      <section id='headz' className='snap-center'>
        <ProjectLinks />
      </section> */}

    </motion.div>
  )
}

export default Home