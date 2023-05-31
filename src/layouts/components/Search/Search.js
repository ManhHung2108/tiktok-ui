import { useState, useEffect, useRef } from 'react';
//import axios from 'axios';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//file của chúng ta

// import * as request from '~/utils/request';
import * as searchServices from '~/services/searchService'; //lấy từng cái lẻ đưa vào obj searchService
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    //console.log('1');

    const inputRef = useRef();

    useEffect(() => {
        //không có thì thoát
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        // /**Viết async await để ko cần phải sử dụng Promise(.then, .catch nữa)*/
        // const fetchApi = async () => {
        //     try {
        //         //await luôn nằm trươc promise, do hàm request.get trả về 1 promise
        //         const res = await request.get('users/search', {
        //             params: {
        //                 q: debouncedValue,
        //                 type: 'less',
        //             },
        //         });
        //         //Khi nhận xong thì mới chạy đến dòng này
        //         searchResult(res.data);
        //         setLoading(false);
        //     } catch (err) {
        //         setLoading(false);
        //     }
        // };

        //Tách file riêng
        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debouncedValue);
            //console.log(result);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();

        //Cài axios: npm install axios
        //sử dụng axios lấy dữ liệu từ api thay cho fetch
        //request
        // request
        //     .get(`users/search`, {
        //         params: {
        //             q: debouncedValue,
        //             type: 'less',
        //         },
        //     })
        //     .then((res) => {
        //         console.log(res);

        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });

        //Có 2 cách gọi API:
        //1. XMLHttpRequest: ngày nay vẫn sử dụng nhiều
        //2. Fetch: giới thiệu trong ES6

        //- Mã hóa dữ liệu sang định khác khi truyền vào url
        //để nhỡ đụng chạm các ký tự gây hiểu nhầm url thì sẽ mã hóa đi thành ký tự hợp lệ
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedValue)}&type=less`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });
    }, [debouncedValue]);

    //Bấm clear xóa bỏ text input, xóa kết quả tìm kiếm đi, focus lại input
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus(); //method của DOM element
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (event) => {
        const searchValue = event.target.value;
        //check không cho nhập dấu cách đầu tiên
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    //console.log(1);
    return (
        <HeadlessTippy
            interactive
            // appendTo={() => document.body}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => {
                return (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {searchResult.map((result) => {
                                console.log('tippy');
                                return <AccountItem key={result.id} data={result} />;
                            })}
                        </PopperWrapper>
                    </div>
                );
            }}
            /**Bấm ra ngoài tippy này */
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search account and videos"
                    spellCheck={false}
                    onChange={handleChange}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />

                {/*Khi có searchValue và không có loading, mới hiện nút clear*/}
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button
                    className={cx('search-btn')}
                    onMouseDown={(e) => {
                        //Xử lý chặn hành vi mặc định khi click chuột xuống
                        //không cho focus css vào
                        e.preventDefault();
                    }}
                >
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}
export default Search;
