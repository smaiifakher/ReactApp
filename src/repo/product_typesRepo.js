import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getProduct_Types = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllProduct_Types(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchProduct_Types(pageNo+1,pageSize,search);
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


const addProduct_Types = (data) => {
return api.post(`/product_types`,data)
}
const updateProduct_Types = (id,data) => {
return api.put(`/product_types/${id}`,data)
}
const getAllProduct_Types = (page,paginator) => {
return api.get(`/product_types/?page=${page}&paginator=${paginator}`)
}
const getOneProduct_Types = (id) => {
return api.get(`/product_types/${id}`)
}
const searchProduct_Types = (page,paginator,searchKey) => {
return api.get(`/product_types/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteProduct_Types = (id) => {
return api.delete(`/product_types/${id}`)
}
export {getProduct_Types,addProduct_Types,updateProduct_Types,getAllProduct_Types,getOneProduct_Types,searchProduct_Types,deleteProduct_Types}


