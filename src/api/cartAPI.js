import { axiosClient } from './axiosClient';
const CartApi = {
    getAll(){
        const url = `/carts`;
        return axiosClient.get(url);
    },
    add(cart){
        const url = `/carts`;
        return axiosClient.post(url,cart);
    },
    remove(id){
        const url = `/carts/${id}`;
        return axiosClient.delete(url);
    },
}