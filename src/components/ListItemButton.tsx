import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Svg from './Svg.tsx'
import Img from './Img.tsx'
import MuiButton from './MuiButton.tsx'

type ListItemButtonData = {
            rootClassName: string;
            iconComponent: React.ReactElement;
            label?: string;
            labelDiv?: boolean; // whether to use a div for label or place directly
            badgeContent?: React.ReactNode;
        };
// Component
function ListItemButton({ dataId }: { dataId: string }) {
            const {
                rootClassName,
                iconComponent,
                label,
                labelDiv,
                badgeContent
            }: ListItemButtonData = getListItemButtonData(dataId);

            return (
                <div className={rootClassName} tabIndex={"0"} role={"button"}>
                    <ListItemIcon>
                        {iconComponent}
                    </ListItemIcon>
                    {
                        (label !== undefined && labelDiv !== false) &&
                        <div className="MuiListItemText-root css-xdiy5h">
                            {label}
                        </div>
                    }
                    {
                        (label !== undefined && labelDiv === false) &&
                        label
                    }
                    {badgeContent && (
                        <ListItemBadge>
                            {badgeContent}
                        </ListItemBadge>
                    )}
                    <span className="MuiTouchRipple-root css-w0pj6f">
                    </span>
                </div>
            )
        }

// Subcomponents
function ListItemIcon({ children }: { children: React.ReactNode }) {
            return (
                <div className="MuiListItemIcon-root css-1o7fi9n">
                    {children}
                </div>
            );
        }
        function ListItemBadge({ children }: { children: React.ReactNode }) {
            return (
                <span className="MuiBox-root css-1f3k1gi">
                    {children}
                </span>
            );
        }

function getListItemButtonData(id: string): ListItemButtonData {
            switch (String(id)) {
                case "0":
                    return {
                        rootClassName: "MuiButtonBase-root MuiListItemButton-root css-u61u8a",
                        iconComponent: <Svg id="0" />,
                        label: "Dashboard",
                        labelDiv: true
                    };
                case "1":
                    return {
                        rootClassName: "MuiButtonBase-root MuiListItemButton-root css-u61u8a",
                        iconComponent: <Svg id="1" />,
                        label: "Campaigns",
                        labelDiv: true
                    };
                case "2":
                    return {
                        rootClassName: "MuiButtonBase-root MuiListItemButton-root css-u61u8a",
                        iconComponent: <Svg id="3" />,
                        label: "Billing",
                        labelDiv: true
                    };
                case "3":
                    return {
                        rootClassName: "MuiButtonBase-root MuiListItemButton-root css-u61u8a",
                        iconComponent: <Svg id="4" />,
                        label: "Help",
                        labelDiv: true
                    };
                case "4":
                    return {
                        rootClassName: "MuiButtonBase-root MuiListItemButton-root css-u61u8a",
                        iconComponent: <Svg id="2" />,
                        label: "Applicants",
                        labelDiv: true,
                        badgeContent: 6
                    };
                case "5":
                    return {
                        rootClassName: "MuiButtonBase-root MuiListItemButton-root css-u61u8a",
                        iconComponent: <Img id="1" />,
                        label: "Partnership Ads",
                        labelDiv: true,
                        badgeContent: "beta"
                    };
                case "6":
                    return {
                        rootClassName: "MuiButtonBase-root MuiListItemButton-root css-qnl5jc",
                        iconComponent: <Svg id="5" />,
                        label: "Laurent",
                        labelDiv: false
                    };
                default:
                    return {
                        rootClassName: "",
                        iconComponent: <span />,
                        label: "",
                        labelDiv: true
                    };
            }
        }

export default ListItemButton
