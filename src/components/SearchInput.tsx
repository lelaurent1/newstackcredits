import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component
function SearchInput({ placeholder }: { placeholder: string }) {
            return (
                <input
                    className="StyledInput-sc-33as3g-1 HVsLG"
                    type="text"
                    data-lpignore="true"
                    placeholder={placeholder}
                />
            );
        }

export default SearchInput
