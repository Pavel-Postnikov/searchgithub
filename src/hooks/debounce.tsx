import { useCallback, useEffect, useRef } from "react";

export type Callback = (...args: any) => void;

export const useDebounceCallback = (
  callback: Callback,
  time: number
): Callback => {
  const ref = useRef<NodeJS.Timeout>();

  useEffect(
    () => (): void => {
      clearTimeout(ref.current);
    },
    []
  );

  return useCallback(
    (...args) => {
      clearTimeout(ref.current);
      ref.current = setTimeout(callback, time, ...args);
    },
    [callback, time]
  );
};
