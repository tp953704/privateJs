import {IParams} from "./help";
import {privateBind} from "./proxy";

export function OOClass(Params:IParams){
  const { Private,Public } = Params;
  const newObj = Object.create(null);
  for(let key in Private){
      newObj[`_${key}`]=Private[key];
  }
  for(let key in Public){
      newObj[`${key}`]=Public[key];
  }
  return newObj;
}

export const OOPClass = (Params:IParams)=>{
  return privateBind(OOClass(Params));
}