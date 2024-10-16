import Autos from "./Autos"
import Write from "./Write"


function Custormes() {
  return (
    <div className="h-[600px] w-full bg-blue-500">
        <div>
            <h1 className="text-white text-6xl text-center pt-3 ">Customers Feedback</h1>
            <p className="text-white text-2xl text-center pt-4">These Testimonies were received from people who <br /> have an investment plan to COINFIGO.</p>

        </div>
        <div className="flex">
            <div className="w-1/2 pt-6 pl-10 ">
            <Autos/>
            </div>
            <div className="w-1/2">
            <Write/>
            </div>
        </div>
    </div>
  )
}

export default Custormes