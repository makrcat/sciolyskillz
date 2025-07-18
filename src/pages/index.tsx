import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import LikeAndSubscribe from '../components/HomepageFeatures/LikeAndSubscribe';
import styles from './index.module.css';


function AAAAAAA() {
  return (
    <div className="relative w-2/3 flex justify-center items-center h-64">
      <div
        className="w-1/2 bg-slate-100 h-64 rounded-xl absolute"
        style={{ transform: 'rotate(-10deg) translateX(-60px)', transformOrigin: 'bottom center' }}
      ></div>
      <div
        className="w-1/2 bg-slate-200 h-64 rounded-xl absolute"
        style={{ transform: 'rotate(0deg) translateX(0)', transformOrigin: 'bottom center' }}
      ></div>
      <div
        className="w-1/2 bg-slate-300 h-64 rounded-xl absolute"
        style={{ transform: 'rotate(10deg) translateX(60px)', transformOrigin: 'bottom center' }}
      ></div>
    </div>
  )
}



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

        <div className={styles.AUGHJHHHHH}>
          Don't stress, just start.
        </div>


        <div className="mx-[25vh] m-6 flex flex-col gap-12 p-2">


          <div className="
            flex flex-row gap-6 
            w-full 
            force-border rounded p-8
            bg-slate-100
            ">


            <div>
              bro i cant ui design what
            </div>


            <div>
              <h2>Docs Guide</h2>
              <p>Yay docs! Wow! Wonderful! AAAAAAAAA I hope docs will be useful</p>
            </div>


          </div>

        </div>


        <LikeAndSubscribe />


      </main>
    </Layout>
  );
}
