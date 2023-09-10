"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function determineCaption(path: string) {
  if (
    path === "/" ||
    path === "/about" ||
    path === "/about/" ||
    path === "/portfolio" ||
    path === "/portfolio/" ||
    path.includes("portfolio")
  ) {
    return "Skudunter LLC";
  } else {
    return "404 ERROR";
  }
}
function NavigationBar() {
  const location = usePathname();
  return (
    <>
      <header className="py-4 sm:py-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="text-2xl sm:text-4xl font-semibold">
            {determineCaption(location)}
          </Link>
          <nav className="hidden sm:block">
            <ul className="flex justify-center space-x-6">
              <li
                className={`transition ease-in-out hover:text-secondary  duration-500  ${
                  location === "/" ? "underline" : ""
                }`}
              >
                <Link className="text-lg sm:text-xl" href="/">
                  Home
                </Link>
              </li>
              <li
                className={`transition ease-in-out hover:text-secondary  duration-500  ${
                  location === "/portfolio" || location === "/portfolio/"
                    ? "underline"
                    : ""
                }`}
              >
                <Link className="text-lg sm:text-xl" href="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li
                className={`transition ease-in-out hover:text-secondary  duration-500  ${
                  location === "/about" || location === "/about/"
                    ? "underline"
                    : ""
                }`}
              >
                <Link className="text-lg sm:text-xl" href="/about">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavigationBar;