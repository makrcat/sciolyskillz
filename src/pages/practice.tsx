import Layout from "../components/General/Layout";


import Sidebar from "../components/DashboardFeatures/Sidebar";

export default function Practice() {
  return (
    <Layout>

      <div className="flex flex-row">
        <Sidebar />
        <div className="p-8 pt-8">
          <h1>Practice</h1>
          <p> This page hasn't been made yet!</p>
          
        </div>
      </div>
    </Layout >
  );
}
