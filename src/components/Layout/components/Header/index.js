import React from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);
//bind styles vào trả fuction
//dùng cái này làm class khi đó giúp viết class name chứa được dấu -

export default function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}
