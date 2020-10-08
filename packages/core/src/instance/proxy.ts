import {IsPrivate,realPropKey,IsHasPropKey} from "./help";

// 處理private
const privateHandler = {
    get:function (target:any, propKey:string, receiver:any) {
        // 是否命名要加 _
        propKey = realPropKey(target,propKey);
        // 是否自己函式回CALL
        if(!IsHasPropKey(target, 'isCallBySelf')){
            if(IsPrivate(target,propKey)){
                throw new TypeError("Cannot call a private element");
            }
            Reflect.set(target, 'isCallBySelf', true)
        }else{
            Reflect.deleteProperty(target, 'isCallBySelf')
        }
        return Reflect.get(target, propKey, receiver);
    },
    set:function(target:any, propKey:string,value:any, receiver:any){
        if(propKey === 'isCallBySelf'){
            throw new TypeError("Cannot set a isCallBySelf element");
        }
        if(IsPrivate(target,propKey)){
            throw new TypeError("Cannot set a private element");
        }
        return true;
    }
}

export const privateBind =(OOClass:any)=>{
    return new Proxy(OOClass, privateHandler);
}
