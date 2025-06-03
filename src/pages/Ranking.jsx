import Header from "@/component/Header";
import Footer from "@/component/Footer";

function Ranking() {
  return (
    <div className="mx-auto main-layout bg-[#F3E8D0] min-h-screen">
      <Header />
      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-4xl font-bold text-gray-700">排行榜</h1>
      </div>
      <Footer />
    </div>
  );
}
export default Ranking;