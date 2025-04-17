import Header from "../component/Header";
import RamanDetail from "../component/RamanDetail";
import Footer from "../component/Footer";
import products from "../json/Raman_detail.json";

import { useParams } from "react-router";

function Raman() {

    const { ramanId } = useParams();
    const raman = products.find((x) => x.id === ramanId
   );

    return (
      <div className="  mx-auto main-layout bg-gray-900 min-h-screen">
        <Header />
        <RamanDetail raman={raman} />
        <Footer />
      </div>
    )
  }
  export default Raman