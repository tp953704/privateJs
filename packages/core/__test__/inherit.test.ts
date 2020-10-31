import {inherit} from "../src/inherit/index";
import {IParams} from "../src/instance/help";
import {OOPClass} from "../src/instance/body";
const PersonParams:IParams = {
    Private:{
        age:18
    },
    Public:{
        name:'EvanWang',
        sayAge:function(){
            return this.age;
        }
    }
}
const ManParams:IParams = {
    Private:{
        weight:80,
        name:'Evan',
        age:8,
    },
    Public:{
        sayWeight:function(){
            return this.age;
        }
    }
}
const Person = OOPClass(PersonParams);
const Man = inherit(ManParams,Person);
describe('OOPClass inherit about error key',function () {
    test('OOPClass inherit private key', () => {
        expect(()=>{Man.weight}).toThrowError(/private/);
        expect(()=>{Man.age}).toThrowError(/private/);
        expect(()=>{Man.name}).toThrowError(/Cannot call a private element/);
    });
    test('OOPClass inherit public function call no element', () => {
        expect(Man.sayWeight()).toEqual(8);
    });
});
