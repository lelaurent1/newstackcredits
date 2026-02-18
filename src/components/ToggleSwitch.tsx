import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component
function ToggleSwitch({
            dataState,
            defaultValue,
            title
        }: {
            dataState: "checked" | "unchecked";
            defaultValue: "on" | "off";
            title: string;
        }) {
            return (
                <button
                    type="button"
                    role="switch"
                    data-state={dataState}
                    title={title}
                    className="Switch-sc-1unk5fl-0 gOGNlQ"
                    defaultValue={defaultValue}
                >
                    <span
                        data-state={dataState}
                        className="Thumb-sc-1unk5fl-1 egZBLm"
                    >
                    </span>
                </button>
            );
        }

export default ToggleSwitch
