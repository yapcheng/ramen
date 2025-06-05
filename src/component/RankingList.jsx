import { useEffect, useState } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router";
import ramenDetail from "@/json/Raman_detail.json"; 

export default function RankingList() {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const fetchRanking = async () => {
      const ramenRef = collection(db, "ramen");
      const q = query(ramenRef, orderBy("favoriteCount", "desc"), limit(12));
      const querySnapshot = await getDocs(q);

      const rankedIdsWithCount = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        favoriteCount: doc.data().favoriteCount || 0,
      }));

      const fullInfoRanking = rankedIdsWithCount.map(({ id, favoriteCount }) => {
        const detail = ramenDetail.find((r) => String(r.id) === String(id));
        return detail
          ? { ...detail, favoriteCount }
          : { id, name: "未知拉麵", favoriteCount }; 
      });

      setRanking(fullInfoRanking);
    };

    fetchRanking();
  }, []);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">拉麵排行榜 </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ranking.map((ramen, index) => (
          <div key={ramen.id} className="bg-yellow-50 p-4 rounded-xl shadow-lg">
            <p className="text-lg font-bold text-orange-600">#{index + 1}</p>
            <Link to={`/raman/${ramen.id}`}>
              <img
                src={ramen.image || "/images/default-image.png"}
                alt={ramen.name}
                className="w-full h-40 object-cover rounded-md mt-2"
              />
              <h2 className="text-xl font-semibold mt-2">{ramen.name}</h2>
            </Link>
            <p className="text-sm text-gray-600 mt-1">收藏次數：{ramen.favoriteCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
