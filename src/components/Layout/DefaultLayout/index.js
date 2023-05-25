import classNames from 'classnames/bind';

//Những layout khác chứa hết trong này
import Header from '~/components/Layout/components/Header';
import SlideBar from './SlideBar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
export default function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SlideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
