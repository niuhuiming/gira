/**
 * 判断是否是有效值
 */
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

/**
 * 判断是否是空值
 */
export const isVoid = (value: unknown) =>
  value === null || value === undefined || value === "";

/**
 * 过滤对象的空值
 */
export const cleanObject = (object: { [key: string]: unknown }) => {
  // 在一个函数里，改变传入的对象是不好的
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
