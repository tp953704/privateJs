import {IParams,IsPrivate,IsHasPropKey} from "../instance/help";
import {privateBind} from "../instance/private";
import {OOClass} from "../instance/body";

export const inherit = (childParams:IParams,Parent:any)=>{
    const newClass = OOClass(childParams);
    for(let sParentProto in Parent){
        if(!IsPrivate(sParentProto)){
            if(!IsHasPropKey(newClass,sParentProto)){
                const value = Reflect.get(newClass,sParentProto);
                Reflect.set(newClass,sParentProto,value)
            }
        }
    }
    return privateBind(newClass);
}
