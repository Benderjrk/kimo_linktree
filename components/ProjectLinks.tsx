import React from "react";
import wrapGif from "../public/wrap.gif";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  projectDate: any
};

const ProjectLinks = ({ projectDate }: Props) => {
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
        src={projectDate.image}
        className="-mb-40 md:mb-0 flex-shrink-0 w-[150px] h-[150px] rounded-full object-cover md:rounded-2xl md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
      <h3 className=" uppercase tracking-[20px] text-gray-300 text-md md:text-2xl my-3">
        {projectDate.projectName}
      </h3>
        {/* <p className="text-sm text-justify">
          Machine Headz
        </p> */}
        <div className='pt-5'>
          {projectDate.links.map((data: any) => (
              <Link key={data.buttonTitle} href={data.url}>
                <a className='heroButton hover:border-yellow-600  hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80'>{data.buttonTitle}</a>
              </Link>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectLinks;
