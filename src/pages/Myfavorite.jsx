import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { Helmet } from "react-helmet-async";
import FavoriteList from "../component/FavoriteList";

function Myfavorite() {
  return (
    <div className="mx-auto main-layout bg-[#F3E8D0] min-h-screen">
        <Helmet>
              <title>我的收藏</title>
        </Helmet>
      <Header />
      <div className="py-10 px-4 min-h-[80vh]">
        <FavoriteList />
      </div>
      <Footer />
    </div>
  );
}
export default Myfavorite;