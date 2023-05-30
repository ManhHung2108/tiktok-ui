//Layouts
import { HeaderOnly } from '~/components/Layout';

//Pages
import routesConfig from '~/config/routes';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Cấu hình router không cần đăng nhập
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile }, //vd: /@lebong95, nó không có định
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

//Cấu hình router cần đăng nhập, nếu không chuyển sang trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
