
import { Link } from "react-router";

function RamanList({ ramanArray }) {

  return (
    
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-10 rounded-xl ">
        {ramanArray.map((raman) => (
          
        <div className=" bg-amber-50 rounded-4xl shadow-xl py-5">
               <Link to={`/raman/${raman.id}`} >
               <img src={raman.image ||"../public/images/default-image.png" } alt={raman.name} className="w-full h-48 object-contain"/>
              </Link>
                
                <h1 className="text-[24px] font-bold text-center">{raman.name}</h1>
                <p className=" flex text-[16px] items-center justify-center texrt-center mt-1 mb-3">{raman.detail}</p>
                <Link to={`/raman/${raman.id}`} >
                <p className=" flex text-[12px] items-center justify-center texrt-center border-2 mx-35 border-[#D9B87D] text-[#D9B87D]">More</p>
                </Link>
            </div>
          
        ))}
   </div>
  );
}

export default RamanList;
