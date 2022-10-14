import React from "react";
import kimo from "../public/kimo.png";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src={kimo.src}
        className="-mb-40 md:mb-0 flex-shrink-0  w-[150px] h-[150px] rounded-full object-cover md:rounded-2xl md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h3 className=" uppercase tracking-[10px] text-gray-500 text-2xl">
          About Kimosabe
        </h3>
        <h3 className=" uppercase tracking-[10px] text-gray-500 text-2xl">
          I&apos;m Kimosabe, a NFT-artist and graphic designer🎨
        </h3>
        <div className='pt-5'>
            <Link href={'https://discord.gg/EmUQKuT79g'}>
                <button className='heroButton hover:border-indigo-600 hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80'>Discord</button>
            </Link>
            <Link href={'https://twitter.com/Nft4R'}>
                <button className='heroButton hover:border-indigo-600 hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80'>Twitter</button>
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
