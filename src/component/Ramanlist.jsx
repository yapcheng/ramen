import Raman from "../json/raman.json";

function RamanList() {

  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-10 rounded-xl ">
        {Raman.map(Raman => ( 
            <div className=" bg-amber-50 rounded-xl shadow-xl py-5">
                <img src={Raman.image} alt={Raman.name}  className="w-full h-48 object-contain"/>
                <h1 className="text-[24px] font-bold text-center">{Raman.name}</h1>
                <p className=" flex text-[16px] items-center justify-center texrt-center">{Raman.detail}</p>
            </div>
          
        ))}
   </div>
  );
}
export default RamanList;