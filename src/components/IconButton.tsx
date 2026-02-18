import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Svg from './Svg.tsx'


// Component
function IconButton({
          disabled,
          svgId,
          buttonClassName
        }: {
          disabled?: boolean | string;
          svgId: string | number;
          buttonClassName: string;
        }) {
          return (
            <button
                className={buttonClassName}
                {...(disabled ? { disabled: "" } : {})}
            >
                <div className={"ButtonContent-sc-1qb4ldc-1 bTrSLy"}>
                    <Svg id={svgId} />
                </div>
            </button>
          );
        }

export default IconButton
