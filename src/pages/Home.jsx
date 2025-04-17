import { useState } from "react";
import Header from "../component/Header";
import HomepagePic from "../component/Homepagepic";
import RamanList from "../component/Ramanlist";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import CategoryFilter from "../component/CategoryFilter"; 
import ramanData from "../json/raman.json";

function Home() {
  const [category, setCategory] = useState("全部");

  const filteredRaman =
    category === "全部"
      ? ramanData
      : ramanData.filter((r) => r.category === category);
  return (
    <div className="mx-auto main-layout bg-[#F3E8D0] min-h-screen">
      <Header />
      <HomepagePic />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-10">
        <Sidebar selected={category} onSelect={setCategory} />

        <div className="md:col-span-9 xl:col-span-10">
          <CategoryFilter selected={category} onSelect={setCategory} />
          <RamanList ramanArray={ramanData}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
