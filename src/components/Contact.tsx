/** @format */

import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { BsLinkedin, BsGithub, BsDiscord, BsSpotify } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-w-w-screen min-h-h-half flex flex-col items-center justify-start"
    >
      <SectionTitle title="CONTACT" type="righted">
        <div className="flex justify-end xl:justify-center">
          <div className="flex flex-col items-start gap-5 xl:w-3/6 md:w-2/3 max-w-[80vw]">
            <p className="bg-dark text-justify">
              Have a project in mind? Would you like to share it? Feel free to
              reach out by writing email.
            </p>
            <Link
              href="mailto:azzamizzudinhasan@gmail.com"
              className="hover:bg-white hover:text-dark hover:pl-5 py-3 pr-10 border-b-2 duration-500 flex items-center gap-3"
            >
              Get In Touch
              <FaLongArrowAltRight />
            </Link>
            <div className="flex gap-5 text-2xl py-3">
              <Link
                href="https://discordapp.com/users/533661901977026580"
                target="_blank"
                className="hover:text-purple duration-300"
              >
                <BsDiscord />
              </Link>
              <Link
                href="https://www.linkedin.com/in/azzam-izzudin-hasan/"
                target="_blank"
                className="hover:text-purple duration-300"
              >
                <BsLinkedin />
              </Link>
              <Link
                href="https://github.com/ZamIzzudin"
                target="_blank"
                className="hover:text-purple duration-300"
              >
                <BsGithub />
              </Link>
              <Link
                href="https://open.spotify.com/user/312as7rzwm7nwou7nfeubv7dadxe?si=961e2aca0cc44176"
                target="_blank"
                className="hover:text-purple duration-300"
              >
                <BsSpotify />
              </Link>
            </div>
          </div>
        </div>
      </SectionTitle>
    </section>
  );
}
