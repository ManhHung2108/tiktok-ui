import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

//gọi hàm async, await này sẽ trả về 1 promise
export const get = async (path, options = {}) => {
    const respone = await request.get(path, options);
    return respone.data;
};

export default request;
