import type { ReactNode } from 'react';
import Layout from "../components/General/Layout";

import LikeAndSubscribe from '../components/HomepageFeatures/LikeAndSubscribe';
import styles from './index.module.css';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';


function HomepageHeader() {
  return (

    <header className={styles.heroBanner}>
      <div>
        <h1 className={styles.title}>
          sciolyskillz
        </h1>

        <p className="subtitle text-white pb-6 mt-4 ">A resource hub for Science Olympiad.</p>

          <button className="bg-white text-lg font-semibold text-black pl-5 pr-3 py-2 rounded-full ">
            <div className="flex flex-row font-normal justify-center align-center">
              Explore topics <HugeiconsIcon icon={ArrowRight01Icon} className='relative mt-0.5 mx-0 mb-0' />
            </div>
          </button>
      </div>
    </header>

  );
}

export default function Home(): ReactNode {
  return (
    

    <Layout>
      <HomepageHeader />
      <main>

        <div className={styles.AUGHJHHHHH}
          title="Don't start, just stress. (Don't be happy, worry.)">
          Don't stress, just start.

        </div>



        <div className="mx-[25vh] m-6 flex flex-col gap-12 p-2">


          <div className="flex flex-row gap-6 w-full force-border rounded p-8 bg-slate-100 relative min-h-60 overflow-hidden">

            <div className='mr-96'>
              <h2>Practice tests</h2>
              <p className='text-lg'>Our backend sifts through a bin of past questions like a child with a bin of LEGO, and builds a neat practice test on any topic. I mean, hopefully</p>
            </div>

            <div
              className="w-64 bg-amber-500 h-48 rounded-lg absolute top-5 right-16 flex flex-col gap-1 p-4"
              style={{ transform: 'rotate(4deg)', transformOrigin: 'bottom center' }}
            >
              <p className='text-md font-bold'>What is the powerhouse of the cell?</p>
              <div className="flex flex-row items-center space-x-4">
                {/* Fixed size circle */}
                <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center bg-white flex-shrink-0">
                  <span className="font-bold text-black">A</span>
                </div>
                {/* Text */}
                <p className="text-black font-medium">
                  Mitochondria
                </p>
              </div>

              <div className="flex flex-row items-center space-x-4">
                {/* Fixed size circle */}
                <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center bg-white flex-shrink-0">
                  <span className="font-bold text-black ">B</span>
                </div>
                {/* Text */}
                <p className="text-black font-medium ">
                  Golgi Apparatus
                </p>
              </div>

              <div className="flex flex-row items-center space-x-4">
                {/* Fixed size circle */}
                <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center bg-white flex-shrink-0">
                  <span className="font-bold text-black ">C</span>
                </div>
                {/* Text */}
                <p className="text-black font-medium ">
                  Peroxisomus Purificus
                </p>
              </div>

              <div className="flex flex-row items-center space-x-4">
                {/* Fixed size circle */}
                <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center bg-white flex-shrink-0">
                  <span className="font-bold text-black ">D</span>
                </div>
                {/* Text */}
                <p className="text-black font-medium ">
                  Wingardium Leviosa
                </p>
              </div>


            </div>

          </div>


          <div className="flex flex-row gap-6 w-full force-border rounded p-8 bg-slate-100 relative min-h-60 overflow-hidden">

            <div>
              <h2>Docs Guide</h2>
              <p className='text-lg'>Yay docs! Wow! Wonderful! They're not finished</p>
            </div>



            <div
              className="w-64 bg-slate-300 h-64 rounded-lg absolute bottom-[-4rem] right-16"
              style={{ transform: 'rotate(8deg)', transformOrigin: 'bottom center' }}
            ></div>
            <div
              className="w-64 bg-amber-500 h-64 rounded-lg absolute bottom-[-4rem] right-16"
              style={{ transform: 'rotate(0deg)', transformOrigin: 'bottom center' }}
            ></div>


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

              <div className="bg-amber-500 col-start-1 col-span-2">a</div>
              <div className="bg-amber-500">a</div>
              <div className="bg-amber-500">a</div>
              <div className="bg-amber-500">a</div>

            </div>



          </div>
            */}

        </div>
        <LikeAndSubscribe />

      </main>
    </Layout>
  );
}
