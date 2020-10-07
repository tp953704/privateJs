import {IsPrivate,IsHasPropKey,realPropKey} from "./textCheck";

function PropManager(OOClass:unknown){
    this.model = OOClass;
    this.key=new Set();
    this.isCallBySelf=false;
}
PropManager.prototype.setIsCallBySelf = function(){
    this.isCallBySelf = true;
}
PropManager.prototype.setNotCallBySelf = function(){
    this.isCallBySelf = false;
}
PropManager.prototype.mount = function(){
    const cModel = this.model;
    let aKey:Set<String> = new Set();
    for(let key in cModel){
        aKey.add(key);
    }
    this.key = aKey;
}
PropManager.prototype.isHasPropKey = function(sPropKey:string){
    return IsHasPropKey(this.key,sPropKey)
}

PropManager.prototype.realPropKey = function(sPropKey:string){
    return realPropKey(this.key,sPropKey);
}
PropManager.prototype.IsPrivate = function(sPropKey:string){
    return IsPrivate(this.key,sPropKey);
}


PropManager.create = function(OOClass:unknown){
    const newPropManager = new PropManager(OOClass);
    newPropManager.mount();
    return newPropManager;
}


export {PropManager};