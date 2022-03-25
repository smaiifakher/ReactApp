import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getProduct_M_Option_Values = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllProduct_M_Option_Values(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchProduct_M_Option_Values(pageNo+1,pageSize,search);
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


const addProduct_M_Option_Values = (data) => {
return api.post(`/product_m_option_values`,data)
}
const updateProduct_M_Option_Values = (id,data) => {
return api.put(`/product_m_option_values/${id}`,data)
}
const getAllProduct_M_Option_Values = (page,paginator) => {
return api.get(`/product_m_option_values/?page=${page}&paginator=${paginator}`)
}
const getOneProduct_M_Option_Values = (id) => {
return api.get(`/product_m_option_values/${id}`)
}
const searchProduct_M_Option_Values = (page,paginator,searchKey) => {
return api.get(`/product_m_option_values/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteProduct_M_Option_Values = (id) => {
return api.delete(`/product_m_option_values/${id}`)
}
export {getProduct_M_Option_Values,addProduct_M_Option_Values,updateProduct_M_Option_Values,getAllProduct_M_Option_Values,getOneProduct_M_Option_Values,searchProduct_M_Option_Values,deleteProduct_M_Option_Values}


