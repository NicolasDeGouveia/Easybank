import online from "../assets/icon-online.svg";
import budgeting from "../assets/icon-budgeting.svg";
import onboarding from "../assets/icon-onboarding.svg";
import api from "../assets/icon-api.svg";

const Main = () => {
  return (
    <section className="bg-[#f3f4f6] section-paddingY">
      <div className="section-container">
        <h1 className="text-4xl mb-8 text-center lg:text-start">
          Why choose Easybank?
        </h1>
        <p className={styles.p}>
          We leverage Open Banking to turn your bank account into your financial
          hub.
        </p>
        <p className={styles.p}>Control your finances like never before.</p>
        <div className="grid justify-items-center text-cente lg:grid-cols-4 mt-8 ">
          <div className={styles.grid}>
            <img src={online} alt="" />
            <h2 className={styles.h2}>Online Banking</h2>
            <p className={styles.pgrid}>
              Our modern web and mobile application allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className={styles.grid}>
            <img src={budgeting} alt="" />
            <h2 className={styles.h2}>Simple Budgeting</h2>
            <p className={styles.pgrid}>
              See exactly where your money goes month. Receive notifications
              when you're close to hitting your limits.
            </p>
          </div>
          <div className={styles.grid}>
            <img src={onboarding} alt="" />
            <h2 className={styles.h2}>Fast Onboarding</h2>
            <p className={styles.pgrid}>
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className={styles.grid}>
            <img src={api} alt="" />
            <h2 className={styles.h2}>Open API</h2>
            <p className={styles.pgrid}>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  p: "text-[#9698a6] text-lg text-center lg:text-start",
  grid: "mt-6 lg:mt-0 lg:max-w-[230px] grid justify-items-center lg:justify-items-start text-center lg:text-start",
  h2: "text-2xl my-8",
  pgrid: "text-[#9698a6] text-base",
};

export default Main;
