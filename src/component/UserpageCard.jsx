import React, { useState } from "react";
import { useNavigate } from "react-router";
import { firebaseAuth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function UserpageCard() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      navigate("/Login");
    }
  });

  return (
    <div className=" bg-[#F3E8D0] flex items-center justify-center px-4">
  <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full text-center space-y-6">
    {/* 標題 */}
    <h1 className="text-3xl font-bold text-[#3B3B3B]">會員介面</h1>

    {/* 使用者資訊 */}
    <div>
      <p className="text-xl font-semibold text-[#555]">歡迎來到會員介面！</p>
      <p className="text-lg text-[#777]">{user?.email}</p>
    </div>

    {/* 登出按鈕 */}
    <button
      onClick={() => {
        signOut(firebaseAuth);
      }}
      className="w-full bg-[#D9B87D] text-white py-3 text-lg font-semibold rounded hover:bg-[#C9A06B] transition duration-200"
    >
      登出
    </button>
  </div>
</div>

  
  );
}