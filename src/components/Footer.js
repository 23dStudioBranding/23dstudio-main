"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaPinterest,
  FaBehance,
  FaEnvelope,
} from "react-icons/fa6";

import PrivacyPolicyModal from "./Privacy";
import TermsAndConditions from "./Terms";

export default function Footer() {
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);

  return (
    <footer className="w-full font-[bituml] mt-5 md:mt-10 px-6 py-10">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          className="object-contain"
          src="/images/Logob.png"
          alt="logo"
          width={80}
          height={80}
        />
      </div>

      {/* Tagline */}
      <p className="text-center text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
        We transform visionary concepts into impactful realities, combining
        innovation with results-driven strategy at{" "}
        <span className="font-bold text-white">23D Studio</span>.
      </p>

      {/* Contact & Careers */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
        <Link
          href="/career"
          className="cursor-pointer hover:scale-125 transition"
        >
          Careers
        </Link>
        <div className="text-center sm:text-right space-y-1 text-sm sm:text-base">
          <p className="font-semibold text-white">Nashik, Maharashtra, India</p>
          <p>+91 7620703298 &nbsp; | &nbsp; +91 9021507499</p>
          <p className="break-all">www.23dstudio.com</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-5 text-xl sm:text-2xl mb-6">
        {[
          {
            Icon: FaEnvelope,
            href: "mailto:gauravduse@23dstudio.com",
            color: "hover:text-zinc-800",
          },
          {
            Icon: FaLinkedin,
            href: "https://www.linkedin.com/company/23dstudio/",
            color: "hover:text-blue-500",
          },
          {
            Icon: FaXTwitter,
            href: "https://x.com/23DStudio",
            color: "hover:text-gray-900",
          },
          {
            Icon: FaFacebook,
            href: "https://www.facebook.com/people/23dstudio/61575036742936/",
            color: "hover:text-blue-700",
          },
          {
            Icon: FaInstagram,
            href: "https://www.instagram.com/23dstudio__/",
            color: "hover:text-pink-500",
          },
          {
            Icon: FaPinterest,
            href: "https://in.pinterest.com/23dstudio/",
            color: "hover:text-red-500",
          },
          {
            Icon: FaBehance,
            href: "https://www.behance.net/23dstudio_",
            color: "hover:text-gray-800",
          },
          {
            Icon: FaYoutube,
            href: "https://www.youtube.com/@23D.DesignStudio",
            color: "hover:text-red-500",
          },
        ].map(({ Icon, href, color }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${color} transition-transform transform hover:scale-125`}
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-700 pt-4">
        <h3 className="text-center sm:text-end text-xs sm:text-sm text-gray-400">
          <button
            onClick={() => setOpenPrivacy(true)}
            className="hover:underline hover:text-gray-800 transition cursor-pointer"
          >
            Privacy Policy
          </button>
          &nbsp; | &nbsp;
          <button
            onClick={() => setOpenTerms(true)}
            className="hover:underline hover:text-gray-800 transition cursor-pointer"
          >
            Terms & Conditions
          </button>
        </h3>
      </div>

      {/* Inject Modal */}
      {openPrivacy && (
        <PrivacyPolicyModal open={openPrivacy} setOpen={setOpenPrivacy} />
      )}
      {openTerms && (
        <TermsAndConditions open={openTerms} setOpen={setOpenTerms} />
      )}
    </footer>
  );
}
