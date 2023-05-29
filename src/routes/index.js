//Layouts
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Cấu hình router không cần đăng nhập
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/:nickname', component: Profile }, //vd: /@lebong95, nó không có định
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

//Cấu hình router cần đăng nhập, nếu không chuyển sang trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
