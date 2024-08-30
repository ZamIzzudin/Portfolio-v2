/** @format */

import { motion } from "framer-motion";

interface Props {
  title: string;
  type: string;
  children: React.ReactNode;
}

export default function SectionTitle({ title, type, children }: Props) {
  if (type === "righted") {
    return (
      <motion.div className="flex flex-col sm:flex-row justify-between items-center sm:items-start min-w-w-screen sm:p-14 relative gap-[150px] sm:gap-[50px] mb-5">
        <div className=" relative flex flex-col font-highlight text-5xl md:text-7xl">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="block absolute z-20"
          >
            {title}
          </motion.h1>
          <motion.img
            initial={{ y: 100, x: 100, opacity: 0 }}
            whileInView={{ y: -30, x: 100, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
            width={400}
            className="absolute z-10 max-w-[70vw] md:top-0 md:left-0 left-[-20%]"
            src="./halloween.gif"
            alt="section title picture"
          />
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 70, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
            }}
            className="stroked text-transparent block"
          >
            {title}
          </motion.span>
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 70, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              type: "spring",
            }}
            className="stroked text-transparent block"
          >
            {title}
          </motion.span>
        </div>
        {children}
      </motion.div>
    );
  } else {
    return (
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start min-w-w-screen sm:p-14 gap-[100px]">
        {children}
        <div className=" relative flex flex-col font-highlight text-5xl md:text-7xl">
          <motion.h1
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="block absolute z-20"
          >
            {title}
          </motion.h1>
          <motion.img
            initial={{ x: 200, y: -30, opacity: 0 }}
            whileInView={{ x: -30, y: -30, opacity: 1 }}
            transition={{ duration: 0.4, type: "spring", delay: 0.2 }}
            className="absolute z-10 max-w-[70vw] top-0 right-0 md:left-0"
            width={400}
            src="./camp.gif"
            alt="section title picture"
          />
          <motion.span
            className="stroked text-transparent block"
            initial={{ x: 300, y: 70, opacity: 0 }}
            whileInView={{ x: 0, y: 70, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              type: "spring",
            }}
          >
            {title}
          </motion.span>
          <motion.span
            className="stroked text-transparent block"
            initial={{ x: 300, y: 70, opacity: 0 }}
            whileInView={{ x: 0, y: 70, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.5,
              type: "spring",
            }}
          >
            {title}
          </motion.span>
        </div>
      </div>
    );
  }
}
