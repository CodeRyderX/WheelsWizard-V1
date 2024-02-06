import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { useState  } from 'react';
import { FaBloggerB } from 'react-icons/fa';
import Brands from './data/brands.json';
import './index.css';
import { IoFlame } from "react-icons/io5";
import { MdOutlineSpeed } from "react-icons/md";
import { GiGearStick } from "react-icons/gi";
import Vintage from './data/vintage.json';
import Popular from './data/popular.json';
import SUV from './data/suv.json';
import Jeep from './data/jeep.json';
import Luxury from './data/luxury.json';
import Sportscar from './data/sportscar.json';
import { MdShoppingCartCheckout } from "react-icons/md";
import { GiHomeGarage } from 'react-icons/gi';
import { SiLeaderprice } from "react-icons/si";
import { GiAutoRepair } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import Footer from "./Footer";

const Home = () => {
    const [show, setShow] = useState(true);

    const change = () => {
        setShow(prev => {
            return !prev
        })
    }

    const [inputValue, setInputValue] = useState('');
    const inputActive = (e) => {
        setInputValue(e.target.value);
    }

    const [activeState, setActiveState] = useState(1);
    const toggleTab = (index) => {
        setActiveState(index);
    }

    return ( 
        <div className="home-page flex flex-col items-center overflow-x-hidden">
            <Navbar change={change} show={show}/>
           {!show && (
             <Sidenav />
           )}
           <div className="first-container w-full bg-backdrop bg-no-repeat bg-cover flex gap-12 justify-center">
                <div className="main-left w-4/12 h-full hidden sm:flex flex-col justify-center gap-5">
                    <p className=" text-4xl text-white font-semibold">Unleash the Road:<br /> Where Automotive Passion Meets Excellence!</p>
                    <p className="text-white text-sm">Find the perfect vehicle for your needs, and access valuable resources on maintenance, financing, and more. Your journey through the world of automobiles starts here at Wheels Wizard.</p>
                    <div className="main-buttons w-56 flex justify-between">
                        <button className="start-btn bg-sky-400 px-3 py-2 text-white rounded-sm hover:bg-white hover:text-sky-400 transition duration-300">Get Started</button>
                        <button className="blog-btn bg-white px-3 py-2 rounded-sm text-sky-400 flex items-center gap-1 hover:text-white hover:bg-sky-400">
                            <span><FaBloggerB size={14} className="text-sky-400 blog-icon transition duration-300"/></span>
                            <span className=" transition duration-300">Visit Blog</span>
                        </button>
                    </div>
                </div>
                <div className="main-right sm:w-5/12 h-full bg-head-pic bg-no-repeat w-full flex items-center object-cover bg-cover bg-center justify-center">
                    <form className=" w-12/12 h-12 z-2 rounded-md top-40 left-10 sm:hidden">
                        <input type="text" value={inputValue} onChange={inputActive} className="searchbar w-72 h-12 text-black rounded-md" placeholder="Search Here" />
                    </form>
                </div>
           </div>

           
           {/* Brand Section */}
           <div className="brand-section w-full sm:w-10/12 mt-5 flex flex-col justify-evenly items-center px-2">
                <div className="brand-top w-full h-14 flex flex-col sm:flex-row items-center justify-between">
                    <p className="brand-section-head text-lg sm:text-xl">Search By Car Brands</p>
                    <button className=" px-3 py-2 text-sky-400 hover:bg-sky-400 transition duration-300 hover:text-white rounded-sm">See all brands</button>
                </div>
                <div className="brand-body grid grid-cols-1 md:grid-cols-6 gap-3 pt-3">
                {
                    Brands.map(brand => {
                        return(
                            <div className="brand-card hover:shadow-lg hover:cursor-pointer hover:bg-gray-100 transition duration-300" key={ brand.id }>
                                <img src={ brand.image_url } alt="" className="brand-img" />
                                <p className="brand-name">{ brand.brand }</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>

            {/* Commerce Section */}
            <div className="commerce-section w-10/12 h-64 sm:flex flex-col md:flex-row gap-3 mt-7 hidden">
                <div className="sell-section h-full w-full md:w-6/12 rounded-md flex bg-slate-800">
                    <div className="sell-section-left h-full w-full md:w-7/12 flex flex-col justify-center px-5 py-5 gap-3">
                        <p className="sell-head text-white text-3xl font-semibold">Ready to turn your wheels into cash?</p>
                        <p className="sell-word text-white text-sm hidden md:block">Upgrade your wheels and your wallet! Sell<br /> your car hassle-free and get top dollar <br />for it. Don't miss out on this opportunity<br /> to make a smart move and drive away with cash in hand!</p>
                        <button className="bg-sky-400 text-white hover:bg-white hover:text-sky-400 transition duration-300 px-3 py-2 rounded-sm w-32">Sell your Car</button>
                    </div>
                    <div className="sell-section-right h-full w-6/12 sm:w-5/12 flex items-center justify-center pr-1">
                        <img src="https://img.freepik.com/premium-photo/headlights-hood-black-sports-car_146671-5564.jpg?size=626&ext=jpg&ga=GA1.1.1938564188.1691954744&semt=ais" alt="" className="sell-pic h-44 sm:h-48 rounded-none md:rounded-full w-full sm:w-11/12 object-cover"/>
                    </div>
                </div>
                <div className="buy-section h-full  w-full md:w-6/12 rounded-md flex bg-gray-500">
                    <div className="buy-section-left h-full w-7/12 flex flex-col justify-center px-5 py-2 gap-3">
                        <p className="buy-head text-white text-3xl font-semibold">Ready to drive your dreams?</p>
                        <p className="buy-word text-white text-sm hidden md:block">With our extensive inventory and competitive prices, finding your dream car has never been easier. Don't settle for anything less - start your car shopping journey today!</p>
                        <button className="bg-sky-400 text-white hover:bg-white hover:text-sky-400 transition duration-300 px-3 py-2 rounded-sm w-32">Buy a Car</button>
                    </div>
                    <div className="buy-section-right h-full w-5/12 flex items-center justify-center">
                        <img src="https://img.freepik.com/free-photo/view-3d-car_23-2150796924.jpg?size=626&ext=jpg&ga=GA1.1.1938564188.1691954744&semt=ais" alt="" className="buy-pic h-40 sm:h-48 rounded-none sm:rounded-full w-11/12 object-cover"/>
                    </div>
                </div>
            </div>

            {/* Tab Section */}
            <div className="tab-section w-11/12 sm:w-10/12 flex flex-col justify-center items-center mt-5">
                <div className="feature-word w-10/12 sm:w-5/12 h-36 flex flex-col items-center justify-evenly">
                    <p className="feature-head text-5xl font-semibold font-overpass text-center">Featured Listings</p>
                    <p className="feature-word text-sm text-center">Discover your dream ride at our exclusive car featured listings. Unleash your passion for the road with our exceptional selection. Visit us today and make heads turn!</p>
                </div>
                <div className="tab-head w-full sm:w-7/12 h-12 border bg-white border-blue-500 border-1 rounded-full flex items-center justify-center">
                    <li className={activeState === 1 ? "tab active-tab": "tab"} onClick={() => {toggleTab(1)}}>Popular</li>
                    <li className={activeState === 2 ? "tab active-tab": "tab"} onClick={() => {toggleTab(2)}}>Vintage</li>
                    <li className={activeState === 3 ? "tab active-tab": "tab"} onClick={() => {toggleTab(3)}}>SUV</li>
                    <li className={activeState === 4 ? "tab active-tab": "tab"} onClick={() => {toggleTab(4)}}>Jeep</li>
                    <li className={activeState === 5 ? "tab active-tab": "tab"} onClick={() => {toggleTab(5)}}>Luxury</li>
                    <li className={activeState === 6 ? "tab active-tab": "tab"} onClick={() => {toggleTab(6)}}>Sportscar</li>
                </div>
                <div className="tab-body w-full h-auto pb-2 pt-5 flex flex-col ">
                    <div className={activeState === 1 ? "content active-content": "content"}>
                        {
                            Popular.map(popular => {
                            return(
                            <div className="vintage-body" key={popular.id}>
                                <img src={popular.imageUrl} alt="" className="w-full object-cover h-3/5" />
                                <div className="vintage-info w-full h-2/5 pl-1 flex flex-col gap-1 pt-1">
                                    <p className="vintage-body-name">{popular.carName}</p>
                                    <p className="price-tag"><span className="dollar-tag">$</span>{popular.price}</p>
                                    <div className="divider bg-gray-200 w-11/12"></div>
                                    <div className="bottom-card-info w-10/12 -200 h-6 flex justify-evenly gap-1">
                                        <div className="petrol flex items-center">
                                            <IoFlame size={12} className=" text-sky-600 text-sm sm:text-xs" />
                                            <span className=" text-xs">{popular.fuelType}</span>
                                        </div>
                                        <div className="petrol flex items-center">
                                            <MdOutlineSpeed size={13} className=" text-sky-600" />
                                            <span className=" text-xs">{popular.speed}</span>
                                        </div>
                                        <div className="petrol flex items-center">
                                            <GiGearStick size={13} className=" text-sky-600" />
                                            <span className=" text-xs">Auto</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="buy-btn w-10 h-10 rounded-full flex items-center justify-center absolute right-1 top-1">
                                    <MdShoppingCartCheckout size={21} className=" text-white active-shop hidden" />
                                </button>
                                <button className="bought-btn w-10 h-10 bg-white rounded-full items-center justify-center absolute right-1 top-1 hidden">
                                    <GiHomeGarage size={21} className=" text-sky-400" />
                                </button>
                            </div>
                            )})
                        }
                    </div>
                    <div className={activeState === 2 ? "content active-content": "content"}>
                        {
                            Vintage.map(vintage => {
                            return(
                            <div className="vintage-body" key={vintage.id}>
                                <img src={vintage.imageUrl} alt="" className="w-full object-cover h-3/5" />
                                <div className="vintage-info w-full h-2/5 pl-1 flex flex-col gap-1 pt-1">
                                    <p className="vintage-body-name">{vintage.vintageCarName}</p>
                                    <p className="price-tag"><span className="dollar-tag">$</span>{vintage.price}</p>
                                    <div className="divider bg-gray-200 w-11/12"></div>
                                    <div className="bottom-card-info w-10/12 -200 h-6 flex justify-evenly gap-1">
                                        <div className="petrol flex items-center">
                                            <IoFlame size={12} className=" text-sky-600" />
                                            <span className=" text-xs">{vintage.fuelType}</span>
                                        </div>
                                        <div className="petrol flex items-center">
                                            <MdOutlineSpeed size={13} className=" text-sky-600" />
                                            <span className=" text-xs">{vintage.speed}</span>
                                        </div>
                                        <div className="petrol flex items-center">
                                            <GiGearStick size={13} className=" text-sky-600" />
                                            <span className=" text-xs">Auto</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="buy-btn w-10 h-10 rounded-full flex items-center justify-center absolute right-1 top-1">
                                    <MdShoppingCartCheckout size={21} className=" text-white active-shop hidden" />
                                </button>
                                <button className="bought-btn w-10 h-10 bg-white rounded-full items-center justify-center absolute right-1 top-1 hidden">
                                    <GiHomeGarage size={21} className=" text-sky-400" />
                                </button>
                            </div>
                            )})
                        }
                    </div>
                    <div className={activeState === 3 ? "content active-content": "content"}>
                        {
                            SUV.map(suv => {
                            return(
                            <div className="vintage-body" key={suv.id}>
                                <img src={suv.imageUrl} alt="" className="w-full object-cover h-3/5" />
                                <div className="vintage-info w-full h-2/5 pl-1 flex flex-col gap-1 pt-1">
                                    <p className="vintage-body-name">{suv.carName}</p>
                                    <p className="price-tag"><span className="dollar-tag">$</span>{suv.price}</p>
                                    <div className="divider bg-gray-200 w-11/12"></div>
                                    <div className="bottom-card-info w-10/12 -200 h-6 flex justify-evenly gap-1">
                                        <div className="petrol flex items-center">
                                            <IoFlame size={12} className=" text-sky-600" />
                                            <span className=" text-xs">{suv.fuelType}</span>
                                        </div>
                                        <div className="petrol flex items-center">
                                            <MdOutlineSpeed size={13} className=" text-sky-600" />
                                            <span className=" text-xs">{suv.speed}</span>
                                        </div>
                                        <div className="petrol flex items-center">
                                            <GiGearStick size={13} className=" text-sky-600" />
                                            <span className=" text-xs">Auto</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="buy-btn w-10 h-10 rounded-full flex items-center justify-center absolute right-1 top-1">
                                    <MdShoppingCartCheckout size={21} className=" text-white active-shop hidden" />
                                </button>
                                <button className="bought-btn w-10 h-10 bg-white rounded-full items-center justify-center absolute right-1 top-1 hidden">
                                    <GiHomeGarage size={21} className=" text-sky-400" />
                                </button>
                            </div>
                            )})
                        }
                    </div>
                    <div className={activeState === 4 ? "content active-content": "content"}>
                        {
                            Jeep.map(jeep => {
                            return(
                            <div className="vintage-body" key={jeep.id}>
                                <img src={jeep.imageUrl} alt="" className="w-full object-cover h-3/5" />
                                <div className="vintage-info w-full h-2/5 pl-1 flex flex-col gap-1 pt-1">
                                    <p className="vintage-body-name">{jeep.carName}</p>
                                    <p className="price-tag"><span className="dollar-tag">$</span>{jeep.price}</p>
                                    <div className="divider bg-gray-200 w-11/12"></div>
                                    <div className="bottom-card-info w-10/12 -200 h-6 flex justify-evenly gap-1">
                                        <div className="petrol flex items-center">
                                            <IoFlame size={12} className=" text-sky-600" />
                                            <span className=" text-xs">{jeep.fuelType}</span>
                                        </div>
                                        <div className="petrol flex items-center">
                                            <MdOutlineSpeed size={13} className=" text-sky-600" />
                                            <span className=" text-xs">{jeep.speed}</span>
                                        </div>
                                        <div className="petrol flex items-center">
                                            <GiGearStick size={13} className=" text-sky-600" />
                                            <span className=" text-xs">Auto</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="buy-btn w-10 h-10 rounded-full flex items-center justify-center absolute right-1 top-1">
                                    <MdShoppingCartCheckout size={21} className=" text-white active-shop hidden" />
                                </button>
                                <button className="bought-btn w-10 h-10 bg-white rounded-full items-center justify-center absolute right-1 top-1 hidden">
                                    <GiHomeGarage size={21} className=" text-sky-400" />
                                </button>
                            </div>
                            )})
                        }
                    </div>
                    <div className={activeState === 5 ? "content active-content": "content"}>
                        {
                            Luxury.map(luxury => {
                            return(
                            <div className="vintage-body" key={luxury.id}>
                                <img src={luxury.imageUrl} alt="" className="w-full object-cover h-3/5" />
                                <div className="vintage-info w-full h-2/5 pl-1 flex flex-col gap-1 pt-1">
                                    <p className="vintage-body-name">{luxury.carName}</p>
                                    <p className="price-tag"><span className="dollar-tag">$</span>{luxury.price}</p>
                                    <div className="divider bg-gray-200 w-11/12"></div>
                                    <div className="bottom-card-info w-10/12 -200 h-6 flex justify-evenly gap-1">
                                        <div className="petrol flex items-center">
                                            <IoFlame size={12} className=" text-sky-600" />
                                            <span className=" text-xs">{luxury.fuelType}</span>
                                        </div>
                                        <div className="petrol flex items-center">
                                            <MdOutlineSpeed size={13} className=" text-sky-600" />
                                            <span className=" text-xs">{luxury.speed}</span>
                                        </div>
                                        <div className="petrol flex items-center">
                                            <GiGearStick size={13} className=" text-sky-600" />
                                            <span className=" text-xs">Auto</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="buy-btn w-10 h-10 rounded-full flex items-center justify-center absolute right-1 top-1">
                                    <MdShoppingCartCheckout size={21} className=" text-white active-shop hidden" />
                                </button>
                                <button className="bought-btn w-10 h-10 bg-white rounded-full items-center justify-center absolute right-1 top-1 hidden">
                                    <GiHomeGarage size={21} className=" text-sky-400" />
                                </button>
                            </div>
                            )})
                        }
                    </div>
                    <div className={activeState === 6 ? "content active-content": "content"}>
                        {
                            Sportscar.map(sportscar => {
                            return(
                            <div className="vintage-body" key={sportscar.id}>
                                <img src={sportscar.imageUrl} alt="" className="w-full object-cover h-3/5" />
                                <div className="vintage-info w-full h-2/5 pl-1 flex flex-col gap-1 pt-1">
                                    <p className="vintage-body-name">{sportscar.carName}</p>
                                    <p className="price-tag"><span className="dollar-tag">$</span>{sportscar.price}</p>
                                    <div className="divider bg-gray-200 w-11/12"></div>
                                    <div className="bottom-card-info w-10/12 -200 h-6 flex justify-evenly gap-1">
                                        <div className="petrol flex items-center">
                                            <IoFlame size={12} className=" text-sky-600" />
                                            <span className=" text-xs">{sportscar.fuelType}</span>
                                        </div>
                                        <div className="petrol flex items-center">
                                            <MdOutlineSpeed size={13} className=" text-sky-600" />
                                            <span className=" text-xs">{sportscar.speed}</span>
                                        </div>
                                        <div className="petrol flex items-center">
                                            <GiGearStick size={13} className=" text-sky-600" />
                                            <span className=" text-xs">Auto</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="buy-btn w-10 h-10 rounded-full flex items-center justify-center absolute right-1 top-1">
                                    <MdShoppingCartCheckout size={21} className=" text-white active-shop hidden" />
                                </button>
                                <button className="bought-btn w-10 h-10 bg-white rounded-full items-center justify-center absolute right-1 top-1 hidden">
                                    <GiHomeGarage size={21} className=" text-sky-400" />
                                </button>
                            </div>
                            )})
                        }
                    </div>
                </div>
            </div>

            {/* Info Section */}
            <div className="about-section w-full h-auto sm:h-96 bg-sky-200 flex justify-center sm:pb-3">
                <div className="info-hold w-full sm:w-8/12 h-full flex flex-col items-center">
                    <p className="italic text-center pt-2">WheelsWizard</p>
                    <div className="w-full h-16 flex items-center justify-center">
                        <div className="bg-gray-300 w-full h-0.5 divider flex items-center justify-center">
                            <div className="flex gap-2 px-5 py-3 bg-sky-200 md:w-3/12">
                                <p className=" text-lg font-overpass font-light">Why</p>
                                <p className="font-medium text-lg font-overpass-medium">WheelsWizard</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-11/12 sm:w-10/12 h-auto sm:h-72 flex items-center flex-col gap-2 sm:gap-0">
                        <div className=" w-full h-full sm:h-5/6 bg-opacity-30 flex flex-col sm:flex-row gap-3 sm:gap-0">
                            <div className="sm:w-2/6 h-60 sm:h-full bg-black flex flex-col items-center justify-center gap-2">
                                <SiLeaderprice size={35} className=" text-white"/>
                                <p className=" text-white font-overpass">Reasonable Price</p>
                                <p className=" text-white text-xs text-center w-10/12">Experience unbeatable value with our cars at WheelsWizard. Quality meets affordability for the perfect ride. Find your dream car at a reasonable price today!</p>
                            </div>
                            <div className="sm:w-2/6 h-60 sm:h-full bg-blue-500 bg-carbackground bg-cover bg-opacity-80 bg-blend-multiply flex flex-col items-center justify-center gap-2">
                                <GiAutoRepair size={35} className=" text-white"/>
                                <p className=" text-white font-overpass">Expert Mechanics</p>
                                <p className=" text-white text-xs text-center w-10/12">Elevate your driving experience with unparalleled quality at WheelsWizard. Our cars redefine excellence, ensuring a premium and reliable ride every time.</p>
                            </div>
                            <div className="sm:w-2/6 h-60 sm:h-full bg-white flex flex-col items-center justify-center gap-2">
                                <FaShippingFast size={35} className=" text-black"/>
                                <p className=" text-black font-overpass">Quick Delivery</p>
                                <p className=" text-black text-xs text-center w-10/12">Experience swift satisfaction with our rapid car delivery at WheelsWizard. Get behind the wheel faster and enjoy your new ride sooner than you thought possible. Drive home convenience today!</p>
                            </div>
                        </div>
                        <div className="learn w-full sm:w-2/6 h-14 sm:h-1/6 bg-black text-white flex items-center justify-center font-overpass">Learn More</div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section and Footer */}
            <div className="bottom-section w-full h-auto flex flex-col bg-vector bg-no-repeat bg-cover mt-5">
                <div className="newsletter-section w-full h-96"></div>
                <Footer/>
            </div>
        </div>
     );
}
 
export default Home;