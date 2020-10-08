import {IParams} from "../src/instance/help";
import {OOClass} from "../src/instance/body";
import {privateBind} from "../src/instance/proxy";
const Params:IParams = {
    Private:{
        age:18
    },
    Public:{
        name:'Evan',
        sayAge:function(){
            return this.age;
        }
    }
}
describe('OOClass instance',function () {
    test('OOClass have to be an Object', () => {
        const Person = OOClass(Params);
        expect(Person._age).toEqual(18);
        expect(Person.name).toEqual('Evan');
    });
})

describe('OOClass function about private',function(){
    const proxyPerson = privateBind(OOClass(Params));
    test('private element',()=>{
        expect(()=>{proxyPerson.age}).toThrowError(/private element/);
    })
    test('public function call private element',()=>{
        expect(proxyPerson.sayAge()).toEqual(18);
    })
    test('called none element',()=>{
        expect(()=>{proxyPerson.agea}).toThrowError(/there is no agea element/);
        expect(()=>{proxyPerson._agea}).toThrowError(/there is no _agea element/);
        expect(()=>{proxyPerson._name}).toThrowError(/there is no _name element/);
    })

})

describe('OOClass set target',function(){
    const proxyPerson = privateBind(OOClass(Params));
    test('private element setting',()=>{
        expect(()=>{proxyPerson.age=5}).toThrowError(/Cannot set a private element/);
    })
    test('isCallBySelf element setting',()=>{
        expect(()=>{proxyPerson.isCallBySelf=5}).toThrowError(/Cannot set a isCallBySelf element/);
    })

})