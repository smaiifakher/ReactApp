import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getCategories = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllCategories(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchCategories(pageNo+1,pageSize,search);
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


const addCategories = (data) => {
return api.post(`/categories`,data)
}
const updateCategories = (id,data) => {
return api.put(`/categories/${id}`,data)
}
const getAllCategories = (page,paginator) => {
return api.get(`/categories/?page=${page}&paginator=${paginator}`)
}
const getOneCategories = (id) => {
return api.get(`/categories/${id}`)
}
const searchCategories = (page,paginator,searchKey) => {
return api.get(`/categories/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteCategories = (id) => {
return api.delete(`/categories/${id}`)
}
export {getCategories,addCategories,updateCategories,getAllCategories,getOneCategories,searchCategories,deleteCategories}


