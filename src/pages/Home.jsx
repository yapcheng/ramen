import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../component/Header";
import HomepagePic from "../component/Homepagepic";
import RamanList from "../component/Ramanlist";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import CategoryFilter from "../component/CategoryFilter";
import ramanData from "../json/Raman.json";


function Home() {
 const [category, setCategory] = useState("全部");


 const filteredRaman =
   category === "全部"
     ? ramanData
     : ramanData.filter((r) => r.category === category);


     const categoryTitle = category === "全部" ? "所有拉麵" : `${category} 拉麵`;


 return (
   <div className="mx-auto main-layout bg-[#F3E8D0] min-h-screen">
     <Helmet>
       <title>{categoryTitle}</title>
     </Helmet>
     <Header />
     <HomepagePic />
     <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-10">
       <Sidebar selected={category} onSelect={setCategory} />


       <div className="md:col-span-9 xl:col-span-10">
         <CategoryFilter selected={category} onSelect={setCategory} />
         <RamanList ramanArray={filteredRaman}/>
       </div>
     </div>
    
     <Footer />
   </div>
 );
}


export default Home;
