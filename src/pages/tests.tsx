import type { ReactNode } from 'react';


import Sidebar from "../components/DashboardFeatures/Sidebar";
import Tabs from "../components/Tabs";
import Layout from "../components/Layout";

export default function Tests() {
  return (
    <Layout>

      <div className="flex flex-row">
        <Sidebar />

        <div className="p-8 w-full">

          <div className="flex flex-col items-start gap-4 mb-0">
            <h1 className="text-4xl m-0">Practice tests</h1>
            <p>Whrrr. Generating test...</p>

            
            <div className="p-4">
              <button className="btn btn-primary">Hello World</button>
            </div>


          </div>
          <hr className="my-2 mx-0" />

          <div>a bunch of graphs</div>

          <p> active tests?</p>
          <em>practice makes perfect, as they say</em>

          <Tabs />

        </div>
      </div>
    </Layout >
  );
}
