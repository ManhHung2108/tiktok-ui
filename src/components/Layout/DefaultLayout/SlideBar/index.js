import classNames from 'classnames/bind';
import styles from './SlideBar.module.scss';

const cx = classNames.bind(styles);
export default function SlideBar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>SlideBar</h2>
        </aside>
    );
}
