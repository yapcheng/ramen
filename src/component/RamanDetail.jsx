import { useDispatch, useSelector } from "react-redux";
import { addComment } from "@/redux/commentSlice";
import { useState } from "react";
import CommentSection from "@/component/CommentSection";
import Favoritebtn from "@/component/Favoritebtn";

function RamanDetail({ raman }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comments);
  const [newComment, setNewComment] = useState("");

  const handleAdd = () => {
    if (newComment.trim() !== "") {
      dispatch(addComment(newComment));
      setNewComment("");
    }
  };

  return (
    <div className="bg-[#F3E8D0] min-h-screen p-8 flex flex-col items-center">
      
      <div className="bg-amber-50 rounded-xl shadow-lg p-6 flex flex-col lg:flex-row gap-8 max-w-5xl w-full">
       
        <img
          src={raman.image || "/images/default-image.png"}
          alt={raman.name}
          className="w-full lg:w-[300px] h-auto object-cover rounded-xl"
        />

       
        <div className="flex flex-col justify-between gap-4 flex-1">
          
          <div className="flex items-center gap-2">
          <h1 className="text-4xl font-black text-neutral-800 tracking-wide">{raman.name}</h1>
            <span className="text-yellow-400 text-2xl">
              {"★".repeat(raman.score || 4)}
            </span>
           
          </div>

          
          <div className="bg-[#F3E8D0] w-full h-full text-sm text-black p-4 rounded-xl space-y-2 leading-relaxed">
            <p><span className="font-bold">電話：</span>{raman.phone}</p>
            <p><span className="font-bold">營業時間：</span>{raman.opening_hours}</p>
            <div>
              <span className="font-bold">地址：</span>
              {raman.address?.split("\n").map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
            <p>
              <span className="font-bold">Google 地圖：</span>
              <a
                href={raman.map}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                查看地圖
              </a>
            </p>
          </div>
        </div>
      </div>

      
      <div className="mt-6 max-w-5xl w-full bg-amber-50 p-6 rounded-xl text-sm leading-loose text-gray-800">
        <p>
          <span className="font-bold">餐廳簡介：</span><br />
          {raman.introduce}
        </p>
      </div> 
      <div className="mt-6 max-w-5xl w-full">
        <CommentSection ramanId={raman.id} />
        <div className="flex justify-end mt-4">
         <Favoritebtn ramanId={raman.id} />
        </div>
      </div>
    </div>
    
   
   
    );
}

export default RamanDetail;
