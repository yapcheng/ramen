function RamanDetail({raman}) {
    return (
      <>
     
        <div className="grid grid-cols-12 lg:grid-cols-24 gap-x-8 gap-y-0 justify-center">
        {/* 左側：產品圖片（佔6/24） */}
        <div className=" col-span-10 col-start-2 mt-5 lg:col-span-8 lg:col-start-3">
          <img
            alt={raman.name}
            className="w-full h-auto max-h-96 object-contain object-center rounded-md "
            src={raman.image ||"../public/images/default-image.png"}
          />
        </div>

        <div className="  justify-center  col-span-10 col-start-2 mb-5 bg-[#D9B87D] rounded-md p-5 lg:col-span-10 lg:col-start-12 lg:my-10 self-center ">
          <div className="flex  flex-col  justify-center">
                <h1 className="flex items-baseline-last justify-center text-4xl pb-5">
                    <span>{raman.name}</span>
                <span className=" ml-4  text-[14px] ">評分：{raman.score}顆星</span>
               </h1>

           <div className="bg-[#F3E8D0] rounded-md p-5 mx-3">
           <p className="text-[14px] text-center">
            <span className="font-bold">電話：</span>
            {raman.phone}
           </p>
           <p className="text-[14px] text-center">
            <span className="font-bold">營業時間：</span>
            {raman.opening_hours}
           </p>
           <div className="text-center">
           {raman.address.split("\n").map((branch, index) => (
           <p key={index} className="text-[14px]">
          {index === 0 && <span className="font-bold">地址：</span>}
          {branch}
           </p>
            ))}
           </div>
           <p className="text-[14px] text-center">
              <span className="font-bold">Google 地圖：</span>
              <a
                href={raman.map}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline hover:text-[#D9B87D]"
              >
               查看地圖
              </a>
            
            
            </p>
            </div>
            </div>
        </div>

        <div className=" justify-center col-span-10 col-start-2 mb-5 bg-[#D9B87D] rounded-md p-5 lg:col-span-19 lg:col-start-3 lg:my-10 self-start" >
            <p className="text-[14px] text-center">
            <span className="font-bold">餐廳簡介：</span>
            <br />
            {raman.introduce}
           </p>
        </div>
        </div>

       
  </>
    );
}
export default RamanDetail;