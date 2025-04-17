function RamanList({ ramanArray }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-10 rounded-xl">
      {ramanArray.map((raman) => (
        <div key={raman.id} className="bg-amber-50 rounded-xl shadow-xl py-5">
          <img
            src={raman.image}
            alt={raman.name}
            className="w-full h-48 object-contain"
          />
          <h1 className="text-[24px] font-bold text-center">{raman.name}</h1>
          <p className="text-[16px] text-center">{raman.detail}</p>
        </div>
      ))}
    </div>
  );
}

export default RamanList;
