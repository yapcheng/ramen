function RamanDetail({ raman }) {
  return (
    <div className="bg-[#FFF9F0] min-h-screen p-8 flex flex-col items-center">
      {/* 主卡片：圖片 + 店家資訊 */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col lg:flex-row gap-8 max-w-5xl w-full">
        {/* 左圖 */}
        <img
          src={raman.image || "/images/default-image.png"}
          alt={raman.name}
          className="w-full lg:w-[300px] h-auto object-cover rounded-xl"
        />

        {/* 右側資訊 */}
        <div className="flex flex-col justify-between gap-4 flex-1">
          {/* 店名 + 評分 */}
          <div className="flex items-center gap-2">
          <h1 className="text-4xl font-black text-neutral-800 tracking-wide">{raman.name}
          </h1>
            <span className="text-yellow-400 text-2xl">
              {"★".repeat(raman.score || 4)}
            </span>
          </div>

          {/* 資訊卡 */}
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

      {/* 餐廳介紹 */}
      <div className="mt-6 max-w-5xl w-full bg-[#F3E8D0] p-6 rounded-xl text-sm leading-loose text-gray-800">
        <p>
          <span className="font-bold">餐廳簡介：</span><br />
          {raman.introduce}
        </p>
      </div> 
    </div>
  );
}

export default RamanDetail;
