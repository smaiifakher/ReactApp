import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getM_Option_Values = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllM_Option_Values(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchM_Option_Values(pageNo+1,pageSize,search);
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


const addM_Option_Values = (data) => {
return api.post(`/m_option_values`,data)
}
const updateM_Option_Values = (id,data) => {
return api.put(`/m_option_values/${id}`,data)
}
const getAllM_Option_Values = (page,paginator) => {
return api.get(`/m_option_values/?page=${page}&paginator=${paginator}`)
}
const getOneM_Option_Values = (id) => {
return api.get(`/m_option_values/${id}`)
}
const searchM_Option_Values = (page,paginator,searchKey) => {
return api.get(`/m_option_values/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteM_Option_Values = (id) => {
return api.delete(`/m_option_values/${id}`)
}
export {getM_Option_Values,addM_Option_Values,updateM_Option_Values,getAllM_Option_Values,getOneM_Option_Values,searchM_Option_Values,deleteM_Option_Values}


