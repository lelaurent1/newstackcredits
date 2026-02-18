import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


// Component
function ImgBox({ imgId }: { imgId: string }) {
            return (
                <div className={"MuiBox-root css-qygfnt"}>
                    <div className={"MuiBox-root css-9whsf3"}>
                        <div className={"MuiBox-root css-1ykdma4"}>
                            <Img id={imgId} />
                        </div>
                    </div>
                </div>
            );
        }

export default ImgBox
