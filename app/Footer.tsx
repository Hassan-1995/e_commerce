import Link from "next/link";
import React from "react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Collection", href: "/collection" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
  const connectLinks = [
    { label: "Email", href: "mailto:info@example.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "WhatsApp", href: "https://wa.me/923242886139" },
  ];

  return (
    <footer className="bg-gray-950 text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Title and Subtitle */}
        <div className="md:col-span-1">
          <h2 className="text-5xl font-bold mb-2">HAS</h2>
          <p className="text-gray-400 text-justify">
            Our garments blend premium quality with modern style, offering
            unmatched comfort and durability. From t-shirts to jeans, each piece
            is crafted to elevate your wardrobe with timeless fashion.
          </p>
        </div>

        {/* Column 2: Title and List */}
        <div className="md:col-span-1 hidden md:flex flex-col ">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Title and Contacts */}
        <div className="md:col-span-1">
          <h2 className="text-lg font-semibold mb-2">Connect With Us</h2>
          <ul className="space-y-2">
            {connectLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} HAS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
