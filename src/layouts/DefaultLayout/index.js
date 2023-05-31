import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

//Những layout khác chứa hết trong này
import Header from '~/layouts/components/Header';
import SlideBar from './SlideBar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
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

DefaultLayout.protoTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
