import axios from 'axios'

export const commonAPI = async (method, url, data) => {
    let reqconfig = {
        method, url, data, headers: {
            "content-Type": "application/json"
        }
    }
    return await axios(reqconfig).then(
        (result)=>{
            return result
        }
    ).catch((err)=>{
        return err
    })
}