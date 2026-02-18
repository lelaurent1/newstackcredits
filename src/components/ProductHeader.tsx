import React from 'react'
import type { JSX } from 'react/jsx-runtime'


type ProductHeaderData = {
            header: string;
            description: string;
        }
// Component
function ProductHeader({ dataId }: { dataId: string }) {
            const { header, description }: ProductHeaderData = getProductHeaderData(dataId);
            return (
                <div className={"MuiBox-root css-xi606m"}>
                    <h5 className={"MuiTypography-root MuiTypography-h5 css-ujgifx"}>
                        {header}
                    </h5>
                    <p className={"MuiTypography-root MuiTypography-body1 css-2ltwq1"}>
                        {description}
                    </p>
                </div>
            );
        }

function getProductHeaderData(id: string): ProductHeaderData {
            id = String(id);
            if (id === "0") {
                return {
                    header: "Products",
                    description: "Setup products and requirements"
                };
            }
            return { header: "", description: "" };
        }

export default ProductHeader
