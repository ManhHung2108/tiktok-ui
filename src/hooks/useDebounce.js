import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
            //mỗi lần thay đổi chưa kịp set lại state nếu gõ liên tục
        }, delay);

        //clean up
        return () => {
            clearTimeout(handler); //thì đã bị xóa
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceValue;
}
export default useDebounce;
