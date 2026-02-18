import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Svg from './Svg.tsx'
import IconButton from './IconButton.tsx'


// Component
function IconButton1({
            className,
            showRipple,
            svgId,
        }: {
            className: string;
            showRipple?: boolean;
            svgId: number;
        }) {
            return (
                <button
                    className={className}
                    tabIndex={"0"}
                    type={"button"}
                >
                    <Svg id={svgId} />
                    {showRipple ? (
                        <span className={"MuiTouchRipple-root css-w0pj6f"}>
                        </span>
                    ) : null}
                </button>
            );
        }

export default IconButton1
