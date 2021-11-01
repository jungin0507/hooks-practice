import { useState } from "react";

export const useInput = (initialValue, Validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof Validator === "function") {
      willUpdate = Validator(value);
    }
    if (willUpdate) setValue(value);
  };
  return { value, onChange };
};
