import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import TabTrigger from './TabTrigger.tsx'


// Component
function TabList() {
            return (
                <div
                    role={"tablist"}
                    className={"TabList-sc-4fne6h-0 gJTXcn"}
                    tabIndex={"0"}
                    data-orientation={"horizontal"}
                    style={{ outline: "none" }}
                >
                    <TabTrigger dataId="0" />
                    <TabTrigger dataId="1" />
                    <TabTrigger dataId="2" />
                    <TabTrigger dataId="3" />
                </div>
            );
        }

export default TabList
