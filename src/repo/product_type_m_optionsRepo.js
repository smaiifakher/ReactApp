import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getProduct_Type_M_Options = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllProduct_Type_M_Options(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchProduct_Type_M_Options(pageNo+1,pageSize,search);
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


const addProduct_Type_M_Options = (data) => {
return api.post(`/product_type_m_options`,data)
}
const updateProduct_Type_M_Options = (id,data) => {
return api.put(`/product_type_m_options/${id}`,data)
}
const getAllProduct_Type_M_Options = (page,paginator) => {
return api.get(`/product_type_m_options/?page=${page}&paginator=${paginator}`)
}
const getOneProduct_Type_M_Options = (id) => {
return api.get(`/product_type_m_options/${id}`)
}
const searchProduct_Type_M_Options = (page,paginator,searchKey) => {
return api.get(`/product_type_m_options/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteProduct_Type_M_Options = (id) => {
return api.delete(`/product_type_m_options/${id}`)
}
export {getProduct_Type_M_Options,addProduct_Type_M_Options,updateProduct_Type_M_Options,getAllProduct_Type_M_Options,getOneProduct_Type_M_Options,searchProduct_Type_M_Options,deleteProduct_Type_M_Options}


