# privateJs
Want to using Class with "protect public private" in Javascript? This is a Javascript library for develop who love program by OOP .

## who is suitable to use PrivateJs
1. People who love to develop by Object Oriented Programming(OOP)
2. Think `ES6 Classes` is a little redundant or unaccustomed to use

## Feature
1. give up the prototype to reduce Unpredictable situation when we use inherit
2. Proxy are heavily used in package

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
```

## package
1. [core](https://github.com/tp953704/privateJs/tree/master/packages/core)


## License
MIT
