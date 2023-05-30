import * as request from '~/utils/request';
/**Viết async await để ko cần phải sử dụng Promise(.then, .catch nữa)*/
export const search = async (q, type = 'less') => {
    try {
        //await luôn nằm trươc promise, do hàm request.get trả về 1 promise
        const res = await request.get('users/search', {
            params: {
                q: q,
                type: type,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
