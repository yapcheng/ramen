// src/component/CategoryFilter.jsx
export default function CategoryFilter({ selected, onSelect }) {
    const categories = ["全部", "雞白湯", "豚骨", "醬油", "其他"];
  
    return (
      <div className="flex gap-1 flex-wrap font-[18px] justify-center  bg-amber-50 rounded-full p-3 md:hidden">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-2 py-1 rounded-full font-bold ${
              selected === cat
                ? "bg-[#D9B87D] text-black"
                : "bg-amber-50 text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    );
  }
  
  