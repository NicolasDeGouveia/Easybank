import mockup from "../assets/image-mockups.png";
import bg from "../assets/bg-intro-desktop.svg";
import ButtonInvite from "./ButtonInvite";

const Hero = () => {
  return (
    <section
      // style={{ backgroundPosition: "740px -255px" }}
      className="section-paddingY h-[50rem] overflow-hidden heroBg bg-no-repeat bg-[right_top] lg:bg-[right_-20rem_top_-16rem]  relative flex lg:block items-center"
    >
      <div className="section-container text-center lg:text-start mt-52 lg:mt-0 ">
        <div className="lg:w-[500px] mt-16 lg:mt-0">
          <h1 className="text-5xl lg:text-6xl py-8 lg:pb-8 overflow-hidden">
            Next generation digital banking
          </h1>
          <p className="text-[#9698a6] text-lg max-w-md mb-8">
            Take your financial life online. Your Easybank acount will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <ButtonInvite />
        </div>
      </div>
      <div className="absolute -top-36 lg:-top-28 lg:-right-32 ">
        <img src={mockup} alt="/" />
      </div>
    </section>
  );
};

export default Hero;
