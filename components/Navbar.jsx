"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathname = usePathname();
        
     const links = [
    { name: "home", href: "/" },
    { name: "products", href: "/products" },
  ];

    return (
        <div className="navbar shadow-sm md:px-16 bg-red-100">

            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-white">
                     {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className="text-lg">{link.name}</Link>
                    </li>
                    ))}
                </ul>
                </div>
                <Link href='/' className="flex items-center font-extrabold text-2xl gap-x-1">fiora</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                 {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className={`px-2 ${pathname === link.href ? 
                            "underline underline-offset-4 font-semibold" : ""}`}>
                            {link.name}</Link>
                    </li>
                ))}
                </ul>
            </div>
            
           <div className="navbar-end relative items-center gap-x-4 md:ml-10">
        
            <Link href="/login"
                className="btn btn-ghost btn-outline rounded-full">Login
            </Link>
            
            </div>

        </div>
    );
};

export default Navbar;