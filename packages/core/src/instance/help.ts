export interface IParams{
    Private?:any,
    Public:any
}
export function _instanceof(left, right) {
    if (
      right != null &&
      typeof Symbol !== "undefined" &&
      right[Symbol.hasInstance]
    ) {
      return right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
  
// 只允许new方式创建class
export function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

