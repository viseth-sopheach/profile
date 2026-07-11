import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTelegram,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/visethsopheach",
    icon: FaFacebookSquare,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/viseth_sopheach/",
    icon: FaInstagramSquare,
  },
  { label: "Telegram", href: "https://t.me/Viseth_Sopheach", icon: FaTelegram },
  { label: "X", href: "https://x.com/VisethSopheach", icon: FaSquareXTwitter },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="content-wrap flex flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {currentYear} Sopheach Viseth. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-xl text-slate-500 dark:text-slate-400">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="transition hover:text-indigo-600 dark:hover:text-indigo-300"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
