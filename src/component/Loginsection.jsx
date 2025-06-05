import { signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import React,{useState} from 'react';
import { Link ,useNavigate} from 'react-router';
import {firebaseAuth} from '../firebase';



export default function Loginsection() {   
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleLogIn = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log("登入失敗:", error);
        }
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser)navigate("/Userpage");
    });

    return (    
        <>
        <div className="flex flex-col items-center justify-center m-20 bg-[#F3E8D0]">
            <h1 className="text-4xl font-bold mb-6">會員登入</h1>

            <form className="bg-white p-8 rounded-4xl shadow-md w-full max-w-sm">
                
            <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">電子郵件</label>
            <input 
            type="email" 
            id="email" 
            placeholder="請輸入電子郵件"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"  />
            </div>

            <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">密碼</label>
            <input 
            type="password"
            id="password" 
            placeholder="請輸入密碼" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded" />
            </div>

           <button 
            type='submit'
            onClick={handleLogIn} 
            className="w-full bg-[#D9B87D] text-white py-2 rounded hover:bg-[#C9A06B]">
            登入
            </button>

            <span className="mt-4 flex justify-center text-gray-600">還沒有帳號嗎？ 
            <Link to="/Register" className="text-[#D9B87D] hover:underline">會員註冊</Link>
            </span>

            </form>

           
        
        </div>

        </>
    );
}