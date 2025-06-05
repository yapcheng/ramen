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
    <div className="grid grid-rows-[auto_1fr_auto] bg-[#F3E8D0] min-h-screen">
        <h1 className="text-center text-2xl font-bold mt-4">會員介面</h1>
        <div className="flex justify-center items-center h-full">
            <p className="text-lg">歡迎來到會員介面！{user?.email}</p>
       
        </div>
        <button 
        onClick={() => {signOut(firebaseAuth); }}
        className="w-full bg-[#D9B87D] text-white py-2 rounded hover:bg-[#C9A06B]">
        登出    
        </button>
        
    </div>
  );
}