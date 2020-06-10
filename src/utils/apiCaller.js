import axios from 'axios';
import * as Config from '../constants/config';

export default function callApi(method='GET',endPoint,data){
    return axios({
        method:method,
        url:`${Config.api_URL}/${endPoint}`,
        data:data
    }).catch(err=>{
        console.log(err);
    })
}