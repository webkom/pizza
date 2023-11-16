'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

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
            to: "./#"
        },
    ];

    return (  
        <div className="navbar">
            {links.map((link: NavbarLink)=> (
                <Link className={'link ${pathname === "/" ? "active" : ""}'} href='/'>
                    {link.title}
                </Link>
            ))}
        </div>
    )
}

export default NavBar