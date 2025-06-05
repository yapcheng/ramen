import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  doc,
  getDoc,
  deleteDoc
} from "firebase/firestore";
import { db } from "../firebase";
import { firebaseAuth } from "../firebase"; 

function FirebaseCommentSection({ ramanId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const user = firebaseAuth.currentUser;

  useEffect(() => {
    const q = query(
      collection(db, "ramen", ramanId, "comments"),
      orderBy("timestamp", "desc")
    );
  
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentList = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          text: data.text,
          username: data.username || "匿名",
          uid: data.uid || null,
          timestamp: data.timestamp ? data.timestamp.toDate() : null,
        };
      });
      setComments(commentList);
    });
  
    return () => unsubscribe();
  }, [ramanId]);
  
  const handleAdd = async () => {
    if(!user){
      alert("請先登入才能留言！");
      return;
    }

  if (newComment.trim() === "") return;
  const userDoc = await getDoc(doc(db, "users", user.uid));
  const username = userDoc.exists() ? userDoc.data().username : "匿名";

  await addDoc(collection(db, "ramen", ramanId, "comments"), {
    text:newComment,
    username,
    uid: user.uid,
    timestamp: serverTimestamp(),
  });
  setNewComment(""); // ✅ 確保清除輸入框
  };

  const handleDelete = async (commentId) => {
    const confirm = window.confirm("確定要刪除這條評論嗎？");
    if (!confirm) return;
    await deleteDoc(doc(db, "ramen", ramanId, "comments", commentId));
  };

  const formatTime=(date)=> {
    if (!date) return "未知時間";
    const diff=(new Date() - date) / 1000; // 秒數差
    if (diff < 60) return "剛剛";
    if (diff < 3600) return `${Math.floor(diff / 60)} 分鐘前`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} 小時前`;
    return date.toLocaleDateString("zh-TW", {hour12: false});
  };

  return (
    <div className="mt-6 max-w-5xl w-full bg-amber-50 p-6 rounded-xl space-y-4">
      <h2 className="text-xl font-bold">評分及評論</h2>

      {comments.map((cmt) => (
        <div key={cmt.id} className="bg-[#F3E8D0] p-4 rounded-lg text-sm">
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-700 font-semibold"> 
            {cmt.username} ・ {formatTime(cmt.timestamp)}
          </p>
          
        </div>
        <div className="flex items-center justify-between">
        <p className="mt-1">{cmt.text}</p>
        {user && user.uid === cmt.uid && (
            <button
              onClick={() => handleDelete(cmt.id)}
              className="bg-[#D9B87D] px-5 py-2 rounded-md hover:bg-yellow-400"
            >
              刪除
            </button>
          )}
        </div>
       
        </div>
      ))}

      <div className="flex gap-2 items-start mt-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="留下你的評論..."
          className="w-full p-2 rounded-md border border-gray-300 resize-none"
        />
        <button
        type="submit"
          onClick={handleAdd}
          className="bg-[#D9B87D] px-5 py-5 rounded-md hover:bg-yellow-400"
        >
          +Add
        </button>
      </div>
    </div>
  );
}

export default FirebaseCommentSection;
