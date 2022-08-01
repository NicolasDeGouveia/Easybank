import currency from "../assets/image-currency.jpg";
import restaurant from "../assets/image-restaurant.jpg";
import plane from "../assets/image-plane.jpg";
import confetti from "../assets/image-confetti.jpg";

const Articles = () => {
  return (
    <section className=" bg-[#fafafa] section-paddingY">
      <div className="section-container">
        <h1 className="text-4xl mb-8">Latest Articles</h1>
        <div className="grid justify-items-center items-center lg:grid-cols-4 gap-6">
          <div className={styles.grid}>
            <div className={styles.divImg}>
              <img src={currency} alt="" />
            </div>
            <div className={styles.text}>
              <span className={styles.span}>By Claire Robinson</span>
              <h2 className={styles.h2}>
                Receive money in any currency with no fees
              </h2>
              <p className={styles.p}>
                The world is getting smaller and we're becoming more mobile. So
                why should you be forced to only receive money in a single...
              </p>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.divImg}>
              <img src={restaurant} alt="" />
            </div>
            <div className={styles.text}>
              <span className={styles.span}>By Wilson Hutton</span>
              <h2 className={styles.h2}>
                Treat yourself without worrying about money
              </h2>
              <p className={styles.p}>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you...
              </p>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.divImg}>
              <img src={plane} alt="" />
            </div>
            <div className={styles.text}>
              <span className={styles.span}>By Claire Robinson</span>
              <h2 className={styles.h2}>
                Receive money in any currency with no fees
              </h2>
              <p className={styles.p}>
                The world is getting smaller and we're becoming more mobile. So
                why should you be forced to only receive money in a single...
              </p>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.divImg}>
              <img src={confetti} alt="" />
            </div>
            <div className={styles.text}>
              <span className={styles.span}>By Claire Robinson</span>
              <h2 className={styles.h2}>
                Receive money in any currency with no fees
              </h2>
              <p className={styles.p}>
                The world is getting smaller and we're becoming more mobile. So
                why should you be forced to only receive money in a single...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  grid: "rounded-lg flex flex-col items-center",
  divImg: "lg:max-w-[292px] lg:max-h-[194px] overflow-hidden",
  text: "py-6 px-4 bg-white",
  span: "text-[#9698a6] text-xs",
  h2: "my-2 text-xl cursor-pointer hover:text-[#31d35c]",
  p: "text-[#9698a6] text-base lg:text-sm",
};

export default Articles;
