import {IsPrivate,IsHasPropKey,realPropKey} from "../src/prop-manager/textCheck";
import {PropManager} from "../src/prop-manager/index";
describe('about check prop',function () {
    test('textCheck Function IsPrivateStart|IsHasPropKey|realPropKey', () => {
        const set = new Set(['a','_b','c','d']); 
        expect(IsHasPropKey(set,'a')).toEqual(true);
        expect(realPropKey(set,'_a')).toEqual('a');
        expect(realPropKey(set,'b')).toEqual('_b');
        expect(IsPrivate(set,'_c')).toEqual(false);
        expect(IsPrivate(set,'b')).toEqual(true);
    });

    test('check PropManager proto',() => {
        const Person = {
            _age:18,
            name:10
        }
        const propManager = PropManager.create(Person);
        
        expect(propManager.isHasPropKey('age')).toEqual(true);
        expect(propManager.realPropKey('age')).toEqual('_age');
        expect(propManager.realPropKey('_name')).toEqual('name');
        expect(propManager.IsPrivate('_name')).toEqual(false);
        expect(propManager.IsPrivate('age')).toEqual(true);
    })
})


