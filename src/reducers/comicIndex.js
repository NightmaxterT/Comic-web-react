import * as Types from '../constants/actionType';

var initialState=[];

const comicList=(state=initialState,action)=>{
    switch(action.type){
        case Types.GetComicAll:
        state=action.comics;
        return [...state];
        default:return [...state];
    }
}
export default comicList;