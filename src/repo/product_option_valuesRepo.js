import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getProduct_Option_Values = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllProduct_Option_Values(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchProduct_Option_Values(pageNo+1,pageSize,search);
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


const addProduct_Option_Values = (data) => {
return api.post(`/product_option_values`,data)
}
const updateProduct_Option_Values = (id,data) => {
return api.put(`/product_option_values/${id}`,data)
}
const getAllProduct_Option_Values = (page,paginator) => {
return api.get(`/product_option_values/?page=${page}&paginator=${paginator}`)
}
const getOneProduct_Option_Values = (id) => {
return api.get(`/product_option_values/${id}`)
}
const searchProduct_Option_Values = (page,paginator,searchKey) => {
return api.get(`/product_option_values/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteProduct_Option_Values = (id) => {
return api.delete(`/product_option_values/${id}`)
}
export {getProduct_Option_Values,addProduct_Option_Values,updateProduct_Option_Values,getAllProduct_Option_Values,getOneProduct_Option_Values,searchProduct_Option_Values,deleteProduct_Option_Values}


