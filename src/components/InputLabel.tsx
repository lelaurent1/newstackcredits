import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component
function InputLabel({
          htmlFor,
          id
        }: {
          htmlFor: string;
          id: string;
        }) {
          return (
            <label
              className={
                "MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeSmall MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiFormLabel-filled css-13wgcn3"
              }
              htmlFor={htmlFor}
              id={id}
            >
              {"Product Credits"}
            </label>
          );
        }

export default InputLabel
