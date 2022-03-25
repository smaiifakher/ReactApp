import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getMarkets = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllMarkets(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchMarkets(pageNo+1,pageSize,search);
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


const addMarkets = (data) => {
return api.post(`/markets`,data)
}
const updateMarkets = (id,data) => {
return api.put(`/markets/${id}`,data)
}
const getAllMarkets = (page,paginator) => {
return api.get(`/markets/?page=${page}&paginator=${paginator}`)
}
const getOneMarkets = (id) => {
return api.get(`/markets/${id}`)
}
const searchMarkets = (page,paginator,searchKey) => {
return api.get(`/markets/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteMarkets = (id) => {
return api.delete(`/markets/${id}`)
}
export {getMarkets,addMarkets,updateMarkets,getAllMarkets,getOneMarkets,searchMarkets,deleteMarkets}


