import config from '~/config';

// Layout
import DefaultLayout, { Authentication } from '~/layouts';

// Page
import Home from '~/pages/Home';
import Search from '~/pages/Search';
import SignUp from '~/pages/SignUp';
import Detail from '~/pages/Movie/Detail';
import Popular from '~/pages/Movie/Popular';
import Watching from '~/pages/Movie/Watching';
import WatchingTV from '~/pages/Movie/Watching/WatchingTV';
import TopRated from '~/pages/Movie/TopRated';
import Trending from '~/pages/Movie/Trending';
import Upcoming from '~/pages/Movie/Upcoming';
import LoginScreen from '~/pages/LoginScreen';
import DetailTV from '~/pages/Movie/Detail/DetailTV';

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

    {
        path: config.routers.detailTV,
        element: DetailTV,
        layout: DefaultLayout,
    },

    {
        path: config.routers.watchingMovie,
        element: Watching,
        layout: DefaultLayout,
    },

    {
        path: config.routers.watchingTV,
        element: WatchingTV,
        layout: DefaultLayout,
    },
];

const privateRoutes = [];

export { publicRouter, privateRoutes };
