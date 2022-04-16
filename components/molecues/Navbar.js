import { FiSearch, FiX, FiUser } from "react-icons/fi";
import { useState } from "react";
import CardGrid from "./CardGrid";
import SearchSection from "../atoms/SearchSection";
const Navbar = () => {
    const [showFullScreen, setShowFullScreen] = useState(false);
    return (
        <>
            <div className="navbar w-full flex justify-between p-4 items-center fixed z-10 bg-black shadow-sm shadow-black">
                <div className="text-2xl font-bold lowercase">WatchList</div>
                <div className="icons lg:hidden flex">
                    <div className="text-2xl ml-4">
                        <FiSearch onClick={() => setShowFullScreen(true)} />
                    </div>
                </div>
            </div>
            <div
                className={`navbar-overlay fixed w-full min-h-screen bg-black p-4 flex flex-col overflow-auto z-20
            ${showFullScreen ? "" : "hidden"}`}>
                <div className="overlay-top w-full text-2xl flex justify-between">
                    <h1 className="font-bold">watchlist</h1>
                    <FiX onClick={() => setShowFullScreen(false)} />
                </div>
                <div className="searchWrapper flex relative w-full bg-white rounded-md my-2">
                    <FiSearch className="mx-2 my-1 text-2xl text-slate-400" />
                    <input
                        placeholder="Search by title, person, genre..."
                        className="py-1 grow"
                    />
                </div>
                <SearchSection
                    title="Lists"
                    list={["My watchlist", "Official Collections"]}
                />
                <SearchSection
                    title="Browse by"
                    list={[
                        "Genre",
                        "Top Rated",
                        "Popular",
                        "Upcoming",
                        "Latest",
                        "Now Playing",
                    ]}
                />
            </div>
        </>
    );
};
export default Navbar;
