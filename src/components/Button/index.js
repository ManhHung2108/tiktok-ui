import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disable = false,
    rounded = false,
    small = false,
    large = false,
    // size,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    //console.log(small);

    let Comp = 'button';
    //component mặc định là thẻ button
    const props = {
        onClick,
        ...passProps,
        //lấy tất cả các props còn lại
    };

    //nếu có disable thì xóa onClick đi
    if (disable) {
        Object.keys(props).forEach((key) => {
            //console.log(key);

            //check nếu key bắt đầu là on (sự kiện) thì xóa
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className, //custom riêng, key là giá trị của className
        primary, //nếu có primary sẽ được thêm vào nút
        outline,
        text,
        disable,
        rounded,
        [styles.small]: small,
        // small: size === 'small' ? true : false, cách khác
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
