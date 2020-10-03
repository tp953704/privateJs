import {IsPrivate} from "./help";

function realPropKey(target:any,propKey:any):String{
    if(!Reflect.has(target, propKey)){
        if(!Reflect.has(target, `_${propKey}`)){
            throw new TypeError(`there is no ${propKey} element`);
        }else{
            propKey = `_${propKey}`;
        }
    }
    return propKey;
}
// 處理private
const privateHandler = {
    get:function (target:any, propKey:any, receiver:any) {
        // 是否命名要加 _
        propKey = realPropKey(target,propKey);
        // 是否自己函式回CALL
        if(!Reflect.has(target, 'isCallBySelf')){
            if(IsPrivate(propKey)){
                throw new TypeError("Cannot call a private element");
            }
            Reflect.set(target, 'isCallBySelf', true)
        }else{
            Reflect.deleteProperty(target, 'isCallBySelf')
        }
        return Reflect.get(target, propKey, receiver);
    },
}

export const privateBind =(OOClass:any)=>{
    return new Proxy(OOClass, privateHandler);
}
