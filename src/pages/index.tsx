import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


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

function LikeAndSubscribe() {
  return (
    <div className="w-full lg:py-16 lg:px-6">

      <div className="w-full sm:text-center">
        <h2 className="text-gray-900 sm:text-4xl">Join the mailing list</h2>
        <p className="mb-8 mx-auto max-w-2xl font-regular text-gray-500 sm:text-xl dark:text-gray-400">Get notified when stuff happens! Like releases, updates, features, etc.</p>

        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
          <div className="relative w-full">


            <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>


            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>


            <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg" placeholder="Enter your email" type="email" id="email" />
          </div>


          <div>
            <button type="submit" className="text-white font-bold py-3 px-5 w-full text-sm text-center bg-[rgba(47,133,85,255)] rounded-lg border cursor-pointer border-primary-600 sm:rounded-none sm:rounded-r-lg" style={{ "border": "1px solid rgba(47,133,85,255)", "borderLeft": "none" }}>Thanks!</button>
          </div>


        </div>


        <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500">Data exists lol. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">There is no Privacy Policy</a>.</div>

      </div>
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

        <div className="mt-10 text-center" style={{ fontFamily: 'Poppins', }}>
          <h1>Don't stress, just start.</h1>
        </div>


        <div className="mx-[10vh] m-6">


          <div className="flex flex-col gap-6 p-2 ">


            <div className="w-full force-border rounded p-4">
              <h2>Docs Guide</h2>
            

            </div>


            <div className="w-full force-border rounded p-4">
              <h2>Dashboard</h2>
            </div>

            <div className="w-full force-border rounded p-4">
              <h2>Docs Guide</h2>
            </div>


          </div>


        </div>


        <LikeAndSubscribe />


      </main>
    </Layout>
  );
}
