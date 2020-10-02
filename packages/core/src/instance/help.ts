export interface IParams {
    Private?: any,
    Public: any
}
export function _instanceof(left, right) {
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

export const IsPrivate = (sPropKey: String) => {
    return sPropKey.startsWith('_');
}

export const IsHasPropKey =(Class,propKey)=>{
    let privateProp = propKey;
    let publicProp = propKey;
    if(propKey.startsWith('_')){
        // 砍掉第一個字
        publicProp = propKey.substring(1,propKey.length)
    }else{
        privateProp = `_${propKey}`;
    }
    return Reflect.has(Class,publicProp) || Reflect.has(Class,privateProp);
}