import { FaAlignJustify } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, Transition } from '@headlessui/react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="flex items-center justify-between w-full h-full px-3 xl:px-10">
        <div className="flex items-center">
          <Link to="home" smooth={true} duration={500}>
            <h1 className="mr-4 text-3xl font-bold sm:text-4xl cursor-pointer">
              Chatty
            </h1>
          </Link>
          <ul className="hidden md:flex">
            <Link to="home" smooth={true} duration={500}>
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <li className="cursor-pointer">About</li>
            </Link>
            <Link to="support" smooth={true} duration={500}>
              <li className="cursor-pointer">Support</li>
            </Link>
            <Link to="feature" smooth={true} duration={500}>
              <li className="cursor-pointer">feature</li>
            </Link>
            <Link to="testimonials" smooth={true} duration={500}>
              <li className="cursor-pointer">Feedback</li>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <li className="cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="hidden pr-4 md:flex">
          <button className="mr-4 text-slate-600 bg-transparent border-none">
            Sign In
          </button>
          <button className="xl:px-8 md:px-4 py-3 transition-all">
            Sign Up
          </button>
        </div>
        <div
          className="mr-4 md:hidden"
          onClick={() => setNav(prevState => !prevState)}
        >
          <Menu as="nav">
            {({ open }) => (
              <>
                <Menu.Button
                  as="div"
                  className="cursor-pointer select-none text-2xl"
                >
                  {nav && open ? <FaTimes /> : <FaAlignJustify />}
                </Menu.Button>

                <Transition
                  as="ul"
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  className="absolute bg-zinc-200 w-full px-8 left-0 top-[80px]"
                >
                  <Link
                    onClick={() => setNav(false)}
                    to="home"
                    smooth={true}
                    duration={500}
                  >
                    <li className="w-full border-b-2 border-zinc-300 cursor-pointer">
                      Home
                    </li>
                  </Link>
                  <Link
                    onClick={() => setNav(false)}
                    to="about"
                    smooth={true}
                    duration={500}
                  >
                    <li className="w-full border-b-2 border-zinc-300 cursor-pointer">
                      About
                    </li>
                  </Link>
                  <Link
                    onClick={() => setNav(false)}
                    to="support"
                    smooth={true}
                    duration={500}
                  >
                    <li className="w-full border-b-2 border-zinc-300 cursor-pointer">
                      Support
                    </li>
                  </Link>
                  <Link
                    onClick={() => setNav(false)}
                    to="feature"
                    smooth={true}
                    duration={500}
                  >
                    <li className="w-full border-b-2 border-zinc-300 cursor-pointer">
                      Feature
                    </li>
                  </Link>
                  <Link
                    onClick={() => setNav(false)}
                    to="testimonials"
                    smooth={true}
                    duration={500}
                  >
                    <li className="w-full border-b-2 border-zinc-300 cursor-pointer">
                      Feedback
                    </li>
                  </Link>
                  <Link
                    onClick={() => setNav(false)}
                    to="contact"
                    smooth={true}
                    duration={500}
                  >
                    <li className="w-full border-b-2 border-zinc-300 cursor-pointer">
                      Contact
                    </li>
                  </Link>

                  <div className="flex flex-col my-4">
                    <button className="px-8 py-3 mb-4 text-slate-600 bg-transparent">
                      Sign In
                    </button>
                    <button className="px-8 py-3">Sign Up</button>
                  </div>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
