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
      <motion.div className="flex justify-between items-start min-w-w-screen p-14 relative">
        <div className="flex flex-col font-highlight text-7xl">
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
            whileInView={{ y: -50, x: 100, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
            width={400}
            className="absolute z-10"
            src="./halloween.gif"
            alt="section title picture "
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
      <div className="flex justify-between items-start min-w-w-screen p-14">
        {children}
        <div className="flex flex-col font-highlight text-7xl">
          <motion.h1
            initial={{ x: 500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="block absolute z-20"
          >
            {title}
          </motion.h1>
          <motion.img
            initial={{ x: 500, y: -50, opacity: 0 }}
            whileInView={{ x: -30, y: -50, opacity: 1 }}
            transition={{ duration: 0.4, type: "spring", delay: 0.2 }}
            className="absolute z-10"
            width={400}
            src="./camp.gif"
            alt="section title picture"
          />
          <motion.span
            className="stroked text-transparent block"
            initial={{ x: 500, y: 70, opacity: 0 }}
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
            initial={{ x: 500, y: 70, opacity: 0 }}
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
