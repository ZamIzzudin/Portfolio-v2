/** @format */
"use client";

import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  isShow: boolean;
  setShow: any;
  children: ReactNode;
}

export default function ProjectModal({ isShow, setShow, children }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const screen = useMediaQuery({ query: "(max-width: 430px)" });

  useEffect(() => {
    setIsMobile(screen);
  }, [screen]);

  const layoutVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 1.5,
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const bodyVariants = isMobile
    ? {
        hidden: {
          maxWidth: ["90dvw", "90dvw", "90dvw", "90dvw"],
          maxHeight: ["80dvh", "80dvh", "80dvh", "80dvh"],
          minWidth: ["80dvw", "80dvw", "40dvw", "0dvw"],
          minHeight: ["150dvw", "80dvw", "40dvw", "0dvw"],
          scale: [1, 1, 1, 0],
          borderRadius: ["1%", "1%", "50%", "50%"],
          transition: {
            duration: 1.5,
            times: [0, 0.2, 0.5, 1],
            delay: 0.5,
            when: "afterChildren",
          },
        },
        visible: {
          maxWidth: ["90dvw", "90dvw", "90dvw", "90dvw"],
          maxHeight: ["80dvh", "80dvh", "80dvh", "80dvh"],
          minWidth: ["0dvw", "40dvw", "80dvw", "80dvw"],
          minHeight: ["0dvw", "40dvw", "80dvw", "150dvw"],
          scale: [0, 1, 1, 1],
          borderRadius: ["50%", "50%", "1%", "1%"],
          transition: {
            duration: 1.5,
            times: [0, 0.5, 0.8, 1],
            when: "beforeChildren",
            staggerChildren: 0.8,
          },
        },
      }
    : {
        hidden: {
          maxWidth: ["70dvw", "70dvw", "70dvw", "70dvw"],
          maxHeight: ["80dvh", "80dvh", "80dvh", "80dvh"],
          minWidth: ["120dvh", "80dvh", "40dvh", "0dvh"],
          minHeight: ["80dvh", "80dvh", "40dvh", "0dvh"],
          scale: [1, 1, 1, 0],
          borderRadius: ["1%", "1%", "50%", "50%"],
          transition: {
            duration: 1.5,
            times: [0, 0.2, 0.5, 1],
            delay: 0.5,
            when: "afterChildren",
          },
        },
        visible: {
          maxWidth: ["70dvw", "70dvw", "70dvw", "70dvw"],
          maxHeight: ["80dvh", "80dvh", "80dvh", "80dvh"],
          minWidth: ["0dvh", "40dvh", "80dvh", "120dvh"],
          minHeight: ["0dvh", "40dvh", "80dvh", "80dvh"],
          scale: [0, 1, 1, 1],
          borderRadius: ["50%", "50%", "1%", "1%"],
          transition: {
            duration: 1.5,
            times: [0, 0.5, 0.8, 1],
            when: "beforeChildren",
            staggerChildren: 0.8,
          },
        },
      };

  const handleClose = () => {
    setShow();
  };

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={layoutVariants}
          onClick={handleClose}
          className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-dark-fade flex flex-col items-center justify-center duration-50"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={bodyVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-white-fade flex flex-col items-center justify-center max-w-[90vw]"
          >
            <motion.div
              initial={{ opacity: 0, display: "none" }}
              animate={{
                opacity: 1,
                display: "block",
                transition: { duration: 1, delay: 1.5 },
              }}
              exit={{
                opacity: 0,
                display: "none",
                transition: { duration: 0.5 },
              }}
              className="text-dark max-w-full max-h-full overflow-y-scroll"
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
