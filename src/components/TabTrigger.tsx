import React from 'react'
import type { JSX } from 'react/jsx-runtime'


type TabTriggerData = {
            id: string;
            label: string;
            dataState: "active" | "inactive";
        }
// Component
function TabTrigger({ dataId }: { dataId: string }) {
    const { id, label, dataState }: TabTriggerData = getTabTriggerData(dataId);
    return (
        <button
            type="button"
            role="tab"
            data-state={dataState}
            id={id}
            className="Tab-sc-4fne6h-1 jVOIFu"
            tabIndex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
        >
            <div className="Flex-sc-sqmtka-0 TabItem-sc-1secyf3-3 eBExQV eDdnVU">
                {label}
            </div>
        </button>
    );
}

function getTabTriggerData(id: string): TabTriggerData {
    switch (String(id)) {
        case "0":
            return {
                id: "radix-:r0:-trigger-0",
                label: "Actions",
                dataState: "active",
            };
        case "1":
            return {
                id: "radix-:r0:-trigger-1",
                label: "Your Business",
                dataState: "inactive",
            };
        case "2":
            return {
                id: "radix-:r0:-trigger-2",
                label: "Settings",
                dataState: "inactive",
            };
        case "3":
            return {
                id: "radix-:r0:-trigger-3",
                label: "Help",
                dataState: "inactive",
            };
        default:
            return {
                id: "",
                label: "",
                dataState: "inactive",
            };
    }
}

export default TabTrigger
