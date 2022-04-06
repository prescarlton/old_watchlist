import { HiOutlineMenuAlt1, HiOutlineX, HiSearch } from "react-icons/hi";
import { useState } from "react";
const Navbar = () => {
    const [showFullScreen, setShowFullScreen] = useState(false);
    return (
        <>
            <div className="navbar w-full flex justify-between p-4 text-4xl">
                <div>
                    <HiOutlineMenuAlt1 onClick={()=>setShowFullScreen(true)} />
                </div>
                <div className="font-black">Watchlist</div>
                <div>
                    <HiSearch />
                </div>
            </div>
            <div className={`navbar-overlay absolute w-full top-0 bottom-0 bg-highlight p-4 flex flex-col
            ${showFullScreen ? '' : 'hidden'}`}>
                <div className="overlay-top w-full text-4xl">
                    <HiOutlineX onClick={()=>setShowFullScreen(false)}/>
                </div>
                <ul className="flex-1 flex flex-col justify-center text-4xl font-black">
                    <li className="my-3">Trending</li>
                    <li className="my-3">Genres</li>
                    <li className="my-3">Watchlist</li>
                    <li className="my-3">Settings</li>
                </ul>
            </div>
        </>
    );
};
export default Navbar;
