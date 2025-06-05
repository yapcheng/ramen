import{ useState } from "react";
import { Link } from "react-router";

function RamanList({ ramanArray }) {
  const[showall, setShowAll] = useState(false);
  const Displayraman =  showall ? ramanArray : ramanArray.slice(0, 6);

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-10 rounded-xl ">
        {Displayraman.map((raman) => (
          
          <div className="bg-amber-50 rounded-3xl shadow-xl py-5 px-2 w-full md:max-w-[480px] mx-auto">

               <Link to={`/raman/${raman.id}`} >
               <img src={raman.image ||"../public/images/default-image.png" } alt={raman.name} className="w-full h-48 object-contain"/>
              </Link>
                
                <h1 className="text-[24px] font-bold text-center">{raman.name}</h1>
                <p className=" flex text-[16px] items-center justify-center text-center mt-1 mb-3">{raman.detail}</p>
                <Link to={`/raman/${raman.id}`} >
                <p className=" flex text-[12px] bg mx-15 items-center  justify-center texrt-center border-1 md:mx-10  lg:mx-15 rounded-2xl bg-[#D9B87D] text-black xl:mx-25">More</p>
                </Link>
            </div>
          
        ))}
   </div>
   {ramanArray.length > 6 && (
   <div className="text-center mt-3">
    <button
          onClick={() => setShowAll(!showall)}
          className="bg-[#D9B87D] text-white px-4 py-2 rounded-full mb-6"
        >
          {showall ? "太多了吃不下" : "給我拉麵"}
        </button>
   </div> )}

    </>
   
   
  );
}

export default RamanList;
