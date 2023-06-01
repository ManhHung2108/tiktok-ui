import classNames from 'classnames/bind';

import styles from './SlideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAcounts from '~/layouts/components/SuggestedAccounts';

const cx = classNames.bind(styles);
export default function SlideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {/**Khi viết thành <Home /> sẽ biến từ Component thành ReactElement */}
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAcounts label="Suggested accounts" />
            <SuggestedAcounts label="Following accounts" />
        </aside>
    );
}
