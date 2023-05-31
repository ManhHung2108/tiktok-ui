import axios from 'axios';

//console.log(process.env);

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

//gọi hàm async, await này sẽ trả về 1 promise
export const get = async (path, options = {}) => {
    const respone = await request.get(path, options);
    return respone.data;
};

export default request;

// enviroment(env): môi trường
// - Local/development: môi trường phát triển
// - Test/Staging: môi trườn test
// - UAT: môi trường chạy code mới, data giống Production
// - Production: môi trường cho người dùng cuối
