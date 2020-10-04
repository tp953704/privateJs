# @private-js/core

## Install
```
npm install -S @private-js/core

```

## Intro
There are just two simple way to use `@private-js/core`

1. OOPClass(params)
   > to `define` & `new` a Class 

```javascript
import {OOPClass} from "@private-js/core";
const Person = OOPClass({
    Private:{
        age:18
    },
    Public:{
        name:'EvanWang',
        sayAge:function(){
            return this.age;
        }
    }
})

Person.age // error `Cannot call a private element`
Person.sayAge() // 18
Person.name //'EvanWang'

```

2. inherit(params,parentClass)
   > to `define` & `new` a Class who inherit by parentClass

```javascript
import {inherit} from "@private-js/core";


const Person = OOPClass({
    Private:{
        age:18
    },
    Public:{
        name:'EvanWang',
        sayAge:function(){
            return this.age;
        }
    }
})
const Man = inherit({
    Private:{
        weight:80,
        name:'Evan',
    },
    Public:{
        sayWeight:function(){
            return this.weight;
        }
   }},Person)
   

Man.weight//error Cannot call a private element
Man.name // error Cannot call a private element
Man.sayWeight() // 80
```
