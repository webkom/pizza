"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import "./navbar.css";
import { useState } from "react";

type NavbarLink = {
  title: string;
  to: string;
};

const NavBar = () => {
  const pathname = usePathname();
  const user = localStorage.getItem("userNamePizza");
  const [links, setLinks] = useState<NavbarLink[]>([
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
      to: "./statistics",
    },
  ]);
  if (links.length < 4) {
    if (user == null) {
      setLinks([
        ...links,
        {
          title: "Login",
          to: "./login",
        },
      ]);
    } else {
      setLinks([
        ...links,
        {
          title: "Sign out from " +localStorage.getItem("userNamePizza") ,
          to: "./signout",
        },
      ]);
    }
  }

  return (
    <div className="navbar">
      {links.map((link: NavbarLink) => (
        <Link
          key={link.title}
          className={'link ${pathname === "/" ? "active" : ""}'}
          href={link.to}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
