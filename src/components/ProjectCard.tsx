/** @format */

import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineClose } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

interface Props {
  num: number;
  data: any;
}

export default function ProjectCard({ num, data }: Props) {
  const [isShow, setShow] = useState(false);

  function handleShow() {
    setShow(!isShow);
  }

  // Separate Odd and Even Data
  const position = (num + 1) % 2 !== 0 ? "justify-start" : "justify-end";
  const initCordinate = (num + 1) % 2 !== 0 ? -200 : 200;

  return (
    <div className={`flex items-center ${position}`}>
      <motion.div
        initial={{ x: initCordinate, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="cursor-pointer"
        onClick={() => handleShow()}
      >
        <img
          className="hover:invert duration-300"
          src={data.thumbnail}
          alt="logo project"
          width={400}
        />
        <div className="flex gap-5 items-center py-4">
          <span className="text-xl font-semibold">0{num + 1}.</span>
          <div>
            <h2 className="text-lg sm:text-xl font-semibold">{data.name}</h2>
            <p className="text-xs sm:text-sm font-light leading-4">
              {data.type}
            </p>
          </div>
        </div>
      </motion.div>
      <ProjectModal isShow={isShow} setShow={setShow}>
        <div className="max-w-full sm:px-10 sm:pt-10 relative">
          <button
            onClick={() => handleShow()}
            className="absolute top-[10px] right-[10px] aspect-square p-2 rounded-full bg-white-fade text-dark z-40"
          >
            <AiOutlineClose />
          </button>
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
          >
            {data.ss.map((ss: any, index: number) => (
              <SwiperSlide key={index + 1}>
                <img src={ss} alt={`slide ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex gap-5 items-center flex-col md:flex-row p-10">
          <div className="min-w-[35%] flex flex-col relative">
            <h1 className="text-lg font-bold">{data.name}</h1>
            <h5 className="text-sm">{data.type}</h5>
            <div className="flex gap-1 mt-2 mb-3 flex-wrap">
              {data.techstack.map((stack: any, index: number) => (
                <span
                  className="text-xs flex px-3 py-1 bg-purple text-white rounded"
                  key={index + 1}
                >
                  {stack}
                </span>
              ))}
            </div>
            <Link
              href={data.deployment}
              target="_blank"
              className="hover:text-purple duration-300 absolute right-0 top-[10%] md:top-[5%]"
            >
              <FiExternalLink />
            </Link>
          </div>
          <div className="text-sm text-justify">
            <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
          </div>
        </div>
      </ProjectModal>
    </div>
  );
}
