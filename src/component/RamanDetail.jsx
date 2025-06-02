import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../redux/commentSlice";
import { useState } from "react";



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
          <h1 className="text-4xl font-black text-neutral-800 tracking-wide">{raman.name}
          </h1>
            <span className="text-yellow-400 text-2xl">
              {"★".repeat(raman.score || 4)}
            </span>
          </div>

          
          <div className="bg-[#F3E8D0] text-sm text-black p-4 rounded-xl space-y-2 leading-relaxed">
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
      <div className="mt-6 max-w-5xl w-full bg-amber-50 p-6 rounded-xl space-y-4">
        <h2 className="text-xl font-bold">評分及評論</h2>

        {comments.map((cmt, idx) => (
          <div key={idx} className="bg-[#F3E8D0] p-4 rounded-lg text-sm">
            {cmt}
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
    
    </div>
   
    );
}

export default RamanDetail;
