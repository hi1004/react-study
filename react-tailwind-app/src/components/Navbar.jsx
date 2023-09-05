import { FaAlignJustify } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="flex items-center justify-between w-full h-full px-3 xl:px-10">
        <div className="flex items-center">
          <h1 className="mr-4 text-3xl font-bold sm:text-4xl">Chatty</h1>
          <ul className="hidden md:flex">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Support</li>
            </a>
            <a href="#">
              <li>Feature</li>
            </a>
            <a href="#">
              <li>Feedback</li>
            </a>
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
          {nav ? (
            <FaTimes className="cursor-pointer select-none text-2xl" />
          ) : (
            <FaAlignJustify className="cursor-pointer select-none text-2xl" />
          )}
        </div>
      </div>
      <ul className={nav ? 'absolute bg-zinc-200 w-full px-8' : 'hidden'}>
        <li className="w-full border-b-2 border-zinc-300">Home</li>
        <li className="w-full border-b-2 border-zinc-300">About</li>
        <li className="w-full border-b-2 border-zinc-300">Support</li>
        <li className="w-full border-b-2 border-zinc-300">Feature</li>
        <li className="w-full border-b-2 border-zinc-300">Feedback</li>
        <div className="flex flex-col my-4">
          <button className="px-8 py-3 mb-4 text-slate-600 bg-transparent">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
