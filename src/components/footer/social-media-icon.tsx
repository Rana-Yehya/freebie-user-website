import Link from "next/link";
import { ReactNode } from "react";
import FacebookIcon from "@/public/facebook.svg";
import LinkedInIcon from "@/public/linkedin.svg";
import InstagramIcon from "@/public/instagram.svg";
import YoutubeIcon from "@/public/youtube.svg";
import TiktokIcon from "@/public/tiktok.svg";
import SnapchatIcon from "@/public/snapchat.svg";
import TwitterIcon from "@/public/twitter.svg";
import IconButton from "../utils/icon-button";
import CustomIcon from "../utils/custom-icon";

interface SocialMediaIconProps {
  label: string;
  href: string;
  className?: string;
  children: ReactNode;
}
function SocialMediaIcon({
  label,
  href,
  className,
  children,
}: SocialMediaIconProps) {
  return (
    <Link
      href={href}
      className={`text-slate-400 hover:text-indigo-500 transition-colors ${className}`}
      aria-label={label}
    >
      {children}
      {/* <SnapchatIcon className="w-6 h-6 primary" /> */}
    </Link>
  );
}

export function FooterSocialMediaIcon() {
  return (
    <div
      data-motion="social"
      className="flex items-center gap-4"
      style={{
        opacity: 1,
        transform: "translateY(0px)",
        filter: "blur(0px)",
      }}
    >
      <span className="text-slate-500 text-sm">Follow us:</span>

      <SocialMediaIcon href="#" label="X">
        <TwitterIcon className="w-6 h-6 footer-icon" />
      </SocialMediaIcon>
      <SocialMediaIcon href="#" label="Facebook">
        <FacebookIcon className="w-6 h-6 footer-icon" />
      </SocialMediaIcon>

      <SocialMediaIcon href="#" label="LinkedIn">
        <LinkedInIcon className="w-6 h-6 footer-icon" />
      </SocialMediaIcon>
      <SocialMediaIcon href="#" label="Instagram">
        <InstagramIcon className="w-6 h-6 footer-icon" />
      </SocialMediaIcon>

      <SocialMediaIcon href="#" label="Tiktok">
        <TiktokIcon className="w-6 h-6 footer-icon" />
      </SocialMediaIcon>
      <SocialMediaIcon href="#" label="Youtube">
        <YoutubeIcon className="w-6 h-6 footer-icon" />
      </SocialMediaIcon>
      <SocialMediaIcon href="#" label="Snapchat">
        <SnapchatIcon className="w-6 h-6 footer-icon" />
      </SocialMediaIcon>
    </div>
  );
}

export function ContactUsSocialMediaIcon() {
  return (
    <div
      data-motion="social"
      className="flex items-center gap-4"
      style={{
        opacity: 1,
        transform: "translateY(0px)",
        filter: "blur(0px)",
      }}
    >
      <SocialMediaIcon
        href="#"
        label="X"
        className="flex items-center bg-slate-200 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <TwitterIcon className="w-6 h-6 contact-icon" />
      </SocialMediaIcon>
      <SocialMediaIcon
        href="#"
        label="Facebook"
        className="flex items-center bg-slate-200 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <FacebookIcon className="w-6 h-6 contact-icon" />
      </SocialMediaIcon>

      <SocialMediaIcon
        href="#"
        label="LinkedIn"
        className="flex items-center bg-slate-200 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <LinkedInIcon className="w-6 h-6 contact-icon" />
      </SocialMediaIcon>
      <SocialMediaIcon
        href="#"
        label="Instagram"
        className="flex items-center bg-slate-200 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <InstagramIcon className="w-6 h-6 contact-icon" />
      </SocialMediaIcon>

      <SocialMediaIcon
        href="#"
        label="Tiktok"
        className="flex items-center bg-slate-200 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <TiktokIcon className="w-6 h-6 contact-icon" />
      </SocialMediaIcon>
      <SocialMediaIcon
        href="#"
        label="Youtube"
        className="flex items-center bg-slate-200 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <YoutubeIcon className="w-6 h-6 contact-icon" />
      </SocialMediaIcon>
      <SocialMediaIcon
        href="#"
        label="Snapchat"
        className="flex items-center bg-slate-200 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <SnapchatIcon className="w-6 h-6 contact-icon" />
      </SocialMediaIcon>
    </div>
  );
}
