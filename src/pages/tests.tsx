import Sidebar from "../components/DashboardFeatures/Sidebar";
import Tabs from "../components/Tabs";
import Layout from "../components/Layout";

export default function Tests() {
  return (
    <Layout noFooter>

      <div className="flex flex-row">
        <Sidebar />

        <div className="p-8 w-full">

          <div className="flex flex-row gap-4 mb-4">
            <div className="flex-1">
              <h1 className="text-2xl m-0 mb-2">Practice Tests</h1>
              <p className="text-sm text-gray-600">Whrrr. Generating tests...
                practice makes perfect, as they say
              </p>
            </div>

            <div className="relative inline-block">
              {/* Blurred aura */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-600 to-blue-700 blur-lg opacity-80 h-10"></div>

              {/* Actual button */}
              <button className="relative z-10 shadow text-white font-semibold rounded-lg px-5 py-1.5 h-min border border-white bg-[rgba(255,255,255,0.3)] hover: cursor-pointer hover:bg-[rgba(255,255,255,0.4)] hover:shadow-lg transition transition-300">
                New Test
              </button>
            </div>

          </div>

          <div className="flex flex-row h-24 gap-4 w-full">
            <div className=" border border-gray-200 rounded h-full w-full"></div>
            <div className="border border-gray-200 rounded h-full w-full"></div>
            <div className="border border-gray-200 rounded h-full w-full"></div>
            <div className="border border-gray-200 rounded h-full w-full"></div>
          </div>

          <h1 className="text-2xl m-0 mt-6 mb-2">All Tests</h1>
          <div className="relative -top-10">
            <Tabs />
          </div>

        </div>
      </div>
    </Layout >
  );
}
