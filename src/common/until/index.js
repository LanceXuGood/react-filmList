/**
 * @description 判断变量是否存在,或者是否以某种类型存在
 * @param {object} o  判断变量是否存在
 * @param {object} type 数据类型  Number,Boolean等
 * @return {Boolean} nResult 返回结果 true或者false
 */
export function exists(o, type) {
  return o != undefined && o !== null && (type ? o.constructor == type : true);
}
