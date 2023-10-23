// Desc: A hook to toggle a boolean value

import React from "react";

/**
 * @param {boolean} initialValue - The initial value of the boolean
 * @returns {[boolean, () => void]} - A tuple with the current value and a function to toggle it
 * @example
 * const [isShown, toggleIsShown] = useToggle();
 * toggleIsShown();
 */
function useToggle(initialValue = false) {
  if (typeof initialValue !== "boolean") {
    console.warn("Invalid type for useToggle");
  }

  const [value, setValue] = React.useState(initialValue);

  const toggleValue = React.useCallback(() => {
    setValue((currentValue) => !currentValue);
  }, []);

  return [value, toggleValue];
}

export default useToggle;
