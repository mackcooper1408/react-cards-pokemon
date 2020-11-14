import { useState } from "react";

function useToggle(initialVal = false) {
  const [value, setValue] = useState(initialVal);
  const toggle = () => {
    setValue(oldValue => !oldValue);
  };

  return [value, toggle];
}

export default useToggle;