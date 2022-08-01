import logo from "../assets/logo-black.svg";
import ButtonInvite from "./ButtonInvite";
import menu from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import NavMobile from "./NavMobile";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav className="w-full fixed py-6 z-10 bg-white">
      <div className="section-container flex items-center justify-between">
        <img src={logo} alt="/" />
        {!menuToggle && (
          <img
            src={menu}
            alt="/"
            className="lg:hidden"
            onClick={() => setMenuToggle(!menuToggle)}
          />
        )}
        {menuToggle && (
          <img
            src={close}
            alt="/"
            className="lg:hidden"
            onClick={() => setMenuToggle(!menuToggle)}
          />
        )}

        <ul className="hidden lg:flex items-center text-lg">
          <li className={styles.li}>Home</li>
          <li className={styles.li}>About</li>
          <li className={styles.li}>Contact</li>
          <li className={styles.li}>Blog</li>
          <li className={styles.li}>Careers</li>
        </ul>

        <ButtonInvite hidden={true} />
      </div>
      {/* MOBILE PART */}
      <AnimatePresence>
        {menuToggle && (
          <div className="lg:hidden absolute top-[4.15rem] left-0">
            <NavMobile />
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const styles = {
  li: "text-[#9698a6] mr-8",
};
export default Navbar;
