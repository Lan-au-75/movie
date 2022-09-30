import config from '~/config';

// Layout
import DefaultLayout, { Authentication } from '~/layouts';

// Page
import Home from '~/pages/Home';
import Login from '~/pages/Login';
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
        element: Login,
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
];

const privateRoutes = [];

export { publicRouter, privateRoutes };
