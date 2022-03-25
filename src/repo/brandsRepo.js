import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getBrands = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllBrands(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchBrands(pageNo+1,pageSize,search);
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


const addBrands = (data) => {
return api.post(`/brands`,data)
}
const updateBrands = (id,data) => {
return api.put(`/brands/${id}`,data)
}
const getAllBrands = (page,paginator) => {
return api.get(`/brands/?page=${page}&paginator=${paginator}`)
}
const getOneBrands = (id) => {
return api.get(`/brands/${id}`)
}
const searchBrands = (page,paginator,searchKey) => {
return api.get(`/brands/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteBrands = (id) => {
return api.delete(`/brands/${id}`)
}
export {getBrands,addBrands,updateBrands,getAllBrands,getOneBrands,searchBrands,deleteBrands}


