import React, { useState } from 'react'
import type { JSX } from 'react/jsx-runtime'

import Svg from './Svg.tsx'
import NumericInput from './NumericInput.tsx'


// Component
function ProductCreditsInput({
            numericInputId,
            numericInputDefaultValue,
            onCreditsChange,
        }: {
            numericInputId: string;
            numericInputDefaultValue: string;
            onCreditsChange?: (oldValue: number, newValue: number) => void;
        }) {
            const [value, setValue] = useState(Number(numericInputDefaultValue) || 0);

            const handleIncrement = () => {
                setValue((prev) => {
                    const newValue = prev + 100;
                    if (onCreditsChange) {
                        onCreditsChange(prev, newValue);
                    }
                    return newValue;
                });
            };

            const handleDecrement = () => {
                setValue((prev) => {
                    const newValue = Math.max(0, prev - 100);
                    if (onCreditsChange && newValue !== prev) {
                        onCreditsChange(prev, newValue);
                    }
                    return newValue;
                });
            };

            const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                const newValue = Math.max(0, Number(e.target.value) || 0);
                if (onCreditsChange && newValue !== value) {
                    onCreditsChange(value, newValue);
                }
                setValue(newValue);
            };

            return (
                <div className={"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedStart MuiInputBase-adornedEnd css-mprest"}>
                    <div className={"MuiInputAdornment-root MuiInputAdornment-positionStart MuiInputAdornment-outlined MuiInputAdornment-sizeSmall css-7ix693"}>
                        <span className={"notranslate"}>
                            &#8203;
                        </span>
                    </div>
                    <NumericInput
                        id={numericInputId}
                        value={value}
                        onChange={handleInputChange}
                    />
                    <div className={"MuiBox-root css-j7qwjs"}>
                        <button
                            type="button"
                            onClick={handleIncrement}
                            style={{
                                background: 'none',
                                border: 'none',
                                padding: 0,
                                cursor: 'default',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                pointerEvents: 'auto',
                                opacity: 1
                            }}
                            aria-label="Increment by 100"
                            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                        >
                            <Svg id="8" />
                        </button>
                        <button
                            type="button"
                            onClick={handleDecrement}
                            style={{
                                background: 'none',
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            aria-label="Decrement by 100"
                        >
                            <Svg id="9" />
                        </button>
                    </div>
                    <fieldset className={"MuiOutlinedInput-notchedOutline css-igs3ac"}>
                        <legend className={"css-14lo706"}>
                            <span>
                                Product Credits
                            </span>
                        </legend>
                    </fieldset>
                </div>
            );
        }

export default ProductCreditsInput
