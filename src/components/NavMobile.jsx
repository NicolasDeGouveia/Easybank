import { motion } from "framer-motion";

const NavMobile = () => {
  return (
    <div className=" fixed w-screen h-screen bg-gradient-to-t from-transparent to-black/50  z-10">
      <motion.div
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        exit={{ y: -400, opacity: 0 }}
        className="lg:hidden fixed top-20 w-screen z-10"
      >
        <div className="bg-white p-8 mx-4 rounded-xl">
          <ul className="text-xl text-center">
            <li className={styles.li}>Home</li>
            <li className={styles.li}>About</li>
            <li className={styles.li}>Contact</li>
            <li className={styles.li}>Blog</li>
            <li className={styles.li}>Careers</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

const styles = {
  li: "py-3",
};
export default NavMobile;

{
}
