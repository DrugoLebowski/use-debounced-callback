// Vendor
import { useCallback, useRef } from "react";

/**
 * Debounce the `callback` execution until the difference between the current time
 * and the last execution time of the callback is lower than the `millisecondsOffset`.
 *
 * @param callback The callback to debounce
 * @param millisecondsOffset The milliseconds of debounce
 * @returns The ref to the debounced callback
 */
function useDebouncedCallback(
  callback: (e: any) => any,
  millisecondsOffset: number,
): (e: any) => any {
  const callbackAlreadyCalled = useRef<boolean>(false);
  const timeoutId = useRef<number>(0);
  const memoizedCallback = useCallback((e: any) => {
    callbackAlreadyCalled.current = true;

    callback(e);
  }, []);

  return useCallback(
    (e: any) => {
      if (callbackAlreadyCalled.current) {
        clearInterval(timeoutId.current);

        timeoutId.current = window.setTimeout(() => {
          callbackAlreadyCalled.current = false;
        }, millisecondsOffset);
      } else {
        memoizedCallback(e);
      }
    },
    [millisecondsOffset],
  );
}

export default useDebouncedCallback;
