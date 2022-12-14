import { useEffect, useState } from 'react';
import { BiPlusMedical } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';
import { BsChevronCompactRight, BsMoon, BsListUl } from 'react-icons/bs';
import { IoLanguageOutline } from 'react-icons/io5';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { AiOutlineAreaChart, AiOutlineEdit, AiOutlineSetting, AiOutlineLogin } from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

import { handleScrollOnTop } from '~/handleEvent';
import images from '~/assets/images';
import config from '~/config';
import Menu from '~/components/PopPer/Menu';
import Image from '~/components/Image';

const MENU_ITEMS = [
    {
        leftIcon: <VscCommentDiscussion />,
        title: 'Discussions',
        to: '/discussions',
        separate: true,
    },
    {
        leftIcon: <BsListUl />,
        title: 'Lists',
        to: '/lists',
    },
    {
        leftIcon: <AiOutlineAreaChart />,
        title: 'Ratings',
        to: '/ratings',
    },
    {
        leftIcon: <MdLocalMovies />,
        title: 'Watchlist',
        to: '/watchlist',
    },
    {
        leftIcon: <BsMoon />,
        rightIcon: <BsChevronCompactRight />,
        title: 'Appearance: Light',
        separate: true,
        children: {
            title: 'Appearance',
            data: [
                {
                    type: 'Appearance',
                    title: 'Light',
                    separate: true,
                },
                {
                    type: 'Appearance',
                    title: 'Dark',
                },
            ],
        },
    },
    {
        leftIcon: <IoLanguageOutline />,
        rightIcon: <BsChevronCompactRight />,
        title: 'Language: English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                    separate: true,
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: '',
                    code: '',
                    title: '??????????????',
                },
                {
                    type: '',
                    code: '',
                    title: '???????????????????????? (????????????)',
                },
                {
                    type: '',
                    code: '',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    type: '',
                    code: '',
                    title: '??e??tina (??esk?? republika)',
                },
                {
                    type: '',
                    code: '',
                    title: 'Deutsch',
                },
                {
                    type: '',
                    code: '',
                    title: '???????????????? (????????????)',
                },
                {
                    type: '',
                    code: '',
                    title: 'Espa??ol',
                },
                {
                    type: '',
                    code: '',
                    title: 'Suomi (Suomi)',
                },
                {
                    type: '',
                    code: '',
                    title: 'Filipino (Pilipinas)',
                },
                {
                    type: '',
                    code: '',
                    title: 'Fran??ais',
                },
                {
                    type: '',
                    code: '',
                    title: '?????????? (??????????)',
                },
                {
                    type: '',
                    code: '',
                    title: 'Magyar (Magyarorsz??g)',
                },
                {
                    type: '',
                    code: '',
                    title: 'Bahasa Indonesia (Indonesia)',
                },
                {
                    type: '',
                    code: '',
                    title: 'Italiano (Italia)',
                },
                {
                    type: '',
                    code: '',
                    title: '?????????????????????',
                },
                {
                    type: '',
                    code: '',
                    title: 'Basa Jawa (Indonesia)',
                },
                {
                    type: '',
                    code: '',
                    title: '??????????????? (?????????????????????)',
                },
                {
                    type: '',
                    code: '',
                    title: '????????? (????????????)',
                },
                {
                    type: '',
                    code: '',
                    title: 'Bahasa Melayu (Malaysia)',
                },
                {
                    type: '',
                    code: '',
                    title: '?????????????????? (??????????????????)',
                },
            ],
        },
    },
    {
        leftIcon: <AiOutlineEdit />,
        title: 'Edit Profile',
        to: '/profile',
        separate: true,
    },
    {
        leftIcon: <AiOutlineSetting />,
        title: 'Settings',
        to: '/settings',
    },

    {
        leftIcon: <AiOutlineLogin />,
        title: 'Log out',
        href: '/',
        separate: true,
        currentUser: true,
    },
];

function Header() {
    const state = useSelector((state) => state.currentUsers);

    const currentUser = !!state;

    // Header Scroll
    const [scrollY, setScrollY] = useState(0);
    const [navBar, setNavBar] = useState(false);

    useEffect(() => {
        const handleScrollY = () => {
            if (window.scrollY > 106) {
                setScrollY(window.scrollY);
                setNavBar(true);
            }

            if (window.scrollY < scrollY) {
                setNavBar(false);
            }
        };

        window.addEventListener('scroll', handleScrollY);

        return () => window.removeEventListener('scroll', handleScrollY);
    }, [scrollY]);

    return (
        <div className={clsx('header', navBar ? 'navBar-down' : 'navBar-up')}>
            <header className="max-w-headerWidth items-center flex justify-between w-full px-10">
                <div className="flex items-center h-[var(--header-height)]">
                    <Link to={config.routers.home} className="flex items-center w-[228px] h-full px-2 py-5">
                        <Image src={images.logo} alt="Logo TMDB" className=" w-full h-5" />
                    </Link>
                    <ul className="flex items-center text-white h-full w-full">
                        <Link
                            to={config.routers.trending}
                            className="flex items-center px-2 py-5 h-full hover:opacity-90"
                            onClick={handleScrollOnTop}
                        >
                            <li className="animation-header">movie trending</li>
                        </Link>
                        <Link
                            to={config.routers.popular}
                            className="flex items-center px-2 py-5 h-full hover:opacity-90"
                            onClick={handleScrollOnTop}
                        >
                            <li className="animation-header">movie popular</li>
                        </Link>
                        <Link
                            to={config.routers.topRated}
                            className="flex items-center px-2 py-5 h-full hover:opacity-90"
                            onClick={handleScrollOnTop}
                        >
                            <li className="animation-header">movie top</li>
                        </Link>

                        <Link
                            to={config.routers.upcoming}
                            className="flex items-center px-2 py-5 h-full hover:opacity-90"
                            onClick={handleScrollOnTop}
                        >
                            <li className="animation-header">movie upcoming</li>
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
                                <Image
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
                                to={config.routers.login}
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
