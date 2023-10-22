import {commonAPI} from './commonApi'
import {Base_url} from './baseUrl';

// adding data
export const addAData=async(data1)=>{
    // http post request to http://localhost:4000/data for adding list in json server
    //  and return response to form component
    return await commonAPI("POST",`${Base_url}/data`,data1)
}
export const getData=async()=>{
     // http get request to http://localhost:4000/data for geting list in json server
    //  and return response to form component
    return await commonAPI("GET",`${Base_url}/data`,"")
}
console.log(getData());
export const deleteAdata=async(id)=>{
    // http delete request to http://localhost:4000/data/id for geting list in json server
    //  and return response to form component
    return await commonAPI("DELETE",`${Base_url}/data/${id}`,{})

}
export const editData=async(id,updateContent)=>{
    // http put request to http://localhost:4000/data/id for update list in json server
    //  and return response to form component
    return await commonAPI("PUT",`${Base_url}/data/${id}`,updateContent)
}