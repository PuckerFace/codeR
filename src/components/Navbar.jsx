import logo from '../assets/images/logo.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img
              className="mr-2 "
              src={logo}
              alt="logo"
              width={40}
              height={20}
            />
            <span className="text-xl tracking-tight ">codeR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-11">
            <a href="#">Features</a>
            <a href="#">Workflow</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials</a>
          </ul>
          <div className="hidden lg:flex justify-center space-x-11 items-center">
            <a href="#" className="py-2 px-4 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800  py-2 px-5 border rounded-md border-transparent"
            >
              Sign Up
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="fixed right-0 z-20 p-12  border-neutral-900 w-full flex flex-col justify-center items-center lg:hidden text-center backdrop-blur-lg bg-black/80">
            <div className=" px-4 mx-auto relative text-sm">
              <ul>
                <li className="py-4">
                  <a href="#">Features</a>
                </li>
                <li className="py-4">
                  <a href="#">Workflow</a>
                </li>
                <li className="py-4">
                  <a href="#">Pricing</a>
                </li>
                <li className="py-4">
                  <a href="#">Testimonials</a>
                </li>
              </ul>
              <div className="flex space-x-6">
                <a href="#" className="py-2 px-4 border rounded-md">
                  Sign In
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-600 to-orange-800  py-2 px-5 border rounded-md"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
