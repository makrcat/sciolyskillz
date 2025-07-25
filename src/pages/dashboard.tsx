import Layout from "../components/General/Layout";



import Sidebar from "../components/DashboardFeatures/Sidebar";
import StatsPanel from "../components/DashboardFeatures/StatsPanel";
import TopicsPanel from "../components/DashboardFeatures/TopicsPanel";
import CatFactCard from "../components/DashboardFeatures/CatFactCard";
import Day from "../components/DashboardFeatures/Day";
import LeftOff from "../components/DashboardFeatures/LeftOff";
import ButtonCard from "../components/DashboardFeatures/ButtonCard";

export default function Dashboard() {
  return (
     <Layout>

      <div className="flex flex-row">
        <Sidebar />
        <div className="bg-top bg-contain bg-no-repeat p-8 pt-8">
          <center><h1 className="font-semibold text-4xl mb-8">Hi! You're logged in.</h1></center>
          <LeftOff></LeftOff>

          <div className="grid grid-cols-5 [grid-template-rows:repeat(3,clamp(200px,20vh,300px))] gap-4 max-w-6xl mt-4">


            {/* Day: 1 col x 1 row */}
            <div className="col-span-1 row-span-1 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-900  rounded-lg">
              <Day />
            </div>

            {/* StatsPanel: 3 cols x 1 row */}
            <div className="col-span-4 row-span-1 bg-white rounded-lg">
              <StatsPanel />
            </div>

            {/* TopicsPanel: 2 cols x 2 rows */}
            <div className="col-span-2 row-span-2 bg-blue-50 rounded-lg">
              <TopicsPanel />
            </div>

            {/* CatFactCard: 1 col x 1 row */}
            <div className="col-span-1 row-span-1 bg-yellow-50 rounded-lg">
              <CatFactCard />
            </div>

            {/* Additional block (optional): 1 col x 1 row */}
            <div className="col-span-1 row-span-1 bg-gray-50 rounded-lg">
              <ButtonCard />
            </div>


          </div>
        </div>
      </div>
    </Layout>
  );
}
