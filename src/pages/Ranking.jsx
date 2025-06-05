import Header from "@/component/Header";
import Footer from "@/component/Footer";
import RankingList from "@/component/RankingList";


function Ranking() {
  return (
    <div className="mx-auto main-layout bg-[#F3E8D0] min-h-screen">
      <Header />
      <div className=" py-10 px-4min-h-[80vh]">
       <RankingList />
      </div>
      <Footer />
    </div>
  );
}
export default Ranking;