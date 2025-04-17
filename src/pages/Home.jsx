import Header from "../component/Header";
import HomepagePic from "../component/Homepagepic";
import RamenList from "../component/Ramanlist";
import Footer from "../component/Footer";
function Home() {

    return (
      <div className="  mx-auto main-layout bg-gray-900 min-h-screen">
        <Header />
        <HomepagePic />
        <div className=" grid grid-cols-1 md:grid-cols-12 gap-4 p-10 ">
          <div className=" hidden md:grid  col-span-3 bg-amber-400 h-auto w-auto xl:col-span-2 py-5">
          </div>
          <div className=" md:col-span-9 xl:col-span-10">
          <RamenList />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  export default Home