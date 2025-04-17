function RamanDetail({raman}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center">
        {/* 左側：產品圖片（佔6/24） */}
        <div className="lg:col-span-6 lg:col-start-3">
          <img
            alt={raman.name}
            className="w-full h-96 object-cover object-center rounded-md"
            src={raman.image||"../public/images/default-image.png"}
          />
        </div>
        </div>
  

    );
}
export default RamanDetail;