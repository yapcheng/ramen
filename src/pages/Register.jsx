import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { Helmet } from "react-helmet-async";
import RegisterCard from "@/component/RegisterCard";

function  Register() {
  return (
    <div className="grid  grid-rows-[auto_1fr_auto] bg-[#F3E8D0] min-h-screen">
        <Helmet>
            <title>會員註冊</title>
        </Helmet>
        <Header />
        <RegisterCard />
        <Footer  />
    </div>
  );
}
export default Register;