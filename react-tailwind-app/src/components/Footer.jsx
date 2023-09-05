import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full px-2 text-gray-300 bg-slate-700">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div className="text-center">
          <h6 className="pt-2 font-bold uppercase">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>
        <div className="text-center">
          <h6 className="pt-2 font-bold uppercase">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>
        <div className="text-center">
          <h6 className="pt-2 font-bold uppercase">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>
        <div className="text-center">
          <h6 className="pt-2 font-bold uppercase">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>

        <aside className="col-span-2 pt-8 px-4 text-center md:pt-2 md:text-start">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mb-4 mr-4 rounded-md"
              type="email"
              placeholder="Enter email..."
            />
            <button className="p-2 mb-4 hover:bg-white duration-300">
              Subscribe
            </button>
          </form>
        </aside>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2023 Chatty, mLLc. All rights reserved.</p>
        <div className="flex justify-around sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
