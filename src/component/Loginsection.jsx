import { db } from "../firebase";
import {
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp,
  } from "firebase/firestore";

export  default function Loginsection() {
    
  return (
    <div className="flex flex-col items-center justify-center m-20 bg-[#F3E8D0]">
      <h1 className="text-4xl font-bold mb-6">會員登入</h1>

      <form className="bg-white p-8 rounded-4xl shadow-md w-full max-w-sm">

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">使用者名稱</label>
          <input type="text" id="username" className="w-full px-3 py-2 border rounded" />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">密碼</label>
          <input type="password" id="password" className="w-full px-3 py-2 border rounded" />
        </div>

        <button type="submit" className="w-full bg-[#D9B87D] text-white py-2 rounded hover:bg-[#C9A06B]">登入</button>
      </form>
    </div>
  );
}