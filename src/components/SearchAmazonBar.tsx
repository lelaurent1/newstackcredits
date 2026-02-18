import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import IconButton from './IconButton.tsx'
import SelectTrigger from './SelectTrigger.tsx'
import SearchInput from './SearchInput.tsx'


// Component
function SearchAmazonBar() {
            return (
                <div direction="column" className="Flex-sc-sqmtka-0 SearchContainer-sc-19tmmeq-1 duRUOE iWkTUN">
                    <span className="Component-sc-u1jx8z-0 hgfAzf">
                        Search Amazon
                    </span>
                    <div direction="row" className="Flex-sc-sqmtka-0 SearchBarContainer-sc-19tmmeq-2 clkeoB cudsST">
                        <div className="Container-sc-itmc3f-0 bnEjNR SelectComponent-sc-1ra0at5-1 jOxeQq" width="230px">
                            <SelectTrigger label="United States" iconId={14} />
                        </div>
                        <div className="Container-sc-33as3g-0 eWPXwg">
                            <SearchInput placeholder="Search Amazon" />
                        </div>
                        <IconButton disabled="" buttonClassName="ButtonWrapper-sc-1qb4ldc-0 bjpEsB" svgId="16" />
                    </div>
                </div>
            );
        }

export default SearchAmazonBar
