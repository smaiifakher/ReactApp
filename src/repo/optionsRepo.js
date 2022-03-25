import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getOptions = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllOptions(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchOptions(pageNo+1,pageSize,search);
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


const addOptions = (data) => {
return api.post(`/options`,data)
}
const updateOptions = (id,data) => {
return api.put(`/options/${id}`,data)
}
const getAllOptions = (page,paginator) => {
return api.get(`/options/?page=${page}&paginator=${paginator}`)
}
const getOneOptions = (id) => {
return api.get(`/options/${id}`)
}
const searchOptions = (page,paginator,searchKey) => {
return api.get(`/options/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteOptions = (id) => {
return api.delete(`/options/${id}`)
}
export {getOptions,addOptions,updateOptions,getAllOptions,getOneOptions,searchOptions,deleteOptions}


