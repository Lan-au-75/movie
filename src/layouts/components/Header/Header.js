import { BiPlusMedical } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import config from '~/config';
import Menu from '~/components/PopPer/Menu';

const MENU_ITEMS = [
    {
        icon: 1,
        title: 'Discussions',
        to: '/discussions',
        separate: true,
    },
    {
        icon: 1,
        title: 'Lists',
        to: '/lists',
    },
    {
        icon: 1,
        title: 'Ratings',
        to: '/ratings',
    },
    {
        icon: 1,
        title: 'Watchlist',
        to: '/watchlist',
    },
    {
        icon: 1,
        title: 'Appearance: Light',
        separate: true,
        children: {
            title: 'Appearance',
            data: [
                {
                    type: 'Appearance',
                    title: 'Light',
                },
                {
                    type: 'Appearance',
                    title: 'Dark',
                },
            ],
        },
    },
    {
        icon: 1,
        title: 'Language: English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: 1,
        title: 'Edit Profile',
        to: '/profile',
        separate: true,
    },
    {
        icon: 1,
        title: 'Settings',
        to: '/settings',
    },

    {
        icon: 1,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    return (
        <div className="flex justify-center fixed top-0 bg-primary w-full shadow-2xl z-[999] ">
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
                            <li className="animation-header">Movie Trending</li>
                        </Link>
                        <Link
                            to={config.routers.popular}
                            className="flex items-center px-2 py-5 h-full hover:opacity-90"
                        >
                            <li className="animation-header">Movie Popular</li>
                        </Link>
                        <Link
                            to={config.routers.topRated}
                            className="flex items-center px-2 py-5 h-full hover:opacity-90"
                        >
                            <li className="animation-header">Movie Top</li>
                        </Link>

                        <Link
                            to={config.routers.upcoming}
                            className="flex items-center px-2 py-5 h-full hover:opacity-90"
                        >
                            <li className="animation-header">Movie Upcoming</li>
                        </Link>
                    </ul>
                </div>

                <div className="flex items-center h-16">
                    {currentUser ? (
                        <ul className="flex items-center text-white h-full w-full">
                            <BiPlusMedical className="flex items-center px-2 py-5 h-full text-[34px] cursor-pointer"></BiPlusMedical>

                            <div className="flex items-center px-2 py-5 h-full cursor-pointer ml-3">
                                <li className="border border-solid rounded border-x-white text-xs font-medium px-[4px] py-[2px] ">
                                    EN
                                </li>
                            </div>

                            <IoMdNotifications className="flex items-center px-2 py-5 h-full text-[36px] cursor-pointer ml-3"></IoMdNotifications>

                            <Menu items={MENU_ITEMS}>
                                <img
                                    className="rounded-[50%] max-w-[32px] w-full max-h-8 h-full object-cover object-center cursor-pointer ml-3"
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_100x100.jpeg?x-expires=1664938800&x-signature=WOAEBZ2%2B8yLdgrN0JwGSYqhhmIs%3D"
                                    alt="avatar"
                                />
                            </Menu>

                            <Link
                                to={config.routers.search}
                                className="flex items-center px-2 py-5 h-full hover:opacity-90 ml-3"
                            >
                                <BsSearch className="text-base mr-1"></BsSearch>
                                <li>Search</li>
                            </Link>
                        </ul>
                    ) : (
                        <ul className="flex items-center text-white h-full w-full">
                            <BiPlusMedical className="flex items-center px-2 py-5 h-full text-[34px] cursor-pointer"></BiPlusMedical>

                            <div className="flex items-center px-2 py-5 h-full cursor-pointer ml-3 ">
                                <li className="border border-solid rounded border-x-white text-xs font-medium px-[4px] py-[2px] ">
                                    EN
                                </li>
                            </div>

                            <IoMdNotifications className="flex items-center px-2 py-5 h-full text-[36px] cursor-pointer ml-3"></IoMdNotifications>

                            <Link
                                to={config.routers.trending}
                                className="flex items-center px-2 py-5 h-full hover:opacity-90 ml-3"
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
                    )}
                </div>
            </header>
        </div>
    );
}

export default Header;
