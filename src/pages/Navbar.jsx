import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/education", label: "Education and Certificate" },
  { path: "/skill", label: "Skill" },
  { path: "/project", label: "Project" },
  { path: "/contact", label: "Contact Me" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enableDark = storedTheme ? storedTheme === "dark" : prefersDark;

    setIsDarkMode(enableDark);
    document.documentElement.classList.toggle("dark", enableDark);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDarkMode;
    setIsDarkMode(nextIsDark);
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-300/70 bg-white/75 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-950/75">
        <div className="mx-auto flex h-20 w-[min(1200px,100%-2rem)] items-center justify-between lg:w-[min(1200px,100%-4rem)]">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="font-display text-lg font-bold tracking-tight text-slate-800 transition hover:text-cyan-600 sm:text-xl dark:text-slate-50 dark:hover:text-cyan-300"
          >
            Sopheach Viseth
          </NavLink>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:text-cyan-300 sm:hidden"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <MdLightMode className="text-2xl" /> : <MdDarkMode className="text-2xl" />}
            </button>

            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:text-cyan-300 sm:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
            </button>
          </div>

          <ul className="hidden items-center gap-2 sm:flex">
            <li>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:text-cyan-300"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <MdLightMode className="text-2xl" /> : <MdDarkMode className="text-2xl" />}
              </button>
            </li>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    [
                      "rounded-xl px-4 py-2 text-sm font-semibold tracking-wide transition duration-200",
                      isActive
                        ? "bg-cyan-500/15 text-cyan-700 ring-1 ring-cyan-500/60 dark:bg-cyan-400/20 dark:text-cyan-300 dark:ring-cyan-400/60"
                        : "text-slate-700 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {isMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm dark:bg-slate-950/70 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu overlay"
        />
      )}

      <aside
        className={[
          "fixed right-0 top-0 z-50 h-screen w-[min(18rem,calc(100vw-1rem))] border-l border-slate-300 bg-white/95 p-4 pt-5 transition-transform duration-300 dark:border-slate-700 dark:bg-slate-950/95 sm:hidden sm:p-6",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display text-lg font-bold text-slate-800 dark:text-white">Navigation</h2>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-100 dark:hover:text-cyan-300"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <HiX className="text-xl" />
          </button>
        </div>

        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    "block rounded-xl px-4 py-3 text-sm font-semibold transition",
                    isActive
                      ? "bg-cyan-500/15 text-cyan-700 ring-1 ring-cyan-500/60 dark:bg-cyan-400/20 dark:text-cyan-300 dark:ring-cyan-400/50"
                      : "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800",
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
