export default function Sidebar({ selected, onSelect }) {
    const menuItems = [
      "拉麵一覽",
      "雞白湯",
      "豚骨",
      "醬油",
      "其他",
     
    ];
  
    return (
      <div className="hidden md:flex flex-col col-span-3 bg-[#D9B87D] xl:col-span-2 py-10 px-5 text-center space-y-2 rounded-4xl shadow-xs">
        {menuItems.map((item) => {
          const isActive = (item === "拉麵一覽" && selected === "全部") || selected === item;
  
          return (
            <div
              key={item}
              onClick={() => onSelect(item === "拉麵一覽" ? "全部" : item)}
              className={`cursor-pointer text-[24px] font-bold leading-snug ${
                isActive ? "underline" : ""
              } text-black`}              
            >
              {item}
            </div>
          );
        })}
      </div>
    );
  }
  