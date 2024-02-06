import { LuSearch } from "react-icons/lu";
import Navbar from "./Navbar";
import Makes from "./data/makes.json";

const Buy = () => {
    return ( 
        <div className="buy-page">
            <Navbar/>
            <div className="first-container w-full flex justify-center">
                <div className="w-5/12 h-full bg-blue-500 flex flex-col gap-2 justify-center items-center bg-opacity-5">
                    <div className="w-auto h-auto flex flex-col justify-center items-start gap-6">
                        <p className="text-3xl font-semibold text-start">Experience Car Shopping <br />Redefined and Discover the <br />Best Cars on Our Website</p>
                        <div className=" w-11/12 h-12 bg-white border-sky-200 border rounded-lg flex overflow-hidden items-center gap-1 pl-1">
                            <LuSearch size={25} className=""/>
                            <input type="text" className=" w-72 h-full bg-violet-2 border-0 outline-none" />
                        </div>
                    </div>
                </div>
                <div className=" w-6/12 h-full bg-slate-300 bg-buy-pic bg-cover bg-no-repeat"></div>
            </div>
        </div>
     );
}
 
export default Buy
;