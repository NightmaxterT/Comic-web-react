import * as Types from '../constants/actionType';
import callApi from '../utils/apiCaller';

export const actGetComicAllRequest=()=>{
    return dispatch=>{
        return callApi('GET','comics',null).then(res=>{
            dispatch(actGetComicAll(res.data))
        })
    }
}
export const actGetComicAll=(comics)=>{
    return{
        type:Types.GetComicAll,
        comics
    }
}