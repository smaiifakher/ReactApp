import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getShops = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllShops(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchShops(pageNo+1,pageSize,search);
        } catch(err) {
            return {
                data:[],
                total:0
            }
        }
    }
    if (
    res &&
    res.data &&
    res.data.data &&
    res.data.data.data &&
    res.data.data.data.length > 0) {
    return res.data.data;
    } else {
        return {
            data:[],
            total:0
        }
    }
}


const addShops = (data) => {
return api.post(`/shops`,data)
}
const updateShops = (id,data) => {
return api.put(`/shops/${id}`,data)
}
const getAllShops = (page,paginator) => {
return api.get(`/shops/?page=${page}&paginator=${paginator}`)
}
const getOneShops = (id) => {
return api.get(`/shops/${id}`)
}
const searchShops = (page,paginator,searchKey) => {
return api.get(`/shops/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteShops = (id) => {
return api.delete(`/shops/${id}`)
}
export {getShops,addShops,updateShops,getAllShops,getOneShops,searchShops,deleteShops}


