const IsPrivateStart = (sPropKey: string) => {
    return sPropKey.startsWith('_');
}

export const IsHasPropKey =(propKeyAll:Set<string>,propKey:string)=>{
    let privateProp = propKey;
    let publicProp = propKey;
    if(IsPrivateStart(propKey)){
        // 砍掉第一個字
        publicProp = propKey.substring(1,propKey.length)
    }else{
        privateProp = `_${propKey}`;
    }
    return propKeyAll.has(publicProp) || propKeyAll.has(privateProp);
}

export const realPropKey = (propKeyAll:Set<string>,propKey:string):string => {
    if(!IsHasPropKey(propKeyAll,propKey)){
        throw new Error(`there is no element ${propKey}`)
    }
    if(IsPrivateStart(propKey)){
        return propKey.substring(1,propKey.length);
    }
    return `_${propKey}`;
}

export const IsPrivate = (propKeyAll:Set<string>,propKey:string):boolean => {
    if(!IsHasPropKey(propKeyAll,propKey)){
        throw new Error(`there is no element ${propKey}`)
    }
    const realKey = realPropKey(propKeyAll,propKey);
    return IsPrivateStart(realKey);
}