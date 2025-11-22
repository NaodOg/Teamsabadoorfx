"use client";
import React from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Dribbble,
  Globe,
} from "lucide-react";
import {FooterBackgroundGradient} from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";

function HoverFooter() {
  // Footer link data
  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Equipment Rental", href: "/products" },
        { label: "SFX Machines", href: "/products" },
        { label: "Laser System", href: "/products" },
        { label: "Event Planning", href: "/products" },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Phone size={18} className="text-yellow-400" />,
      text: "+251 991259465",
      href: "tel:+251991259465",
    },
    {
      icon: <Mail size={18} className="text-yellow-400" />,
      text: "teamsabadoorfx@gmail.com",
      href: "mailto:teamsabadoorfx@gmail.com",
    },
    {
      icon: <MapPin size={18} className="text-yellow-400" />,
      text: "Addis Ababa, Ethiopia",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Instagram size={20} className="text-yellow-400" />, label: "Instagram", href: "#" },
    { icon: <Image src="/tiktok.png" alt="TikTok" width={20} height={20} style={{filter: 'hue-rotate(20deg) saturate(2) brightness(1.2)'}}/>, label: "TikTok", href: "#" },
    { icon: <Facebook size={20} className="text-yellow-400" />, label: "Facebook", href: "#" },
  ];

  return (
    <footer className="bg-black relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-16 pb-12 text-left sm:text-center sm:items-center sm:justify-items-center">
          {/* Brand section */}
          <div className="flex flex-col space-y-4 sm:items-center sm:text-center">
            <div className="sm:justify-center">
              <span className="text-white text-3xl font-bold hidden sm:block">TeamsabadoorFX.store</span>
              <span className="text-white text-3xl font-bold sm:hidden">TeamsabadoorFX</span>
            </div>
            <p className="text-sm leading-relaxed text-white sm:text-center">
              Professional event planning and premium concert equipment rental services.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="sm:items-center sm:text-center">
              <h4 className="text-white text-xl md:text-2xl font-semibold mb-6 sm:text-center">
                {section.title}
              </h4>
              <ul className="space-y-3 sm:text-center">
                {section.links.map((link) => (
                  <li key={link.label} className="relative sm:text-center">
                    <a
                      href={link.href}
                      className="text-white hover:text-yellow-400 transition-colors sm:text-center"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div className="sm:items-center sm:text-center">
            <h4 className="text-white text-xl md:text-2xl font-semibold mb-6 sm:text-center">
              Contact Us
            </h4>
            <ul className="space-y-4 lg:space-y-3 text-left sm:text-center">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex lg:flex-row lg:items-center lg:space-x-3 sm:justify-center sm:flex-col sm:items-center sm:space-x-0 sm:space-y-1">
                  <span className="lg:mt-0 flex-shrink-0">
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white hover:text-yellow-400 transition-colors mt-1 sm:mt-0"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-white hover:text-yellow-400 transition-colors mt-1 sm:mt-0">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Section - visible only on small screens */}
        <div className="flex justify-center space-x-8 pt-8 border-t border-gray-800 pt-12 sm:pt-8 lg:hidden">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="text-white hover:text-yellow-400 transition-colors p-2 rounded-full hover:bg-gray-800"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-96 -mt-48 -mb-24">
        <TextHoverEffect text="SABADOOR" className="z-50 w-full h-full" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;