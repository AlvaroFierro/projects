import { IconMenu2 } from '@tabler/icons-react';
import logo from '../assets/logo-eagle-food.svg';

export default function Navbar() {
  return (
    <nav className="bg-dark-red p-2">
      <div className="nav-wrapper flex text-white justify-between max-w-7xl mx-auto items-center">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className=" hidden md:flex">
          <a href="#quote" className="flex ">
            QUOTE NOW
          </a>
        </div>
        <div className="mobile md:hidden">
          <IconMenu2 size={32} />
        </div>
      </div>
    </nav>
  );
}
