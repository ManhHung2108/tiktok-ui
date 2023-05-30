//thư viện
import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

//của chúng ta
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

//default function
const defaultfn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultfn }) {
    //đầu tiên là obj cấp đầu tiên
    const [history, setHistory] = useState([{ data: items }]);

    //phần tử cuối của obj
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            //check xem có children không
            //!! chuyển đổi sang kiểu bool
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            //console.log(item.children);

                            setHistory((prev) => [...prev, item.children]);
                            //push thêm vào mảng tí mới quay lại được
                            //nếu setState sẽ mất
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            //visible //luon hien
            delay={[0, 700]} //show luôn, hide sau 700ms
            offset={[12, 8]} //chiều ngang, chiều cao cách so với thẻ cha
            placement="bottom-end"
            render={(attrs) => {
                return (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 && (
                                <Header
                                    title="Language"
                                    onBack={() => {
                                        //xóa đi phần tử cuối
                                        //cắt lấy từ 0 đến phần tử gần cuối
                                        setHistory((prev) => prev.slice(0, prev.length - 1));
                                    }}
                                />
                            )}
                            <div className={cx('menu-body')}>{renderItems()}</div>
                        </PopperWrapper>
                    </div>
                );
            }}
            onHidden={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
            hideOnClick={hideOnClick}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
