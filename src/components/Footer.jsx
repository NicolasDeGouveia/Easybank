import ButtonInvite from "./ButtonInvite";
import logo from "../assets/logo-white.svg";
import facebook from "../assets/icon-facebook.svg";
import youtube from "../assets/icon-youtube.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="bg-[#2d314d] py-8 lg:py-16">
      <div className="px-12 lg:px-0 section-container lg:flex justify-between items-start">
        <div className="flex flex-col items-center lg:items-start">
          <div>
            <img src={logo} alt="" className="w-44" />
          </div>
          <div className="w-full flex justify-around items-center py-8">
            <div className={styles.divIcon}>
              <img className={styles.icon} src={facebook} alt="" />
            </div>
            <div className={styles.divIcon}>
              <img className={styles.icon} src={youtube} alt="" />
            </div>
            <div className={styles.divIcon}>
              <img className={styles.icon} src={twitter} alt="" />
            </div>
            <div className={styles.divIcon}>
              <img className={styles.icon} src={pinterest} alt="" />
            </div>
            <div className={styles.divIcon}>
              <img className={styles.icon} src={instagram} alt="" />
            </div>
          </div>
        </div>
        <ul className="flex flex-col lg:flex-row justify-center items-center">
          <div className="text-center lg:text-start lg:mr-40">
            <li className={styles.li}>About Us</li>
            <li className={styles.li}>Contact</li>
            <li className={styles.li}>Blog</li>
          </div>
          <div className="text-center lg:text-start">
            <li className={styles.li}>Careers</li>
            <li className={styles.li}>Support </li>
            <li className={styles.li}>Privacy Policy</li>
          </div>
        </ul>
        <div className="py-8 lg:py-0 flex flex-col items-center">
          <ButtonInvite />
          <p className="text-lg text-[#9698a6] pt-6">
            ©Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  logo: "text-white",
  li: "text-lg text-white py-2 lg:py-0 lg:pb-2 cursor-pointer hover:text-[#31d35c]",
  divIcon: "w-9 lg:mr-4 cursor-pointer hover:text-[#31d35c]",
  icon: "w-full",
};

export default Footer;
