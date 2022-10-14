import React from "react";
import hound from "../public/hellhound.gif";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Headz = (props: Props) => {
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
        src={hound.src}
        className="-mb-40 md:mb-0 flex-shrink-0 w-[150px] h-[150px] rounded-full object-cover md:rounded-2xl md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
      <h3 className=" uppercase tracking-[20px] text-gray-500 text-md md:text-2xl my-3">
        Hell Hounds
      </h3>
        {/* <p className="text-sm text-justify">
          Machine Headz
        </p> */}
        <div className='pt-5'>
            <Link href={'https://discord.gg/EmUQKuT79g'}>
                <button className='heroButton hover:border-indigo-600 hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80'>Discord</button>
            </Link>
            <Link href={'https://hellhoundscnft.com/'}>
                <button className='heroButton hover:border-indigo-600 hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80'>hellhoundscnft.com</button>
            </Link>
            <Link href={'https://twitter.com/HellHounds_cnft'}>
                <button className='heroButton hover:border-indigo-600 hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80'>Twitter</button>
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Headz;
