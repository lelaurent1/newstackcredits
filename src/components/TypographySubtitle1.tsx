import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component
function TypographySubtitle1({ children }: { children: React.ReactNode }) {
    return (
        <h6 className="MuiTypography-root MuiTypography-subtitle1 css-5h1gmt">
            {children}
        </h6>
    );
}

export default TypographySubtitle1
