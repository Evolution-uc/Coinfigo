import chido3 from "../assets/chido3.png";


function Body() {
  return (
    <div>
      {/* left side */}
      <div className="h-[1000px] w-full bg-blue-950 flex flex-wrap   ">
        <div className="pl-10 pt-36 ">
          <img src={chido3} className="" />
        </div>
        {/* rigth side */}
        <div>
          <div className="text-white pl-14 pt-32 text-3xl font-semibold ">
            <h1>TRADE SPOT, GOLD, FUTURES AND STAKE All <br />
            IN ONE POWERFUL INTERFACE</h1>
          </div>
          <div className="text-white pl-14 pt-5">
          <p >
            Trusted by millions globally for its secure platform, we are
            confident to  <br />
          
          say that your crypto is in the right hands. Coinfigo is
            easy-to-use. We <br />
             provide you with a simple to use platform yet mind
            blowing with the <br />
             uniqueness in result. Don't sweat while trying to
            invest</p>
          </div>
          <div className="flex text-white items-center pl-12 pt-7 gap-2">
             {/* first  */}
            <div className="flex items-center gap-4">
            <div className="h-[10px] w-[10px] bg-yellow-300 border rounded-full ">
              </div >
              <p>Trade with up to 20x leverage.</p>
              </div>
             {/* seconde */}
             <div className=" flex items-center gap-5 pl-5">
            <div className="h-[10px] w-[10px] bg-yellow-300 border rounded-full"></div>
            <p>Trade Large volumes At stable prices</p>
            </div>
          </div>
          {/* first */}
          <div  className="flex text-white items-center pl-12 pt-7 gap-2">
            <div className="flex items-center gap-4">
            <div className="h-[10px] w-[10px] bg-yellow-300 border rounded-full ">
               </div>
               <p>Stake up to 40 % APY</p>
               </div>
               <div className="flex items-center gap-5 pl-20">
               <div className="h-[10px] w-[10px] bg-yellow-300 border rounded-full"></div>
               <p>Trading Signals are base on pure <br /> analysis from the most profitable <br /> analysts/traders .</p>

               </div>
          </div>
          {/* first */}
          <div className="flex text-white  pl-12 pt-7 gap-2">
          <div className="flex items-center gap-4">
            <div className="h-[10px] w-[10px] bg-yellow-300 border rounded-full ">
               </div>
               <p>Earn stake rewards at your end of <br /> your lock up period.</p>
               </div>
               <div className="flex text-white  pl-5 pt-5 gap-2">
               <div className="flex items-center gap-4">
            <div className="h-[10px] w-[10px] bg-yellow-300 border rounded-full  ">
               </div>
               <p>Trade your crypto better without <br /> fear and emotions with our <br /> Accurate API.</p>
               </div>

               </div>

          </div>
          <div className="flex gap-5  justify-center pt-10">
            <div>
               <button className="btn btn-primary">Know More</button>
               </div>
               <div>
               <button className="btn btn-outline btn-primary ">Get Started</button>
               </div>
               </div>
                    {/* makret data */}
      <div className="pt-16 ">
        <h1 className=" text-white text-4xl font-semibold ">MAKRET DATA</h1>
      </div>
        </div>
      </div>
      <div className="h-[600px] w-full bg-blue-950 ">
    
        <div className="h-[500px] w-full bg-gray-900 "> 
          
        {/* <FinlogixWidget/> */}
        
        

        </div>

        </div>
    </div>
  );
}

export default Body;
