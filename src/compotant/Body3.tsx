import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import clock from "../assets/clock.png";

function Body3() {
  return (
    <div className="h-[400px] w-full bg-blue-950  ">
      <div className="flex gap-3 justify-center">
        <div className="h-[380px] w-[280px] hover:border border-white  bg-blue-900 ">
          <div className="justify-center text-center text-white pt-3">
            <img src={icon2} className="pl-24 pt-4" />
            <h1 className=" font-semibold text-2xl">Assured Profits</h1>
            <p className="pt-3">
              offer Accurate signals and <br /> informations to ensure
              Guaranteed <br /> 90% profits on all trades and ensure <br />{" "}
              prosper risk management on all <br /> trades to minimize losses
            </p>
          </div>
        </div>
        <div className="h-[380px] w-[280px] hover:border border-white bg-blue-900">
          <div className="justify-center text-center text-white pt-3">
            <img src={clock} className="pl-24 pt-4 " />
            <h1 className="p-3 font-semibold text-2xl">24/7 Support</h1>
            <p className="pt-3">
              We provide 24/7 customer suppoort through Live Chat and E-mail.
              our support representative are always avaliable to answer any
              questions.
            </p>
          </div>
        </div>
        <div className="h-[380px] w-[280px] hover:border border-yellow-300 bg-blue-900">
          <div className="justify-center text-center text-white pt-3">
            <img src={icon3} className="pl-24 pt-4 " />
            <h1 className="p-3 font-semibold text-2xl">Strong Protection</h1>
            <p className="pt-3">
              We use a dedicated server with <br /> DDOS-Guard ,with the highest
              level of DDOS <br /> protetion to ensure that your
              cryptocurrencies are always safe with us..
            </p>
          </div>
        </div>
        <div className="h-[380px] w-[280px] border-w-0 hover:border border-white  bg-blue-900 ">
        <div className="justify-center text-center text-white pt-3">
            <img src={icon1} className="pl-24 pt-4 " />
            <h1 className="p-3 font-semibold text-2xl">Reliability</h1>
            <p className="pt-3"> You don't havt to expert, our expert team  take care of your daliy
              trading and staking rewards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body3;
