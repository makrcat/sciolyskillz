import type { ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


import Sidebar from "../components/DashboardFeatures/Sidebar";

export default function Tests() {
  return (
    <Layout noFooter>

      <div className="flex flex-row">
        <Sidebar />
        <div className="p-8 pt-8">
          <center><h1>Tests</h1></center>
          <p> This page hasn't been made yet!</p>
          
        </div>
      </div>
    </Layout >
  );
}
