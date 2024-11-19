import { useState } from "react";

const DropDownComponent = () => {
  const [selectValue, setSelectValue] = useState;

  const handleChagne = (e) => {
    setSelectValue(e.target.value);
  };
};
