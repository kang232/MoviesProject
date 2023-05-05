import config from '../components/Config';
// Layouts
import { HeaderOnly } from '../layouts';

// Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import Live from '../pages/Live';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home, layout: null},
    { path: config.routes.current, component: Following },
    { path: config.routes.nowplaying, component: Live },
    { path: config.routes.toprate, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };