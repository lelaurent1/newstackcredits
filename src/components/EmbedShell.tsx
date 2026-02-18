import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import IconButton from './IconButton.tsx'
import ToggleSwitch from './ToggleSwitch.tsx'
import LogoContainer from './LogoContainer.tsx'
import Indicator from './Indicator.tsx'
import TabList from './TabList.tsx'
import SearchAmazonBar from './SearchAmazonBar.tsx'


// Component
function EmbedShell() {
    return (
        <div className={"EmbedBase-sc-1lekol5-0 fAIZnV"}>
            <div className={"Container-sc-1secyf3-0 cLwpt"}>
                <div direction={"column"} className={"Flex-sc-sqmtka-0 MenuContent-sc-1secyf3-1 duRUOE ezozGy"}>
                    <div className={"Flex-sc-sqmtka-0 Container-sc-1k8pgur-0 eBExQV jKsiqy"}>
                        <div className={"Flex-sc-sqmtka-0 LeftContainer-sc-1k8pgur-1 kcCNAR gDccnC"}>
                            <LogoContainer svgId={12} />
                            <span fontWeight={"600"} className={"Component-sc-u1jx8z-0 gQORZk"}>
                                Extension
                            </span>
                        </div>
                        <div className={"Flex-sc-sqmtka-0 RightContainer-sc-1k8pgur-3 eBExQV gynnbv"}>
                            <div className={"Flex-sc-sqmtka-0 ToggleContainer-sc-1k8pgur-4 eBExQV fBzdQi"}>
                                <span className={"Component-sc-u1jx8z-0 bvMpRN"}>
                                    Extension Embed
                                </span>
                                <ToggleSwitch
                                    dataState="checked"
                                    defaultValue="on"
                                    title="Toggle Button"
                                />
                            </div>
                            <IconButton buttonClassName="ButtonWrapper-sc-1qb4ldc-0 ffqrEE" svgId="13" />
                        </div>
                    </div>
                    <div className={"TabBarContainer-sc-1secyf3-2 foGnCo"}>
                        <div dir={"ltr"} data-orientation={"horizontal"}>
                            <TabList />
                            <Indicator />
                        </div>
                    </div>
                    <div className={"Content-sc-1secyf3-4 fsutdY"}>
                        <div direction={"column"} className={"Flex-sc-sqmtka-0 Container-sc-19tmmeq-0 duRUOE fmHZfK"}>
                            <SearchAmazonBar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmbedShell
