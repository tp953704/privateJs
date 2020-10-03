var IsPrivate = function IsPrivate(sPropKey) {
  return sPropKey.startsWith('_');
};
var IsHasPropKey = function IsHasPropKey(Class, propKey) {
  var privateProp = propKey;
  var publicProp = propKey;

  if (propKey.startsWith('_')) {
    // 砍掉第一個字
    publicProp = propKey.substring(1, propKey.length);
  } else {
    privateProp = "_".concat(propKey);
  }

  return Reflect.has(Class, publicProp) || Reflect.has(Class, privateProp);
};

function realPropKey(target, propKey) {
  if (!Reflect.has(target, propKey)) {
    if (!Reflect.has(target, "_".concat(propKey))) {
      throw new TypeError("there is no ".concat(propKey, " element"));
    } else {
      propKey = "_".concat(propKey);
    }
  }

  return propKey;
} // 處理private


var privateHandler = {
  get: function get(target, propKey, receiver) {
    // 是否命名要加 _
    propKey = realPropKey(target, propKey); // 是否自己函式回CALL

    if (!Reflect.has(target, 'isCallBySelf')) {
      if (IsPrivate(propKey)) {
        throw new TypeError("Cannot call a private element");
      }

      Reflect.set(target, 'isCallBySelf', true);
    } else {
      Reflect.deleteProperty(target, 'isCallBySelf');
    }

    return Reflect.get(target, propKey, receiver);
  }
};
var privateBind = function privateBind(OOClass) {
  return new Proxy(OOClass, privateHandler);
};

function OOClass(Params) {
  var Private = Params.Private,
      Public = Params.Public;
  var newObj = Object.create(null);

  for (var key in Private) {
    newObj["_".concat(key)] = Private[key];
  }

  for (var _key in Public) {
    newObj["".concat(_key)] = Public[_key];
  }

  return newObj;
}
var OOPClass = function OOPClass(Params) {
  return privateBind(OOClass(Params));
};

var inherit = function inherit(childParams, Parent) {
  var newClass = OOClass(childParams);

  for (var sParentProto in Parent) {
    if (!IsPrivate(sParentProto)) {
      if (!IsHasPropKey(newClass, sParentProto)) {
        Reflect.set(newClass, sParentProto, Parent[sParentProto]);
      }
    }
  }

  return privateBind(newClass);
};

export { OOPClass, inherit };
