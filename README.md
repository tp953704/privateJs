# privateJs
<p align="center">
<img src="https://img.shields.io/npm/dy/@private-js/core" alt="private-js|download">  
<img src="https://img.shields.io/github/size/tp953704/privateJs/packages/core/dist/index.es.min.js" alt="private-js|size">  
<img src="https://img.shields.io/npm/l/@private-js/core" alt="private-js|MIT">  
<img src="https://travis-ci.org/tp953704/privateJs.svg?branch=master" alt="private-js|CI">     

</p>


Want to using Class with "protect public private" in Javascript? This is a Javascript library for develop who love program by OOP .

## who is suitable to use PrivateJs
1. People who love to develop by Object Oriented Programming(OOP)
2. Think `ES6 Classes` is a little redundant or unaccustomed to use

## Feature
1. give up the prototype to reduce Unpredictable situation when we use inherit
2. Proxy are heavily used in package
### 3. PrivateJs help you to deal with every behavior about 'private' & 'public'

## Intro
privateJs is a javascript tool help you develop by OOP like Java and C#.

```
const Params = {
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
const Person = OOPClass(PersonParams);

Person.age // error `Cannot call a private element`
Person.sayAge() // 18
Person.name //'EvanWang'
```

## package
1. [core](https://github.com/tp953704/privateJs/tree/master/packages/core)

## License
MIT
