export default function Sidebar({ selected, onSelect }) {
    const menuItems = [
      "拉麵一覽",
      "雞白湯",
      "豚骨",
      "醬油",
      "其他",
      "排行榜",
      "我的最愛",
      "會員登入"
    ];
  
    return (
      <div className="hidden md:flex flex-col col-span-3 bg-[#C68E2E] xl:col-span-2 py-2 px-15 text-center space-y-2">
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
  