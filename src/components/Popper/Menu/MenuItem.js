import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

export default function MenuItem({ data, onClick }) {
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
