import { BsSearch } from 'react-icons/bs';
import { GiHomeGarage } from 'react-icons/gi';
import { HiOutlineUser } from 'react-icons/hi';
import { AiOutlineMenu } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navbar = ({change, show}) => {
    return ( 
        <div id="topnav" className=" w-full h-14 bg-slate-900 border-b-1 border-neutral-500 flex justify-between items-center gap-20 md:justify-center overflow-x-hidden">
            <div className="title-hold w-48 h-full flex items-center justify-center">
                <Link to="/">
                    <h1 className=" italic text-white text-2xl">WheelsWizard</h1>
                </Link>
            </div>
            <div className="hidden md:flex w-3/5 justify-evenly h-full ps-20 gap-24">
                <div className="links-hold flex gap-5 text-white h-full items-center">
                    <Link to="/buy">
                        <li className="links list-none h-12 flex flex-col justify-around">
                            <p>Buy</p>
                            <div className="under"></div>
                        </li>
                    </Link>
                    <li className="links list-none h-12 flex flex-col justify-around">
                        <p>Sell</p>
                        <div className="under"></div>
                    </li>
                    <li className="links list-none h-12 flex flex-col justify-around">
                        <p>Parts</p>
                        <div className="under"></div>
                    </li>
                    <li className="links list-none h-12 flex flex-col justify-around">
                        <p>Upgrade</p>
                        <div className="under"></div>
                    </li>
                    <li className="links list-none h-12 flex flex-col justify-around">
                        <p>Blog</p>
                        <div className="under"></div>
                    </li>
                    <li className="links list-none h-12 flex flex-col justify-around">
                        <p>Contact Us</p>
                        <div className="under"></div>
                    </li>
                </div>
                <div className="others-hold flex h-11 w-24 gap-6 items-center md:hidden lg:flex-row">
                    <li className="list-none">
                        <BsSearch size={17} className="search text-white hover:text-sky-400 transition duration-300 hover:cursor-pointer" />
                    </li>
                    <li className="garage list-none">
                        <GiHomeGarage size={19} className="garage text-white hover:text-sky-400  transition duration-300 hover:cursor-pointer"/>
                    </li>
                    <li className="account list-none hover:cursor-pointer">
                        <HiOutlineUser size={19} className='text-white sm:absolute account-pic hover:text-sky-400  transition duration-300'/>
                        <ul className="account-list w-36 h-20 rounded-md bg-white flex flex-col justify-evenly items-center relative mt-32 -ml-4 shadow-md">
                            <li id="signup" className=" hover:bg-slate-300 rounded-t-md flex items-center justify-center transition duration-500">Sign Up</li>
                            <div className="divider w-full bg-sky-500"></div>
                            <li id="login" className=' hover:bg-slate-300 transition duration-500  rounded-b-md flex items-center justify-center'>Login</li>
                        </ul>
                    </li>
                </div>
                <AiOutlineMenu size={35} className=' text-white lg:hidden'/>
            </div>
            <li className='list-none pr-4 lg:hidden'>{show ? (
                <AiOutlineMenu size={35} className='text-white flex lg:hidden' onClick={change}/>
            ):
            (<FontAwesomeIcon icon={faXmark} className='cancel-btn text-white w-8 h-8 lg:hidden' onClick={change}/>)}

            </li>
        </div>

     );
}
 
export default Navbar;