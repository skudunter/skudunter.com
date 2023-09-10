import { Link, Outlet, useLocation } from "react-router-dom";

function determineCaption(path) {
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
  const location = useLocation();
  return (
    <>
      <header className="py-4 sm:py-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="text-2xl sm:text-4xl font-semibold">
            {determineCaption(location.pathname)}
          </Link>
          <nav className="hidden sm:block">
            <ul className="flex justify-center space-x-6">
              <li
                className={`transition ease-in-out hover:text-secondary  duration-500  ${
                  location.pathname === "/" ? "underline" : ""
                }`}
              >
                <Link className="text-lg sm:text-xl" to="/">
                  Home
                </Link>
              </li>
              <li
                className={`transition ease-in-out hover:text-secondary  duration-500  ${
                  location.pathname === "/portfolio" ||
                  location.pathname === "/portfolio/"
                    ? "underline"
                    : ""
                }`}
              >
                <Link className="text-lg sm:text-xl" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li
                className={`transition ease-in-out hover:text-secondary  duration-500  ${
                  location.pathname === "/about" ||
                  location.pathname === "/about/"
                    ? "underline"
                    : ""
                }`}
              >
                <Link className="text-lg sm:text-xl" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default NavigationBar;
