import { useEffect, useState } from "react";

/**
 * 判断是否是有效值
 */
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

/**
 * 过滤对象的空值
 */
export const cleanObject = (object: object) => {
  // 在一个函数里，改变传入的对象是不好的
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

/**
 * custom hook: 生命周期，挂载前
 */
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

/**
 * custom hook: 防抖，将传入的value变为防抖value
 */
export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次在value变化以后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
