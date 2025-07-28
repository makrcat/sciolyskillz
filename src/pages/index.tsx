"use client";
import { useEffect, useState } from "react";
import type { ReactNode } from 'react';
import Layout from "../components/General/Layout";

import LikeAndSubscribe from '../components/HomepageFeatures/LikeAndSubscribe';
import styles from './index.module.css';
import clsx from "clsx";




function HomepageHeader() {
  return (
    <div className="relative w-full h-[60vh] flex justify-center items-center gap-8 bg-white">

      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-r from-teal-100 to-blue-100 z-0" />
      <div className="absolute top-0 left-0 inset-0 h-48 bg-gradient-to-b from-white/10 to-white z-10" />
      <img className="absolute top-4 left-0 w-full z-20 opacity-20" src='/static/img/bannner.png'></img>

      <div className="relative z-10 pr-[10%]">
        <h1 className={styles.title}>
          sciolyskillz
        </h1>
        <p className="text-2xl">A resource hub for Science Olympiad.</p>


        {/*
        <div className="flex flex-col justify-center relative inline-block mt-8">
          <div className="relative group cursor-pointer">
            <div
              className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-500 group-hover:duration-500 z-0"
            ></div>

            <div
              className="relative px-4 py-3 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start">

              <p className="text-slate-800">Explore the topics</p>

            </div>
          </div>
        </div>
*/}

        <br></br>
        <button className="btn btn-lg">Explore the topics</button>


      </div>
    </div>



  );
}


const Arrow = () => (
  <svg
    className="inline-block mx-1 sm:mx-2 w-8 sm:w-10 h-8 sm:h-10 fill-white"
    viewBox="0 0 24 24"
  >
    <polygon points="2,2 12,12 2,22 8,22 18,12 8,2" fill="gray" />
  </svg>
);


function ArrowBanner() {
  const [arrowCount, setArrowCount] = useState(10); // default fallback

  useEffect(() => {
    const updateArrowCount = () => {
      const count = Math.floor(window.innerWidth / 170); // adjust spacing here
      setArrowCount(count);
    };

    updateArrowCount(); // initial count
    window.addEventListener("resize", updateArrowCount);
    return () => window.removeEventListener("resize", updateArrowCount);
  }, []);

  return (
    <div className="absolute bottom-0 w-full bg-gray-200 py-6 overflow-hidden">
      <div className="whitespace-nowrap flex flex-row justify-center items-center flex-wrap">
        {[...Array(arrowCount)].map((_, i) => (
          <Arrow key={`left-${i}`} />
        ))}

        <span
          className={clsx(
            "px-4 sm:px-6 text-[rgb(100,100,100)] text-3xl sm:text-4xl font-semibold",
            "poppins"
          )}
        >
          Check it out
        </span>

        {[...Array(arrowCount)].map((_, i) => (
          <Arrow key={`right-${i}`} />
        ))}
      </div>
    </div>
  );
}


export default function Home(): ReactNode {
  return (


    <Layout>
      <HomepageHeader />
      <ArrowBanner />


      <main className="mt-72">


        {/*
        <div className={styles.AUGHJHHHHH}
          title="Don't start, just stress. (Don't be happy, worry.)">
          <span >Don't stress, </span> 
          <span>just start.</span>

        </div>
        */}
        <div className="mx-[15vw] m-6 flex flex-col gap-12 p-2  ">



          <div className="flex flex-row w-full rounded justify-between relative min-h-60 
          border border-gray-200 p-8 overflow-clip gap-16">

            <div className="absolute -bottom-6 -right-2 opacity-15 w-48 h-48 rounded-full bg-blue-400 z-1"></div>
            <div className="absolute -top-12 -left-12 opacity-15 w-72 h-72 rounded-full bg-teal-400  z-1"></div>

            <div className="flex-1 z-10">
              <h2 className='text-4xl'>Practice tests & questions</h2>
              <p className='text-lg text-gray-800'>
                <br />The questions are compiled from previously released competitions, accessible on the scioly wiki. There's <span className="font-bold">single choice, multiple choice, matching, and short answer.</span> 
                <br /><br />There are currently 7 competitions in the DB, amounting to about 130 problems! </p>
            </div>


            <div className="relative z-2 bg-white w-72 border border-gray-300 rounded-lg p-4 flex flex-col gap-1">

              <p className="text-lg font-semibold pb-1">What is the powerhouse of the cell?</p>

              {[
                { label: "A", text: "Mitochondria" },
                { label: "B", text: "Golgi Apparatus" },
                { label: "C", text: "Peroxisomus Purificus" },
                { label: "D", text: "Wingardium Leviosa" },
              ].map(({ label, text }) => (

                <div
                  key={label}
                  className=" bg-gray-100  border border-gray-300 flex items-center gap-2 cursor-pointer hover:bg-gray-300 rounded-md p-2"
                >
                  <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center bg-white flex-shrink-0">
                    <span className="font-bold text-black">{label}</span>
                  </div>
                  <p className="text-black font-medium">{text}</p>
                </div>
              ))}



            </div>


          </div>







          <div className={clsx(
            "flex flex-row w-full rounded justify-between relative min-h-60 border border-gray-200 p-8 overflow-clip",
          )}
          >


            <div className="absolute -bottom-6 -right-2 opacity-15 w-48 h-48 rounded-full bg-pink-400 z-1"></div>
            <div className="absolute -top-12 -left-12 opacity-15 w-72 h-72 rounded-full bg-purple-400  z-1"></div>

            <div className="w-[50%]">
              <h2 className='text-4xl'>DOCS</h2>
              <p className='text-lg text-gray-800'>A notes-style guide, to make things make sense.</p>
            </div>




            <div
              className="z-10 w-64 bg-slate-300 h-64 rounded-lg absolute bottom-[-4rem] right-32"
              style={{ transform: 'rotate(8deg)', transformOrigin: 'bottom center' }}
            ></div>
            <div
              className="z-10 w-64 bg-gray-500 h-64 rounded-lg absolute bottom-[-4rem] right-32"
              style={{ transform: 'rotate(0deg)', transformOrigin: 'bottom center' }}
            ></div>


          </div>




          <div className={clsx(
            "flex flex-row w-full rounded justify-between relative min-h-60 border border-gray-200 p-8 overflow-clip",
          )}
          >


            <div className="absolute -bottom-6 -right-2 opacity-15 w-48 h-48 rounded-full bg-amber-400 z-1"></div>
            <div className="absolute -top-12 -left-12 opacity-15 w-72 h-72 rounded-full bg-red-400  z-1"></div>

            <div className="w-96">
              <h2 className='text-4xl'>LEARN</h2>
              <p className='text-lg text-gray-800'>The ducks walked up to the lemonade stand, and they said to the man running the stand: hey. (bomp bomp bomp.) got any </p>
            </div>
          </div>




          {/*
          <div className="flex flex-row gap-6 w-full force-border rounded p-8 bg-slate-100 relative min-h-60 overflow-hidden">

            <div>
              <h2>A dashboard</h2>
              <p className='text-lg'>Woaww so many widgets</p>
            </div>



            <div
              className="w-96 force-border h-48 rounded-lg absolute bottom-1  right-16 grid grid-cols-4 gap-4 gap-x-4 gap-y-4"
            >

              <div className="bg-gray-500 col-start-1 col-span-2">a</div>
              <div className="bg-gray-500">a</div>
              <div className="bg-gray-500">a</div>
              <div className="bg-gray-500">a</div>

            </div>



          </div>
            */}

        </div>
        <LikeAndSubscribe />


      </main>
    </Layout>
  );
}
