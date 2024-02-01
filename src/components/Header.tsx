'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import "./navbar.css" 

type NavbarLink = {
    title: string
    to: string
};

const NavBar = () => {

    const pathname = usePathname()

    const links: NavbarLink[] = [
        {
            title: "Pizza",
            to: "./#",
        },
        {
            title: "Calculator",
            to: "./#",
        },
        {
            title: "Statistics",
            to: "./statistics"
        },
        {
            title: "Login",
            to: "./login"
        },
    ];

    return (  
        <div className="navbar">
            {links.map((link: NavbarLink)=> (
                <Link key={link.title} className={'link ${pathname === "/" ? "active" : ""}'} href={link.to}>
                    {link.title}
                </Link>
            ))}
        </div>
    )
}

export default NavBar