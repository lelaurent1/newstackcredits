import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component
function MuiButton({
            className,
            label,
            hasStartIcon = false,
            startIcon,
            onClick,
        }: {
            className: string;
            label: string;
            hasStartIcon?: boolean;
            startIcon?: React.ReactNode;
            onClick?: () => void;
        }) {
            return (
                <button
                    className={className}
                    tabIndex={"0"}
                    type={"button"}
                    onClick={onClick}
                >
                    {hasStartIcon && (
                        <span className="MuiButton-icon MuiButton-startIcon MuiButton-iconSizeLarge css-coclz">
                            {startIcon}
                        </span>
                    )}
                    {label}
                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
            );
        }

export default MuiButton
