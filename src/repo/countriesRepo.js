import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getCountries = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllCountries(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchCountries(pageNo+1,pageSize,search);
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


const addCountries = (data) => {
return api.post(`/countries`,data)
}
const updateCountries = (id,data) => {
return api.put(`/countries/${id}`,data)
}
const getAllCountries = (page,paginator) => {
return api.get(`/countries/?page=${page}&paginator=${paginator}`)
}
const getOneCountries = (id) => {
return api.get(`/countries/${id}`)
}
const searchCountries = (page,paginator,searchKey) => {
return api.get(`/countries/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteCountries = (id) => {
return api.delete(`/countries/${id}`)
}
export {getCountries,addCountries,updateCountries,getAllCountries,getOneCountries,searchCountries,deleteCountries}


