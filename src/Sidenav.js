import { BiHome } from 'react-icons/bi';
import { GiCarWheel, GiSellCard, GiHomeGarage} from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { HiOutlineUser } from 'react-icons/hi';


const Sidenav = () => {
    return ( 
        <ul className="phone-list w-52 flex flex-col gap-2 pt-10 items-center absolute left-0 top-0 shadow-md rounded-r-md bg-slate-900 opacity-95" >
                    <div className="user-info w-44 h-36 flex flex-col justify-end gap-5">
                        <FaUserCircle size={75} className='text-white'/>
                        <h3 className="text-white">Unknown</h3>
                    </div>
                    <div className="divider w-48 bg-gray-600"></div>
                    <div className="phone-links w-44 h-72 flex flex-col justify-evenly">
                        <li className="w-full h-10 flex items-center gap-2 ps-2 rounded-md">
                            <BiHome size={20} className='text-white'/>
                            <p className='text-white'>Home</p>
                        </li>
                        <li className="w-full h-10 flex items-center gap-2 ps-2 rounded-md">
                            <FontAwesomeIcon icon={faCar} className='text-white'/>
                            <p className='text-white'>Buy</p>
                        </li>
                        <li className="w-full h-10 flex items-center gap-2 ps-2 rounded-md">
                            <GiSellCard size={20} className='text-white'/>
                            <p className='text-white'>Sell</p>
                        </li>
                        <li className="w-full h-10 flex items-center gap-2 ps-2 rounded-md">
                            <GiCarWheel size={20} className='text-white'/>
                            <p className='text-white'>Parts</p>
                        </li>
                        <li className="w-full h-10 flex items-center gap-2 ps-2 rounded-md">
                            <GiHomeGarage size={19} className="garage text-white"/>
                            <p className='text-white'>Garage</p>
                        </li>
                        <li className="w-full h-10 flex items-center gap-2 ps-2 rounded-md">
                            <HiOutlineUser size={19} className='text-white'/>
                            <p className='text-white'>Account</p>
                        </li>
                    </div>
            </ul>
    );
}
 
export default Sidenav;