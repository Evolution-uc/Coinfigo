import chido from "../assets/chido.png";
import { Link } from "react-router-dom";
import Down from "./Down";

function Navbar() {
  return (
    <div>
      <div className="h-[100px] w-full bg-white flex  items-center gap-20">
        <img src={chido} className="h-16 pl-11 pt-3" />
        <div className=" text-2xl  hover:cursor-pointer text-black hidden md:block ">
          <Link to="/Home" className="pr-4 hover:text-blue-500 font-semibold ">
            HOME
          </Link>
          <Link to="/About" className="pr-4 hover:text-blue-400 font-semibold">
            ABOUT
          </Link>
          <Link
            to="/Content"
            className="pr-4 hover:text-blue-400 font-semibold"
          >
            CONTENT
          </Link>
          <Link to="/FAQS" className="pr-4 hover:text-blue-400 font-semibold">
            FAQS
          </Link>

          <Link to="/Trade" className="hover:text-blue-400 font-semibold">
            TRADE
          </Link>
        </div>
        <div className="pl-20 flex gap-4  ">
          <div className="hidden md:block">
            <button className="btn btn-active btn-primary text-2xl ">
              Sign up
            </button>
          </div>
          <div className="hidden md:block">
            <button className="btn btn-active btn-primary  text-2xl ">
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className="pl-[400px] block md:hidden">
        <Down/>
      </div>
    </div>
  );
}

export default Navbar;
