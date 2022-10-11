import config from '~/config';

// Layout
import DefaultLayout, { Authentication } from '~/layouts';

// Page
import Home from '~/pages/Home';
import LoginScreen from '~/pages/LoginScreen';
import Detail from '~/pages/Movie/Detail/DetailAPI';
import Popular from '~/pages/Movie/Popular';
import TopRated from '~/pages/Movie/TopRated';
import Trending from '~/pages/Movie/Trending';
import Upcoming from '~/pages/Movie/Upcoming';
import Search from '~/pages/Search';
import SignUp from '~/pages/SignUp';

const publicRouter = [
    {
        path: config.routers.home,
        element: Home,
        layout: DefaultLayout,
    },
    {
        path: config.routers.login,
        element: LoginScreen,
        layout: Authentication,
    },
    {
        path: config.routers.signUp,
        element: SignUp,
        layout: Authentication,
    },

    {
        path: config.routers.search,
        element: Search,
        layout: DefaultLayout,
    },
    {
        path: config.routers.trending,
        element: Trending,
        layout: DefaultLayout,
    },
    {
        path: config.routers.popular,
        element: Popular,
        layout: DefaultLayout,
    },
    {
        path: config.routers.topRated,
        element: TopRated,
        layout: DefaultLayout,
    },
    {
        path: config.routers.upcoming,
        element: Upcoming,
        layout: DefaultLayout,
    },

    {
        path: config.routers.detail,
        element: Detail,
        layout: DefaultLayout,
    },
];

const privateRoutes = [];

export { publicRouter, privateRoutes };
