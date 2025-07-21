import Layout from "../components/Layout";

import Sidebar from "../components/DashboardFeatures/Sidebar";

export default function Bookmarks() {
  return (
    <Layout>

      <div className="flex flex-row">
        <Sidebar />
        <div className="p-8 pt-8">
          <h1>Bookmarks</h1>
          
          <p> This page hasn't been made yet!</p>
        </div>
      </div>
    </Layout >
  );
}
