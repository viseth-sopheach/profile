import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/education", label: "Education" },
  { path: "/skill", label: "Skills" },
  { path: "/project", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const iconButtonClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-500/50 dark:hover:text-indigo-300";

// Reads the user's saved theme, falling back to their OS preference.
function getInitialDarkMode() {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) return storedTheme === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

  // Keep the <html> class in sync whenever the theme state changes.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // Prevent background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const nextIsDark = !isDarkMode;
    setIsDarkMode(nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  };

  const navLinkClass = ({ isActive }) =>
    [
      "rounded-lg px-3.5 py-2 text-sm font-medium transition",
      isActive
        ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white",
    ].join(" ");

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/85">
        <div className="mx-auto flex h-16 w-[min(1200px,100%-2rem)] items-center justify-between lg:w-[min(1200px,100%-4rem)]">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="font-display text-lg font-bold tracking-tight text-slate-900 transition hover:text-indigo-600 dark:text-white dark:hover:text-indigo-300"
          >
            Sopheach Viseth
          </NavLink>

          <ul className="hidden items-center gap-1 sm:flex">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className={navLinkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className={iconButtonClass}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <MdLightMode className="text-lg" />
              ) : (
                <MdDarkMode className="text-lg" />
              )}
            </button>

            <button
              type="button"
              className={`${iconButtonClass} sm:hidden`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMenuOpen ? (
                <HiX className="text-xl" />
              ) : (
                <HiMenuAlt3 className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm sm:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu overlay"
        />
      )}

      <aside
        id="mobile-nav"
        className={[
          "fixed right-0 top-0 z-50 h-screen w-[min(18rem,calc(100vw-1rem))] border-l border-slate-200 bg-white p-5 pt-6 transition-transform duration-300 dark:border-slate-800 dark:bg-slate-950 sm:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
            Menu
          </h2>
          <button
            type="button"
            className={iconButtonClass}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <HiX className="text-lg" />
          </button>
        </div>

        <ul className="space-y-1.5">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    "block rounded-lg px-4 py-3 text-sm font-medium transition",
                    isActive
                      ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default Navbar;
