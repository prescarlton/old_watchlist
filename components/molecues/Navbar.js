import { HiOutlineMenuAlt1, HiOutlineX, HiSearch } from "react-icons/hi";
import { useState } from "react";
const Navbar = () => {
    const [showFullScreen, setShowFullScreen] = useState(false);
    const navStructure = [
        {
            header: "Trending",
            children: [
                {
                    title: "Movies",
                    route: "/movies",
                },
                {
                    title: "TV Series",
                    route: "/tv-series",
                },
            ],
        },
        {
            header: "Browse",
            children: [
                {
                    title: "Movies",
                    route: "/movies",
                },
                {
                    title: "TV Series",
                    route: "/tv-series",
                },
            ],
        },
        {
            header: "Genres",
            children: [
                {
                    title: "Action",
                    route: "/action",
                },
                {
                    title: "Comedy",
                    route: "/comedy",
                },
                {
                    title: "Documentary",
                    route: "/documentary",
                },
                {
                    title: "Drama",
                    route: "/drama",
                },
                {
                    title: "Romance",
                    route: "/romance",
                },
            ],
        },
        {
            header: "Watchlist",
            children: [
                {
                    title: "My List",
                    route: "/list",
                },
            ],
        },
    ];
    return (
        <>
            <div className="navbar w-full flex justify-between p-4 lg:w-64 lg:border-r-2 lg:border-gray lg:h-full lg:flex-col lg:justify-start">
                <div className="text-4xl lg:hidden">
                    <HiOutlineMenuAlt1
                        onClick={() => setShowFullScreen(true)}
                    />
                </div>
                <div className="text-4xl font-black">Watchlist</div>
                <div className="text-4xl lg:hidden">
                    <HiSearch />
                </div>
                <div className="hidden lg:block mt-6">
                    {navStructure.map((section) => {
                        return (
                            <div key={section.header} className="text-gray mb-4">
                                <p className="text-sm">{section.header}</p>
                                <ul>
                                    {section.children.map((child) => {
                                        return (
                                            <li
                                                key={child.title}
                                                className="pl-4 my-2 text-lg border-l-highlight border-l">
                                                {child.title}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div
                className={`navbar-overlay absolute w-full top-0 bottom-0 bg-highlight p-4 flex flex-col
            ${showFullScreen ? "" : "hidden"}`}>
                <div className="overlay-top w-full text-4xl">
                    <HiOutlineX onClick={() => setShowFullScreen(false)} />
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
