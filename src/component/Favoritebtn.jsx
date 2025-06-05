import { useEffect, useState } from "react";
import { doc, updateDoc, increment, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function Favoritebtn({ ramanId }) {
  const [favorited, setFavorited] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    const ramenRef = doc(db, "ramen", ramanId);
    const unsubscribe = onSnapshot(ramenRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setFavoriteCount(data.favoriteCount || 0); // 初始為 0
      }
    });
    return () => unsubscribe();
  }, [ramanId]);

  const handleFavorite = async () => {
    console.log("✅ 按下收藏按鈕"); // ← 用來確認事件有觸發
  console.log("ramanId 是：", ramanId); // ← 用來確認有傳入 ID
    const ramenRef = doc(db, "ramen", ramanId);
    try {
      await updateDoc(ramenRef, {
        favoriteCount: increment(1),
      });
      console.log("✅ 成功寫入 Firestore！");
      setFavorited(true);
    } catch (error) {
      console.error("收藏失敗：", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 ml-20">
      <span className="text-sm text-gray-700"> 收藏次數：{favoriteCount}</span>
      <button
        onClick={handleFavorite}
        disabled={favorited}
        className={`btn px-8 py-3 rounded ${
          favorited ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600 text-white"
        }`}
      >
        {favorited ? "已收藏 " : "這個我喜歡"}
      </button>
    </div>
  );
}
