import clock from "../assets/clock.png";
import img2 from "../assets/img2.png";
import man from "../assets/man.png";

function Body4() {
  return (
    <div>
      <div className="h-[800px] w-full bg-blue-950 flex ">
        <div className=" items-center ">
          <div>
            <img src={clock} className="pl-56 pt- justify-center " />
          </div>
          <div className="pl-36">
            <div
              className="w-[300px] h-[700px] bg-cover bg-center bg-no-repeat "
              style={{ backgroundImage: `url(${img2})` }}
            >
              <img src={man} className="pt-56 pl-14" />
            </div>
          </div>
        </div>
        <div className="text-white pl-24">
          <div>
            <h1 className="text-white pt-28 text-6xl  font-semibold ">
              Get the best trading <br /> Analysis and make over <br /> 20%
              trading with <br /> us.
            </h1>
            <p className="font-semibold pt-5 text-2xl">
              Coinfigo offer the most accurate trading information <br /> and
              analysis to trade on spot and futures account <br />
              Either receive signals and trade on your own or allow <br /> our
              specialists make trades for you
            </p>
            <div className="pt-10">
            <button className="btn btn-primary">Get   Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body4;
