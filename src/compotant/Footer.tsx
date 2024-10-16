
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" bg-blue-950  h-[300px] w-full">
      <div className="flex pl-10 ">
        <div>
          <h1 className="text-white font-bold text-3xl underline ">
            Be Assured{" "}
          </h1>
          <p className="text-white font-bold text-1xl pt-7 ">
            We give the best Trading <br /> Experience. Follow our telegram <br /> channel to
            join our VIP group and <br /> enjoy our daily trading analysis, <br /> best
            indicators and channels for <br /> trading and make macro profits on <br /> every
            Trade. Our Team of <br /> investors and AI ensures accuracy on <br /> every set
            up.
          </p>
        </div>
        <div className="pl-[400px]">
            <h1 className="text-white text-3xl font-bold underline ">Useful Links</h1>
            <div className="gap-9 text-white font-semibold text-1xl hover:bg-blue-950">
          <h1>our plan</h1>
          <h1>About us</h1>
          <h1>Privacy Policy</h1>
          <h1>Blog</h1>
          <h1>Contact Us</h1>
</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
