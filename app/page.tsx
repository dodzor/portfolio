import Image from "next/image";
import { BsMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin
} from "react-icons/ai";
import profile from "../public/wild-boy.jpeg"
import code from "../public/code.png";
import tools from "../public/tools.png";
import dex from "../public/dex.png";
import digionline from "../public/digionline.png";

export default function Home() {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-8 mb-8 flex justify-between">
          <h1 className="text-xl font-burtons">developedbydorian</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer text-xl"><BsMoonStarsFill/></li>
            <li>
              <a href="https://drive.google.com/file/d/19Bs7HbWWX4__Bwk_rvo7yAaI9F8HZEiy/view" target="_blank"
                 className="bg-gradient-to-r from-purple-600 to-yellow-500 text-white px-4 py-2 ml-4 rounded-md">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="p-8 text-center">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">G. Raul-Dorian</h2>
          <h3 className="text-2xl py-2 md:text-3xl">Fullstack & blockchain developer</h3>
          <p className="text-md pt-5 leading-8 text-gray-800 md:text-lg max-w-xl mx-auto">Professional providing services for web2 and web3 creations. Join me below and let&apos;s build together!</p>
        </div>
        <div className="text-5xl text-gray-600 flex justify-center gap-16">
          <AiFillLinkedin />
          <AiFillTwitterCircle /> 
        </div>
        <div className="relative rounded-full w-80 h-80 mt-10 mx-auto md:h-96 md:w-96">
          <Image src={profile} objectFit="cover" alt=""/>
        </div>
      </section>
      <section>
        <div className="md:pt-20">
          <h3 className="text-3xl pb-4 text-center">Work experience</h3>
          <p className="text-md py-2 leading-8">
            Worked both for a tech startup - 
            <a href="http://bitnova.ro/" target="_blank"><span className="text-cyan-500"> Bitnova</span></a> - 2 years 
            and a multinational company - 
            <a href="https://www.digi-communications.ro/" target="_blank"><span className="text-cyan-500"> Digi Communications N.V.</span></a> - 7+ years.
          </p>
          <p className="text-md py-2 leading-8">
            I&apos;ve gained hands-on experience both in backend, frontend and in blockchain(web3) technologies. 
          </p>
        </div>
        <div className="md:flex gap-40">
          <div className="text-center shadow-lg p-10 rounded md:px-20">
            <Image src={code} className="mx-auto" width={100} height={100} alt="Code"></Image>
            <h3 className="py-2 text-teal-600">Languages that I speak</h3>
            <p className="text-gray-800 py-1">PHP</p>
            <p className="text-gray-800 py-1">Mysql</p>
            <p className="text-gray-800 py-1">Javascript</p>
            <p className="text-gray-800 py-1">Solidity</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded md:px-20">
            <Image src={tools} className="mx-auto" width={100} height={100} alt="Tools"></Image>
            <h3 className="py-2 text-teal-600">Tools that I use</h3>
            <p className="text-gray-800 py-1">Zend/Laminas</p>
            <p className="text-gray-800 py-1">React</p>
            <p className="text-gray-800 py-1">Hardhat</p>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-20">
          <div>
            <h3 className="text-3xl py-2 text-center">Portfolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-4 lg:flex-row flex-wrap">
            <div className="basis-1/3 flex-1">
                <a href="https://decentralized-exchange.vercel.app" target="_blank">
                  <Image className="rounded-lg object-cover" src={dex} alt=""></Image>
                </a>
                <a href="https://decentralized-exchange.vercel.app" target="_blank">
                  <h2 className="py-4 text-lg text-purple-600 text-center">PirateBit - DEX</h2>
                </a>
            </div>
            <div className="basis-1/3 flex-1">
                <a href="https://www.digionline.ro/" target="_blank">
                  <Image className="rounded-lg object-cover" src={digionline} alt=""></Image>
                </a>
                <a href="https://www.digionline.ro/" target="_blank">
                  <h2 className="py-4 text-lg text-purple-600 text-center">Digionline - video streaming service</h2>
                </a>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
