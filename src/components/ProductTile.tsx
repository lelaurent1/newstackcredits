import React from 'react'
import type { JSX } from 'react/jsx-runtime'


type ProductTileData = {
            title: string;
            price: string;
            summaryLabel: string;
            summaryValue: string;
        }
// Component
function ProductTile({ dataId, totalCredits }: { dataId: string, totalCredits?: number }) {
            const {
                title,
                price,
                summaryLabel,
                summaryValue
            }: ProductTileData = getProductTileData(dataId);

            const displayValue = totalCredits !== undefined ? String(totalCredits) : summaryValue;

            return (
                <div className={"MuiBox-root css-wkoz8z"}>
                    <div className={"MuiBox-root css-1qm1lh"}>
                        <h6 className={"MuiTypography-root MuiTypography-subtitle1 css-hw1kia"}>
                            {title}
                            <span className={"MuiTypography-root MuiTypography-body1 css-mpb02d"}>
                                {` • `}
                                <span className={"MuiTypography-root MuiTypography-body1 css-pklpej"}>
                                    {price}
                                </span>
                            </span>
                        </h6>
                    </div>
                    <div className={"MuiBox-root css-0"}>
                        <div className={"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-76wze3"}>
                            <div className={"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4 css-1p3pqyl"}>
                                <div className={"MuiBox-root css-19gn8uw"}>
                                    <span className={"MuiTypography-root MuiTypography-caption css-1smapvr"}>
                                        {summaryLabel}
                                    </span>
                                    <p className={"MuiTypography-root MuiTypography-body1 css-u8vtdr"}>
                                        {displayValue}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

function getProductTileData(id: string): ProductTileData {
            id = String(id);
            if (id === "1") {
                return {
                    title: "Instagram Grid Post",
                    price: "$27.00",
                    summaryLabel: "Platform Credits",
                    summaryValue: "3600"
                };
            }
            return {
                title: "",
                price: "",
                summaryLabel: "",
                summaryValue: ""
            };
        }

export default ProductTile
