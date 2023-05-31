import PropTypes from 'prop-types';

import Button from '~/components/Button/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    //viết riêng như này để viết thêm được logic, lúc có lúc không
    const classes = cx('menu-item', {
        separate: data.separate,
        //cái nào có mới thêm class này
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.protoTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
