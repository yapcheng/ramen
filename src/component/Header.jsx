import { Link } from "react-router" 


function Header() {
  return (
    <header className="bg-[#D9B87D] h-[80px] flex items-center justify-between px-4 md:px-8 shadow-md">
  
      <Link to="/">
      <h1 className="text-black text-6xl flex justify-center items-center h-[80px] font-[Monoton] md:justify-start ml-8 ">RAMEN</h1>
      </Link>
    
      
    
    </header>
  )
}
export default Header