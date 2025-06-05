import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { Helmet } from "react-helmet-async";
import UserpageCard from "@/component/UserpageCard";

function  Userpage() {
  return (
    <div className="grid  grid-rows-[auto_1fr_auto] bg-[#F3E8D0] min-h-screen">
        <Helmet>
            <title>會員介面</title>
        </Helmet>
        <Header />
        <UserpageCard />
        <Footer  />
    </div>
  );
}
export default Userpage;