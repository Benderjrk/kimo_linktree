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
      <Header about={projectJson.about} projects={projectJson.projects} />
      <section id='home' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-start'>
        <About about={projectJson.about} />
      </section>
      {projectJson.projects.map((data: any) => (
          <section  id={data.projectName} key={data.projectName} className='snap-center'>
            <ProjectLinks projectDate={data} />
          </section>
      ))}

    </motion.div>
  )
}

export default Home