import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

import config from '~/config';
import images from '~/assets/images';

function Header() {
    return (
        <div className="flex justify-center fixed top-0 bg-primary w-full shadow-2xl overflow-hidden z-[999]  ">
            <header className="max-w-headerWidth flex justify-between w-full px-10">
                <div className="flex items-center h-[var(--header-height)]">
                    <Link to={config.routers.home} className="flex items-center w-[228px] h-full px-2 py-5">
                        <img src={images.logo} alt="Logo TMDB" className=" w-full h-5" />
                    </Link>
                    <ul className="flex items-center text-white h-full w-full">
                        <Link
                            to={config.routers.trending}
                            className="flex items-center px-2 py-5 h-full hover:opacity-90"
                        >
                            <li>Movie Trending</li>
                        </Link>
                        <Link
                            to={config.routers.popular}
                            className="flex items-center px-2 py-5 h-full hover:opacity-90"
                        >
                            <li>Movie Popular</li>
                        </Link>
                        <Link
                            to={config.routers.topRated}
                            className="flex items-center px-2 py-5 h-full hover:opacity-90"
                        >
                            <li>Movie Top</li>
                        </Link>

                        <Link
                            to={config.routers.upcoming}
                            className="flex items-center px-2 py-5 h-full hover:opacity-90"
                        >
                            <li>Movie Upcoming</li>
                        </Link>
                    </ul>
                </div>

                <div className="flex items-center h-16">
                    <ul className="flex items-center text-white h-full w-full">
                        <Link
                            to={config.routers.trending}
                            className="flex items-center px-2 py-5 h-full hover:opacity-90"
                        >
                            <li>Sign In</li>
                        </Link>

                        <Link
                            to={config.routers.search}
                            className="flex items-center px-2 py-5 h-full hover:opacity-90 ml-3"
                        >
                            <BsSearch className="text-base mr-1"></BsSearch>
                            <li>Search</li>
                        </Link>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;
