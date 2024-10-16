import item1 from "../assets/item10.png";
import item2 from "../assets/item11.png";
import item3 from "../assets/chine.png";

function Blog() {
  return (
    <div className="h-[800px] w-full bg-blue-950">
        <div className="text-center pt-7">
            <h1 className="text-white text-5xl font-semibold ">Blog & Tips</h1>
            <h1 className="text-white text-2xl pt-4 font-semibold">CoinFigo aims at providing users with trading <br /> opportunities.</h1>
        </div>
        <div className="flex gap-3 pt-7 pl-4">
        <div
              className="w-[400px] h-[450px] bg-cover bg-center bg-no-repeat  "
              style={{ backgroundImage: `url(${item1})` }}
            >
              <h1 className="text-white font-semibold pt-[310px] text-2xl pl-6 hover:text-blue-700">The powers of staking <br /> Earning passive income <br /> with cryptocurrencies</h1>
            </div>
            <div
              className="w-[400px] h-[450px] bg-cover bg-center bg-no-repeat "
              style={{ backgroundImage: `url(${item3})` }}
            >
              <h1 className="text-white font-semibold pt-[310px] text-2xl pl-6 hover:text-blue-700">The Basics of crypto <br /> Trading : A Beginner's Guide</h1>
            </div>
            <div
              className="w-[400px] h-[450px] bg-cover bg-center bg-no-repeat "
              style={{ backgroundImage: `url(${item2})` }}
            >
              <h1 className="text-white font-semibold pt-[310px] text-2xl pl-6 hover:text-blue-700"> Navigating the volativity: Tips <br /> For successful crypto <br /> Trading</h1>
            </div>
        </div>

    </div>
  )
}

export default Blog