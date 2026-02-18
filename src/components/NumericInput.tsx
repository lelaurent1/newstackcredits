import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component
function NumericInput({
  id,
  defaultValue,
  value,
  onChange
}: {
  id: string;
  defaultValue?: string | number;
  value?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      id={id}
      type={"number"}
      className={
        "MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedStart MuiInputBase-inputAdornedEnd css-e1mha"
      }
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    />
  );
}

export default NumericInput
