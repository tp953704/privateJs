import {IParams} from "../src/instance/help";
import {OOClass} from "../src/instance/body";
const Params:IParams = {
    Private:{
        age:18
    },
    Public:{
        name:'Evan',
        say:function(){
            return this.name;
        }
    }
}
describe('OOClass instance',function () {
    test('OOClass have to be an Object', () => {
        const Person = OOClass(Params);
        expect(Person._age).toEqual(18)
    });
})
