import { useState } from "react";

const useInputValidate = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = e => setValue(e.target.value);
  const validateInput = () => value.search(/\d/) >= 0;
  const validateColor = validateInput() ? "text-danger" : null;

  return { onChange, validateInput, value, validateColor };
};

export default useInputValidate;