"use client";
import { useState } from "react";
import Image from "next/image";
import { BsMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin
} from "react-icons/ai";
import profile from "../public/profile/profile.jpg";
import code from "../public/code.png";
import tools from "../public/tools.png";
import dex from "../public/dex.png";
import digionline from "../public/digionline.png";

export default function Home() {
  const [darkMode, toggleDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40">
        <section>
          <nav className="pt-8 mb-8 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">developedbyraul</h1>
            <ul className="flex items-center">
              <li className="cursor-pointer text-xl dark:text-white" onClick={()=> toggleDarkMode(!darkMode)}><BsMoonStarsFill/></li>
              <li>
                <a href="https://drive.google.com/file/d/14l-GaTiRw_NGRY7e8AdYQ6s__LlnRgqG/view" target="_blank"
                  className="bg-gradient-to-r from-purple-600 to-yellow-500 text-white px-4 py-2 ml-4 rounded-md">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="relative mt-10" >
            <Image className="mx-auto rounded-xl overflow-hidden" width={240} height={240} src={profile} objectFit="cover" alt=""/>
          </div>
          <div className="p-8 text-center">
            <h2 className="text-5xl py-2 text-black dark:text-teal-400 font-small md:text-5xl">Raul D. Cristea</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Fullstack & blockchain developer</h3>
            <p className="text-md pt-5 leading-8 text-gray-800 dark:text-white md:text-2xl max-w-xl mx-auto">Professional providing services for web2 and web3 creations. Join me below and let&apos;s build together!</p>
          </div>
          <div className="text-5xl text-gray-600 dark:text-gray-400 flex justify-center gap-16">
            <a target="_blank" href="https://www.linkedin.com/in/g-raul-dorian"><AiFillLinkedin /></a>
            <a target="_blank" href="https://twitter.com/rauldorian_dev"><AiFillTwitterCircle /></a> 
          </div>
        </section>
        <section>
          <div className="text-center mt-20">
            <h3 className="text-3xl pb-4 text-center">Work experience</h3>
            <p className="text-md md:text-2xl py-2 leading-8 dark:text-white">
              Worked both for a tech startup - 
              <a href="http://bitnova.ro/" target="_blank"><span className="text-cyan-500 dark:text-cyan-400"> Bitnova</span></a> - 2 years 
              and a multinational company - 
              <a href="https://www.digi-communications.ro/" target="_blank"><span className="text-cyan-500 dark:text-cyan-400"> Digi Communications N.V.</span></a> - 9+ years.
            </p>
            <p className="text-md md:text-2xl py-2 leading-8 dark:text-white">
              I&apos;ve gained hands-on experience both in backend, frontend and in blockchain(web3) technologies. 
            </p>
          </div>
          <div className="md:flex gap-40 justify-center">
            <div className="text-center shadow-lg p-10 rounded md:px-20">
              <Image src={code} className="mx-auto" width={100} height={100} alt="Code"></Image>
              <h3 className="py-2 text-teal-600 dark:text-teal-400">Languages that I speak</h3>
              <p className="text-gray-800 py-1 dark:text-white">PHP</p>
              <p className="text-gray-800 py-1 dark:text-white">Mysql</p>
              <p className="text-gray-800 py-1 dark:text-white">Javascript</p>
              <p className="text-gray-800 py-1 dark:text-white">Solidity</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded md:px-20">
              <Image src={tools} className="mx-auto" width={100} height={100} alt="Tools"></Image>
              <h3 className="py-2 text-teal-600 dark:text-teal-400">Tools that I use</h3>
              <p className="text-gray-800 py-1 dark:text-white">Symfony</p>
              <p className="text-gray-800 py-1 dark:text-white">React</p>
              <p className="text-gray-800 py-1 dark:text-white">Tailwind</p>
              <p className="text-gray-800 py-1 dark:text-white">Hardhat</p>
            </div>
          </div>
        </section>
        <section>
          <div className="pt-20 text-center">
            <div>
              <h3 className="text-3xl py-2 text-center dark:text-white">Portfolio</h3>
            </div>
            <div className="flex flex-col gap-10 py-4 lg:flex-row flex-wrap">
              <div className="basis-1/3 flex-1">
                  <a href="https://decentralized-exchange.vercel.app" target="_blank">
                    <Image className="rounded-lg object-cover" src={dex} alt=""></Image>
                  </a>
                  <a href="https://decentralized-exchange.vercel.app" target="_blank">
                    <h2 className="py-4 text-lg text-purple-600 text-center dark:text-purple-400">PirateBit - DEX</h2>
                  </a>
              </div>
              <div className="basis-1/3 flex-1">
                  <a href="https://www.digionline.ro" target="_blank">
                    <Image className="rounded-lg object-cover" src={digionline} alt=""></Image>
                  </a>
                  <a href="https://www.digionline.ro" target="_blank">
                    <h2 className="py-4 text-lg text-purple-600 dark:text-purple-400 text-center">Digionline - video streaming service</h2>
                  </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
