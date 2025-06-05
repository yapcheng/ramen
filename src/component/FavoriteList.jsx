import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firebaseAuth, db } from "../firebase";
import ramen from "@/json/Raman_detail.json";
import { Link } from "react-router";

export default function FavoriteList() {
  const [favoriteRamen, setFavoriteRamen] = useState([]);
  const user = firebaseAuth.currentUser;

  useEffect(() => {
    const fetchFavoriteRamen = async () => {
      if (!user) return;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        const favoriteIds = userData.favoriteRamen || [];

       
        const matchedRamen = ramen.filter((ramen) =>
          favoriteIds.includes(String(ramen.id))
        );

        setFavoriteRamen(matchedRamen);
      }
    };

    fetchFavoriteRamen();
  }, [user]);

  if (!user) return <p className="p-6 text-center">請先登入以查看收藏清單。</p>;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">我的收藏清單</h1>
      {favoriteRamen.length === 0 ? (
        <p>目前沒有收藏任何拉麵。</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteRamen.map((ramen) => (
            <div key={ramen.id} className="bg-amber-50 p-4 rounded-xl shadow-md">
              <Link to={`/raman/${ramen.id}`}>
                <img
                  src={ramen.image || "/images/default-image.png"}
                  alt={ramen.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h2 className="text-lg font-bold mt-2">{ramen.name}</h2>
              </Link>
              <p className="text-sm text-gray-600 mt-1">{ramen.address}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
