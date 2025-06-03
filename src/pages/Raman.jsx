import Header from "@/component/Header";
import RamanDetail from "@/component/RamanDetail";
import Footer from "@/component/Footer";
import products from "@/json/Raman_detail.json";

import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";

function Raman() {

    const { ramanId } = useParams();
    const raman = products.find((x) => x.id === ramanId);
   
    return (
      <div className="  mx-auto main-layout bg-[#F3E8D0] min-h-screen">
        <Helmet> <title>{raman.name}</title></Helmet>
        <Header />
        <RamanDetail raman={raman} />
        <Footer />
      </div>
    )
  }
  export default Raman