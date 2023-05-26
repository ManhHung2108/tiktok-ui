//libarys
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

//files
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
//bind styles vào trả fuction
//dùng cái này làm class khi đó giúp viết class name chứa được dấu -

// console.log(images.logo);
export default function Header() {
    const [searchResult, setSearchResult] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 0);
    // }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => {
                        return (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Account</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        );
                    }}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search account and videos" spellCheck={false} />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Up Load
                    </Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}
