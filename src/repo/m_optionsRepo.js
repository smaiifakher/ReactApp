import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getM_Options = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllM_Options(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchM_Options(pageNo+1,pageSize,search);
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


const addM_Options = (data) => {
return api.post(`/m_options`,data)
}
const updateM_Options = (id,data) => {
return api.put(`/m_options/${id}`,data)
}
const getAllM_Options = (page,paginator) => {
return api.get(`/m_options/?page=${page}&paginator=${paginator}`)
}
const getOneM_Options = (id) => {
return api.get(`/m_options/${id}`)
}
const searchM_Options = (page,paginator,searchKey) => {
return api.get(`/m_options/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteM_Options = (id) => {
return api.delete(`/m_options/${id}`)
}
export {getM_Options,addM_Options,updateM_Options,getAllM_Options,getOneM_Options,searchM_Options,deleteM_Options}


