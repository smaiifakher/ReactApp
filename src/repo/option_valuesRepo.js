import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getOption_Values = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllOption_Values(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchOption_Values(pageNo+1,pageSize,search);
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


const addOption_Values = (data) => {
return api.post(`/option_values`,data)
}
const updateOption_Values = (id,data) => {
return api.put(`/option_values/${id}`,data)
}
const getAllOption_Values = (page,paginator) => {
return api.get(`/option_values/?page=${page}&paginator=${paginator}`)
}
const getOneOption_Values = (id) => {
return api.get(`/option_values/${id}`)
}
const searchOption_Values = (page,paginator,searchKey) => {
return api.get(`/option_values/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteOption_Values = (id) => {
return api.delete(`/option_values/${id}`)
}
export {getOption_Values,addOption_Values,updateOption_Values,getAllOption_Values,getOneOption_Values,searchOption_Values,deleteOption_Values}


