import { FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
    return ( 
        <div className="footer w-full h-auto sm:h-96 bg-white bg-opacity-95 rounded-t-lg flex justify-center pt-5">
            <div className=" w-10/12 h-full flex flex-col items-center gap-2">
                <div className="top-info w-11/12 h-auto sm:h-20 flex gap-3 sm:gap-5 items-center sm:flex-row flex-col">
                    <div className="bg-sky-200 h-14 w-full sm:w-2/6 rounded-lg flex items-center gap-3 pl-2">
                        <MdEmail size={24} className=" text-blue-500"/>
                        <div className=" w-4/5 h-full flex flex-col justify-center">
                            <span className="">Email</span>
                            <span className="font-medium">------</ span>
                        </div>
                    </div>
                    <div className="bg-sky-200 h-14 w-full sm:w-2/6 rounded-lg flex items-center gap-3 pl-2">
                        <FaLocationDot size={24} className=" text-blue-500"/>
                        <div className=" w-4/5 h-full flex flex-col justify-center">
                            <span className="">Address</span>
                            <span className="font-medium">----</ span>
                        </div>
                    </div>
                    <div className="bg-sky-200 h-14 w-full sm:w-2/6 rounded-lg flex items-center gap-3 pl-2">
                        <FaPhoneVolume size={24} className=" text-blue-500"/>
                        <div className=" w-4/5 h-full flex flex-col justify-center">
                            <span className="">Phone</span>
                            <span className="font-medium">-----</ span>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 h-75 flex sm:flex-row flex-col items-center sm:items-start gap-5 pb-3">
                    <div className=" w-full sm:w-56 h-3/6 flex flex-col items-center sm:items-start">
                        <p className="italic text-xl sm:text-lg text-blue-500 font-medium pb-2 ">WheelsWizard</p>
                        <p className=" text-center sm:text-start">Unleash the Road:<br /> Where Automotive Passion<br /> Meets Excellence!</p>
                    </div>
                    <div className="sm:w-36 h-3/6 flex flex-col sm:ml-4 items-center sm:items-start">
                        <p className="font-semibold text-lg sm:text-base">Account</p>
                        <p className="hover:text-sky-500 transition duration-300 hover:cursor-pointer">Login</p>
                        <p className="hover:text-sky-500 transition duration-300 hover:cursor-pointer">Sign Up</p>
                    </div>
                    <div className="sm:w-36 h-5/6 flex flex-col gap-2 items-center sm:items-start">
                        <p className="font-semibold text-lg sm:text-base">Links</p>
                        <li className="hover:text-sky-500 list-none transition duration-300 hover:cursor-pointer">Buy</li>
                        <li className="hover:text-sky-500 list-none transition duration-300 hover:cursor-pointer">Sell</li>
                        <li className="hover:text-sky-500 list-none transition duration-300 hover:cursor-pointer">Parts</li>
                        <li className="hover:text-sky-500 list-none transition duration-300 hover:cursor-pointer">Upgrade</li>
                        <li className="hover:text-sky-500 list-none transition duration-300 hover:cursor-pointer">Blog</li>
                        <li className="hover:text-sky-500 list-none transition duration-300 hover:cursor-pointer">Contact Us</li>
                    </div>
                    <div className="sm:w-36 h-5/6 flex flex-col gap-2 items-center sm:items-start">
                        <p className="font-semibold text-lg sm:text-base">Others</p>
                        <li className="hover:text-sky-500 list-none transition duration-300 hover:cursor-pointer">FAQs</li>
                        <li className="hover:text-sky-500 list-none transition duration-300 hover:cursor-pointer">About</li>
                        <li className="hover:text-sky-500 list-none transition duration-300 hover:cursor-pointer">How It Works</li>
                        <li className="hover:text-sky-500 list-none transition duration-300 hover:cursor-pointer">Book a test drive</li>
                    </div>
                    <div className="sm:w-36 h-5/6 flex flex-col gap-2 items-center sm:items-start">
                        <p className="font-semibold text-lg sm:text-base">Socials</p>
                        <li className="hover:text-sky-500 list-none transition duration-300 hover:cursor-pointer flex items-center gap-1">
                            <FaTiktok size={16} className=""/>
                            <p className="">Tiktok</p>
                        </li>
                        <li className="hover:text-sky-500 list-none transition duration-300 hover:cursor-pointer flex items-center gap-1">
                            <RiInstagramFill size={16} className=""/>
                            <p className="">Instagram</p>
                        </li>
                        <li className="hover:text-sky-500 list-none transition duration-300 hover:cursor-pointer flex items-center gap-1">
                            <FaYoutube size={16} className=""/>
                            <p className="">Youtube</p>
                        </li>
                        <li className="hover:text-sky-500 list-none transition duration-300 hover:cursor-pointer flex items-center gap-1">
                            <FaFacebook size={16} className=""/>
                            <p className="">Facebook</p>
                        </li>
                    </div>
                    
                </div>
                <div className="copywrite w-48 h-6 flex items-center gap-1 mt-2 justify-center">
                    <FaRegCopyright size={10} className=" text-sky-500"/>
                    <p className=" text-xs text-sky-500">2023 Emmanuel</p>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;