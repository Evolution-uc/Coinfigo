import chido2 from "../assets/chido2.png"

function Hero() {
  return (
    <div>
      
        <div className='h-[700px] w-full bg-blue-950 flex items-center'>
          <div >
            <div className='text-7xl text-white pl-16 pt-28 text-center md:text-left'>
            <h1>World Most </h1>
            <h1>Reliable Crypto</h1>
            <h1>Trading Platform</h1>
            </div>
            <div className='text-white pl-20 pt-10'>
            <p>Stake/Trade bitcoin, ETH and hundreds of other
            </p>
            <p>cryptocurrencies in minutes.</p>
            </div>
            <div className=" pt-8 pl-20">
            <button className="btn btn-active btn-primary text-2xl ">GET Started</button>
            </div>
            </div>

            <div className=" ">
            {/* <img src={chido2} className=""/> */}

            </div>
            <div className="">
            <div
              className="w-[400px] h-[600px] bg-cover bg-center bg-no-repeat  "
              style={{ backgroundImage: `url(${chido2})` }}
            >
              
            </div>
            </div>
        </div>
       
    </div>
  )
}

export default Hero