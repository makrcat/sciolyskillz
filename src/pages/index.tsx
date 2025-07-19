import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import LikeAndSubscribe from '../components/HomepageFeatures/LikeAndSubscribe';
import styles from './index.module.css';



function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <header className={clsx('hero hero--primary', styles.heroBanner)}>

      {/*Header*/}
      <div className="container">
        <h1 className={styles.title}>
          {siteConfig.title}
        </h1>


        <p className="hero__subtitle text-white pb-6">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/topics" style={{ position: 'relative' }}>
            Start learning

          </Link>

        </div>

        {/*Header end*/}


      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
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
                  <span className="font-bold text-black select-none">A</span>
                </div>
                {/* Text */}
                <p className="text-black font-medium select-none">
                  Mitochondria
                </p>
              </div>

              <div className="flex flex-row items-center space-x-4">
                {/* Fixed size circle */}
                <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center bg-white flex-shrink-0">
                  <span className="font-bold text-black select-none">B</span>
                </div>
                {/* Text */}
                <p className="text-black font-medium select-none">
                  Golgi Apparatus
                </p>
              </div>

              <div className="flex flex-row items-center space-x-4">
                {/* Fixed size circle */}
                <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center bg-white flex-shrink-0">
                  <span className="font-bold text-black select-none">C</span>
                </div>
                {/* Text */}
                <p className="text-black font-medium select-none">
                  Peroxisomus Purificus
                </p>
              </div>

              <div className="flex flex-row items-center space-x-4">
                {/* Fixed size circle */}
                <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center bg-white flex-shrink-0">
                  <span className="font-bold text-black select-none">D</span>
                </div>
                {/* Text */}
                <p className="text-black font-medium select-none">
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



        </div>





        <LikeAndSubscribe />


      </main>
    </Layout>
  );
}
