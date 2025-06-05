import { useEffect, useState } from "react";
import {
  doc,
  updateDoc,
  increment,
  onSnapshot,
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";
import { firebaseAuth, db } from "../firebase";

export default function Favoritebtn({ ramanId }) {
  const [favorited, setFavorited] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const user = firebaseAuth.currentUser;

  useEffect(() => {
  
    const ramenRef = doc(db, "ramen", ramanId);

    
    const unsubscribe = onSnapshot(ramenRef, (docSnap) => {
      if (docSnap.exists()) {
        setFavoriteCount(docSnap.data().favoriteCount || 0);
      }
    });

    
    const checkUserFavorite = async () => {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const list = userSnap.data().favoriteRamen || [];
        setFavorited(list.includes(ramanId));
      }
    };

    checkUserFavorite();
    return () => unsubscribe();
  }, [ramanId, user]);

  const handleToggleFavorite = async () => {
    if (!user) {
      alert("請先登入才能操作！");
      return;
    }
    if (loading) return;

    setLoading(true);

    try {
      const ramenRef = doc(db, "ramen", ramanId);
      const userRef = doc(db, "users", user.uid);

      if (favorited) {
      
        await updateDoc(ramenRef, {
          favoriteCount: increment(-1),
        });
        await updateDoc(userRef, {
          favoriteRamen: arrayRemove(ramanId),
        });
        setFavorited(false);
      } else {
       
        await updateDoc(ramenRef, {
          favoriteCount: increment(1),
        });
        await updateDoc(userRef, {
          favoriteRamen: arrayUnion(ramanId),
        });
        setFavorited(true);
      }
    } catch (error) {
      console.error("操作失敗:", error);
      alert("操作失敗，請稍後再試。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 ml-20">
      <span className="text-sm text-gray-700">收藏次數：{favoriteCount}</span>
      <button
        onClick={handleToggleFavorite}
        disabled={loading}
        className={`btn px-8 py-3 rounded ${
          favorited
            ? "bg-gray-300 text-gray-600 hover:bg-gray-400"
            : "bg-yellow-500 hover:bg-yellow-600 text-black"
        }`}
      >
        {loading
          ? "加入收藏..."
          : favorited
          ? "取消收藏"
          : "這個我喜歡"}
      </button>
    </div>
  );
}
