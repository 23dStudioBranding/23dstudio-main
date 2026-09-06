"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import {
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import { FaBehance, FaEnvelope, FaPinterest, FaXTwitter } from "react-icons/fa6";
import ButtonN from "./ButtonN";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const isActiveLink = (path) => {
        if (path === "/services" && pathname.startsWith("/services/work")) {
            return false;
        }
        return pathname === path;
    };

    const links = [
        { to: "/", label: "Home" },
        { to: "/services", label: "Services" },
        { to: "/work", label: "Work" },
        { to: "/about", label: "About Us" },
        { to: "/career", label: "Career" },
    ];

    const socials = [
        { Icon: FaEnvelope, href: "mailto:gauravduse@23dstudio.com", color: "hover:text-zinc-800" },
        { Icon: FaLinkedin, href: "https://www.linkedin.com/company/23dstudio/", color: "hover:text-blue-500" },
        { Icon: FaXTwitter, href: "https://x.com/23DStudio", color: "hover:text-gray-200" },
        { Icon: FaFacebook, href: "https://www.facebook.com/people/23dstudio/61575036742936/", color: "hover:text-blue-700" },
        { Icon: FaInstagram, href: "https://www.instagram.com/23dstudio__/", color: "hover:text-pink-500" },
        { Icon: FaPinterest, href: "https://in.pinterest.com/23dstudio/", color: "hover:text-red-500" },
        { Icon: FaBehance, href: "https://www.behance.net/23dstudio_", color: "hover:text-gray-800" },
        { Icon: FaYoutube, href: "https://www.youtube.com/@23D.DesignStudio", color: "hover:text-red-500" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`w-full fixed top-0 left-0 z-40 px-6 md:px-10 py-3 flex justify-between bg-black/40 items-center font-[bituml] tracking-wide transition-all duration-500
        ${scrolled
                    ? "md:bg-black/40 md:backdrop-blur-xs md:shadow-sm"
                    : "md:bg-black/20"
                }`}
        >
            {/* Logo */}
            <div
                onClick={() => router.push("/")}
                className="md:w-15 md:h-14 w-13 h-12 bg-center bg-cover bg-[url('/images/Logoww.png')] cursor-pointer"
            ></div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex md:gap-5 lg:gap-0 w-1/2 md:w-fit lg:w-1/2 cursor-pointer h-fit text-md items-center justify-between">
                {links.map((link) => {
                    const active = isActiveLink(link.to);

                    return (
                        <Link key={link.to} href={link.to} className="group relative overflow-hidden">
                            <span className="relative block">
                                <span
                                    className={`block whitespace-nowrap transition-opacity duration-300 ${active
                                        ? "text-[var(--color-animate)] font-bold"
                                        : "text-[var(--color-third)]"
                                        } group-hover:opacity-0`}
                                >
                                    {link.label}
                                </span>

                                <span className="absolute left-0 top-0 flex whitespace-nowrap">
                                    {link.label.split("").map((char, i) => (
                                        <span
                                            key={i}
                                            className={`inline-block translate-y-full opacity-0 transition-all duration-300 
                                                group-hover:translate-y-0 group-hover:opacity-100 ${active
                                                ? "text-[var(--color-animate)] bg-white font-bold"
                                                : "group-hover:text-[var(--color-animate)] bg-white"
                                                }`}
                                            style={{ transitionDelay: `${i * 60}ms` }}
                                        >
                                            {char}
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </Link>
                    );
                })}
                <Link href="/contact">
                    <ButtonN text="Contact Us" color="white" size="md" />
                </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-3xl text-white transition-transform duration-500"
                onClick={() => setMenuOpen(true)}
            >
                <HiMenu />
            </button>

            
            {/* Mobile Drawer (no relative + no extra absolute overlay) */}
            <div
                className={`fixed top-0 right-0 w-full sm:w-1/2 h-full z-50
              transform transition-transform duration-500 ease-in-out
              ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.55)), url("/images/navbar/2.webp")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Header — close button placed with flex (no absolute) */}
                <div className="flex justify-end p-4">
                    <button
                        aria-label="Close menu"
                        onClick={() => setMenuOpen(false)}
                        className="text-3xl text-white focus:outline-none"
                    >
                        <HiX />
                    </button>
                </div>

                {/* Menu Links */}
                <nav className="flex flex-col items-center mt-32 gap-6 text-2xl font-medium text-white">
                    {links.map((link) => (
                        <Link
                            key={link.to}
                            href={link.to}
                            onClick={() => setMenuOpen(false)}
                            className={`${isActiveLink(link.to) ? "text-[var(--color-animate)]  font-bold" : "font-normal"
                                } hover:text-[var(--color-animate)] transition`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-4">
                        <ButtonN text="Contact Us" color="white" variant="primary" />
                    </Link>
                </nav>

                {/* Social Icons */}
                <div className="flex justify-center  gap-6 p-6 text-2xl text-white">
                    {socials.map(({ Icon, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-300"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>


        </div>
    );
}
