"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

    return (
        <div className="flex my-4 items-center justify-between py-4 ">
            {/* Logo and Brand Name */}
            <Link href="/" className="flex gap-2">
                <h1 className="font-bold text-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-2">
                    TOWFIQUE
                </h1>

            </Link>

            {/* Links for md and above */}
            <div className="hidden lg:flex gap-4 text-lg">
                {[
                    { href: "/", label: "HOME" },
                    { href: "/about", label: "ABOUT ME" },
                    { href: "/contact", label: "CONTACT" },
                    { href: "/projects", label: "PROJECTS" },
                    { href: "/feedback", label: "FEEDBACK" },
                ].map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`${pathname === link.href
                                ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-lg font-bold border-b-2 border-transparent"

                                : "text-gray-600"
                            } hover:text-blue-500 transition`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Menu Icon for smaller screens */}
            <button
                className="block lg:hidden text-blue-800"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            {/* Dropdown Menu for smaller screens */}
            {menuOpen && (
        <div className="absolute top-16 right-4 w-48 bg-white shadow-md rounded-md p-4 lg:hidden">
          {[
            { href: "/", label: "HOME" },
            { href: "/about", label: "ABOUT ME" },
            { href: "/contact", label: "CONTACT" },
            { href: "/projects", label: "PROJECTS" },
            { href: "/feedback", label: "FEEDBACK" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-blue-800 font-bold"
                  : "text-gray-600"
              } hover:text-blue-500 transition block mb-2`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
        </div>
    );
}
