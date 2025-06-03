import { NavLink } from "react-router";

export default function Navbar() {
    const navbarcontent=[
        {to:"/",label:"我的最愛"},
        {to:"/",label:"排行榜"},
        {to:"/",label:"會員登入"}
    ];
       
    return(
        <div className="flex felx-wrap justify-center">
            {navbarcontent.map(({to,label}) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                        isActive
                            ? "text-black  px-4 py-2"
                            : "hover:text-white px-4 py-2"
                    }
                >
                    {label}
                </NavLink>

                ))}
        </div>

    );
}