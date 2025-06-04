import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { Helmet } from "react-helmet-async";
import Loginsection from "@/component/Loginsection";

function Myfavorite() {
  return (
    <div className="grid  grid-rows-[auto_1fr_auto] bg-[#F3E8D0] min-h-screen">
        <Helmet>
               <title>會員登入</title>
        </Helmet>
      <Header />
      <Loginsection />
      <Footer  />
    </div>
  );
}
export default Myfavorite;