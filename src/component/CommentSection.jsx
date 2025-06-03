import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

function FirebaseCommentSection({ ramanId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "ramen", ramanId, "comments"),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentList = snapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.data().text,
      }));
      setComments(commentList);
    });

    return () => unsubscribe();
  }, [ramanId]);

  const handleAdd = async () => {
    if (newComment.trim() !== "") {
      await addDoc(collection(db, "ramen", ramanId, "comments"), {
        text: newComment,
        timestamp: serverTimestamp(),
      });
      setNewComment(""); // ✅ 確保清除輸入框
    }
  };

  return (
    <div className="mt-6 max-w-5xl w-full bg-amber-50 p-6 rounded-xl space-y-4">
      <h2 className="text-xl font-bold">評分及評論</h2>

      {comments.map((cmt) => (
        <div key={cmt.id} className="bg-[#F3E8D0] p-4 rounded-lg text-sm">
          {cmt.text}
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
          onClick={handleAdd}
          className="bg-[#D9B87D] px-4 py-5 rounded-md hover:bg-yellow-400"
        >
          +Add
        </button>
      </div>
    </div>
  );
}

export default FirebaseCommentSection;
