import Image from "next/image";
import Link from "next/link";
import Cart from "./cart";
import LogoImage from "@/images/logo.svg";

import AvatarImage from "@/images/image-avatar.png";
import NavMobile from "./nav-mobile";

export const navItemsList = ["Collection", "Men", "Women", "About", "Contact"];

const NavLink = ({ children }) => (
  <li>
    <a
      href="/"
      className="block py-7 text-gray-500 relative duration-200 hover:text-gray-800 after:absolute after:left-0 after:w-0 after:bottom-0 after:h-1 after:rounded-md after:bg-primary after:duration-300 hover:after:w-full group-hover:after:delay-100 hover:after:delay-0"
    >
      {children}
    </a>
  </li>
);

function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between border-b min-h-20 px-6 relative">
        <div className="flex items-center">
          <NavMobile />
          <Link href="/" className="-mt-1">
            <Image priority src={LogoImage} alt="Sneakers app logo image" />
          </Link>
          <ul className="hidden lg:flex items-center gap-x-7 group ml-12">
            {navItemsList.map(item => (
              <NavLink key={item}>{item}</NavLink>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-x-6">
          <Cart />
          <div className="w-9 h-9 rounded-full overflow-hidden duration-200 cursor-pointer hover:ring-2 ring-offset-2 ring-primary">
            <Image
              className="w-full h-full"
              src={AvatarImage}
              alt="User avatar image"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
