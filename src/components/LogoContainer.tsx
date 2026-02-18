import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Svg from './Svg.tsx'


// Component
function LogoContainer({ svgId }: { svgId: string | number }) {
            return (
                <div className={"Flex-sc-sqmtka-0 LogoContainer-sc-1k8pgur-2 eBExQV bKPELF"}>
                    <Svg id={svgId} />
                </div>
            );
        }

export default LogoContainer
