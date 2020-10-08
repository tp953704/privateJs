export interface IParams {
    Private?: any,
    Public: any
}
export function _instanceof(left:unknown, right:any) {
    if (
        right != null &&
        typeof Symbol !== "undefined" &&
        right[Symbol.hasInstance]
    ) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

// 只允许new方式创建class
export function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

const IsPrivateStart = (propKey: string) => {
    return propKey.startsWith('_');
}
// 存在這個元素
export const IsHasPropKey =(target:any,propKey:string):boolean=>{
    let privateProp = propKey;
    let publicProp = propKey;
    if(propKey.startsWith('_')){
        // 砍掉第一個字
        publicProp = propKey.substring(1,propKey.length)
    }else{
        privateProp = `_${propKey}`;
    }
    return Reflect.has(target,publicProp) || Reflect.has(target,privateProp);
}
export const IsPrivate = (target:any,propKey:string):boolean => {
    const realKey = realPropKey(target,propKey);
    return IsPrivateStart(realKey);
}

export function realPropKey(target:any,propKey:string){
    if(Reflect.has(target,propKey)){
        return propKey;
    }
    if(Reflect.has(target,`_${propKey}`)){
        return `_${propKey}`;
    }
    throw new Error(`there is no ${propKey} element`)  
}