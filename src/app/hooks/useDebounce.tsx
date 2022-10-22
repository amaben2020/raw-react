export function useDebounce(cb: () => void, time: number) {
  let timeout: number;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(cb, time, ...args);
  };
}
