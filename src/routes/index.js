//Layouts
import { HeaderOnly } from '~/layouts';

//Pages
import config from '~/config';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Cấu hình router không cần đăng nhập
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile }, //vd: /@lebong95, nó không có định
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

//Cấu hình router cần đăng nhập, nếu không chuyển sang trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
