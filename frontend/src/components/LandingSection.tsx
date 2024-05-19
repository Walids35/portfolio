"use client";

import Nav from "./Nav";
import Image from "next/image";
import Stars from "../assets/stars.svg";
import LinkedinImage from "../assets/linkedin.svg";
import GithubImage from "../assets/github.png";
import FrontImage from "../assets/front-image.png";
import PythonImage from "../assets/python-logo.png";
import JavascriptImage from "../assets/js-logo.png";
import ReactImage from "../assets/react-logo.png";
import TailwindImage from "../assets/tailwind-css-logo.png";
import MaterialImage from "../assets/materialdesign-logo.png";
import MongoDBImage from "../assets/mongo-logo.png";
import DownArrow from "../assets/down-arrow.svg";
import Link from "next/link";
import { LinkedinAccount, GithubAccount } from "../data/accounts";
import { motion, useScroll } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

const techStack = [
  {
    name: "Python",
    src: PythonImage,
  },
  {
    name: "Javascript",
    src: JavascriptImage,
  },
  {
    name: "React",
    src: ReactImage,
  },
  {
    name: "TailwindCSS",
    src: TailwindImage,
  },
  {
    name: "Material UI",
    src: MaterialImage,
  },
  {
    name: "MongoDB",
    src: MongoDBImage,
  },
];

const LandingSection = () => {
  const { scrollYProgress } = useScroll();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchCounter = async () => {
      const response = await fetch("https://getcounterportfolio.azurewebsites.net/api/Counter?code=9CTCCeP6s7epsltZPNDZjFvKRY6lHPeHggEh-tRI7RVmAzFuY8bAYg%3D%3D");
      const data = await response.json();
      setCounter(data.count);
    }

    fetchCounter();
  }, []);

  return (
    <>
      <motion.div
        className="bg-[#000000] w-screen h-3 fixed"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />
      <div className="bg-gray px-8 md:px-20 xl:px-40 py-12 2xl:px-60 border-b-4">
        <Nav />
        <div className="flex flex-col lg:flex-row pt-32">
          {/**Left Section */}
          <div className="">
            <div className="flex">
              <div className="text-5xl font font-black relative text-center sm:text-start">
                <TypeAnimation
                sequence={[
                  'Software Developer',1000,
                  'Software Engineer',1000
                ]}
                speed={50}
                repeat={2}
                />
                <Image
                  alt="stars"
                  src={Stars}
                  width={25}
                  height={30}
                  className="absolute -right-4 -top-4"
                />
              </div>
            </div>
            <div className="mt-10 text-center sm:text-start lg:w-3/4">
              Hi I&apos;m Walid Siala. A passionate software engineer, based in
              Tunisia, that designs, develops, and maintains computer programs
              and systems, utilizing my expertise in coding, problem-solving,
              and algorithmic thinking to create innovative software solutions.
            </div>
            <div className="mt-5 flex gap-3 justify-center sm:justify-start">
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href={LinkedinAccount}>
                  <Image
                    src={LinkedinImage}
                    alt="linkedinlogo"
                    width={30}
                    height={30}
                  />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href={GithubAccount}>
                  <Image
                    src={GithubImage}
                    alt="githublogo"
                    width={30}
                    height={30}
                  />
                </Link>
              </motion.div>
            </div>
            <div className="my-5 justify-center flex sm:justify-start">
              <div>
                This page has been visited{" "}
                <span className="font-bold">{counter}</span> times :)
              </div>
            </div>
          </div>
          {/**Right section */}
          <Image
            src={FrontImage}
            alt="githublogo"
            width={500}
            height={500}
            className="mt-10 md:mt-0 self-center"
          />
        </div>
        <div className="flex gap-10 items-center">
          <div className="font-semibold">Tech Stack</div>
          <div className="w-0.5 h-8 bg-[#000000]"></div>
          <div className="flex gap-5 flex-wrap">
            {techStack.map((element, index) => {
              return (
                <div key={index}>
                  <Image src={element.src} height={30} alt={element.name} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={DownArrow}
              width={40}
              height={10}
              alt="Down Arrow"
              className="cursor-pointer"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LandingSection;
