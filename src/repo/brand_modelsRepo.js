import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getBrand_Models = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllBrand_Models(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchBrand_Models(pageNo+1,pageSize,search);
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


const addBrand_Models = (data) => {
return api.post(`/brand_models`,data)
}
const updateBrand_Models = (id,data) => {
return api.put(`/brand_models/${id}`,data)
}
const getAllBrand_Models = (page,paginator) => {
return api.get(`/brand_models/?page=${page}&paginator=${paginator}`)
}
const getOneBrand_Models = (id) => {
return api.get(`/brand_models/${id}`)
}
const searchBrand_Models = (page,paginator,searchKey) => {
return api.get(`/brand_models/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteBrand_Models = (id) => {
return api.delete(`/brand_models/${id}`)
}
export {getBrand_Models,addBrand_Models,updateBrand_Models,getAllBrand_Models,getOneBrand_Models,searchBrand_Models,deleteBrand_Models}


