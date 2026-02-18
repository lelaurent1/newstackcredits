import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Svg from './Svg.tsx'
import Img from './Img.tsx'
import IconButton1 from './IconButton1.tsx'
import MuiButton from './MuiButton.tsx'
import ProductTile from './ProductTile.tsx'
import InputLabel from './InputLabel.tsx'
import TypographySubtitle1 from './TypographySubtitle1.tsx'
import IconButton from './IconButton.tsx'
import ProductCreditsInput from './ProductCreditsInput.tsx'


interface ProductCreditsPanelProps {
    onNext?: () => void;
}

// Component
function ProductCreditsPanel({ onNext }: ProductCreditsPanelProps = {}) {
            const allProducts = [
                { id: ':r4:', imgId: '2', name: 'Active product 1', price: '• $60.50', isDeletable: false, initialSpent: 50, initialTotal: 100 },
                { id: ':r5:', imgId: '3', name: 'Active product 2', price: '• $66.00', isDeletable: false, initialSpent: 50, initialTotal: 100 },
                { id: ':r6:', imgId: '4', name: 'Active product 3', price: '• $16.50', isDeletable: false, initialSpent: 50, initialTotal: 100 },
                { id: ':r7:', imgId: '6', name: 'NEW product 1', price: '• $45.00', isDeletable: true, initialSpent: 0, initialTotal: 0 },
                { id: ':r8:', imgId: '7', name: 'NEW product 2', price: '• $50.00', isDeletable: true, initialSpent: 0, initialTotal: 0 }
            ];

            const [products, setProducts] = React.useState(allProducts);

            const [productCredits, setProductCredits] = React.useState<{[key: string]: number}>({
                ':r4:': 0,
                ':r5:': 0,
                ':r6:': 0,
                ':r7:': 0,
                ':r8:': 0
            });

            const handleProductCreditChange = (inputId: string, newValue: number) => {
                setProductCredits(prev => ({
                    ...prev,
                    [inputId]: newValue
                }));
            };

            const handleDeleteProduct = (productId: string) => {
                setProducts(prev => prev.filter(p => p.id !== productId));
                setProductCredits(prev => {
                    const newCredits = { ...prev };
                    delete newCredits[productId];
                    return newCredits;
                });
            };

            const handleAddNewProduct = () => {
                const currentProductIds = products.map(p => p.id);
                const missingProducts = allProducts.filter(p => p.isDeletable && !currentProductIds.includes(p.id));

                if (missingProducts.length > 0) {
                    setProducts(prev => [...prev, ...missingProducts]);
                    setProductCredits(prev => {
                        const newCredits = { ...prev };
                        missingProducts.forEach(product => {
                            if (!(product.id in newCredits)) {
                                newCredits[product.id] = 0;
                            }
                        });
                        return newCredits;
                    });
                }
            };

            const totalProductCredits = Object.values(productCredits).reduce((sum, val) => sum + val, 0);

            return (
                <div className={"MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root css-194w702"}>
                    <div className={"MuiCardContent-root css-11surro"}>
                        <div className={"MuiGrid-root MuiGrid-container css-158u4o4"}>
                            <div className={"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-9 css-1aozxms"}>
                                <div className={"MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column css-v23h5x"}>
                                    <h6 className="MuiTypography-root MuiTypography-subtitle1 css-hw1kia">
										Product Credits
									</h6>
                                    <span className={"MuiTypography-root MuiTypography-caption css-15rkpcp"}>
										Costs for influencer purchase reimbursement. Includes applicable tax + shipping
									</span>
                                </div>
                            </div>
                            <div className={"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3 css-qm6vux"}>
                                <MuiButton
                                    className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textBrandBlue MuiButton-sizeLarge MuiButton-textSizeLarge MuiButton-colorBrandBlue css-nklym6"
                                    label="Add New Product"
                                    hasStartIcon={true}
                                    startIcon={<Svg id="7" />}
                                    onClick={handleAddNewProduct}
                                />
                            </div>
                        </div>
                        {products.map(product => (
                            <ProductCreditRow
                                key={product.id}
                                imgId={product.imgId}
                                productName={product.name}
                                price={product.price}
                                inputId={product.id}
                                inputDefault="0"
                                onCreditChange={handleProductCreditChange}
                                initialSpent={product.initialSpent}
                                initialTotal={product.initialTotal}
                                isDeletable={product.isDeletable}
                                onDelete={() => handleDeleteProduct(product.id)}
                            />
                        ))}
                        <hr className={"MuiDivider-root MuiDivider-fullWidth css-1qnq546"} />
                        <div className={"MuiGrid-root MuiGrid-container css-c0ncfo"}>
                            <div className={"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-1xz0c5i"}>
                                <h6 className={"MuiTypography-root MuiTypography-subtitle1 css-hw1kia"}>
                                    Platform Credits
                                </h6>
                                <span className={"MuiTypography-root MuiTypography-caption css-15rkpcp"}>
                                    Fees paid to Stack Influence. Completed promotions are billed for 1 Platform + 1 Product Credit
                                </span>
                            </div>
                            <div className={"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 css-1h2jdma"}>
                                <PlatformCreditsRow imgId="5" productTileDataId="1" totalCredits={totalProductCredits} />
                            </div>
                        </div>
                        <div className={"MuiBox-root css-1lgo472"}>
                            <hr className={"MuiDivider-root MuiDivider-fullWidth css-1vgrnu"} />
                            <div className={"MuiCardActions-root MuiCardActions-spacing css-elmj0s"}>
                                <div className={"MuiBox-root css-0"}>
                                    <MuiButton
                                        className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-colorSecondary css-10mbqbg"
                                        label="Back"
                                    />
                                    <MuiButton
                                        className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary css-1desm2a"
                                        label="Next"
                                        onClick={onNext}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

// Subcomponents
function ProductCreditRow({imgId, productName, price, inputId, inputDefault, onCreditChange, initialSpent = 50, initialTotal = 100, isDeletable = false, onDelete}: {imgId: string, productName: string, price: string, inputId: string, inputDefault: string, onCreditChange?: (inputId: string, newValue: number) => void, initialSpent?: number, initialTotal?: number, isDeletable?: boolean, onDelete?: () => void}) {
            const [spent] = React.useState(initialSpent);
            const [total, setTotal] = React.useState(initialTotal);

            const handleCreditsChange = (oldValue: number, newValue: number) => {
                const difference = newValue - oldValue;
                setTotal((prevTotal) => prevTotal + difference);
                if (onCreditChange) {
                    onCreditChange(inputId, newValue);
                }
            };

            const handleDeleteClick = () => {
                if (isDeletable && onDelete) {
                    onDelete();
                }
            };

            const percentage = total > 0 ? (spent / total) * 100 : 0;

            return (
                <div className={"MuiBox-root css-zfq5zd"}>
                    <Img id={imgId} />
                    <div className={"MuiBox-root css-2l7dy8"}>
                        <div className={"MuiBox-root css-8ds8qs"}>
                            <TypographySubtitle1>
                                {productName}
                            </TypographySubtitle1>
                            <p className={"MuiTypography-root MuiTypography-body1 css-o4rp9f"}>
                                {price}
                            </p>
                        </div>
                        <div className={"MuiFormControl-root MuiTextField-root css-gdb8ev"}>
                            <InputLabel htmlFor={inputId} id={`${inputId}-label`} />
                            <ProductCreditsInput
                                numericInputId={inputId}
                                numericInputDefaultValue={inputDefault}
                                onCreditsChange={handleCreditsChange}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', marginLeft: '16px', minWidth: '280px' }}>
                        <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>
                            Spent / Total
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%' }}>
                            <span style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', minWidth: '90px', textAlign: 'right' }}>
                                {spent} / {total}
                            </span>
                            <div style={{ flex: 1, height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                                <div
                                    style={{
                                        height: '100%',
                                        width: `${percentage}%`,
                                        backgroundColor: '#10b981',
                                        transition: 'width 0.3s ease'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className={"MuiBox-root css-4knjz3"}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            cursor: isDeletable ? 'pointer' : 'not-allowed',
                            opacity: isDeletable ? 1 : 0.4
                        }}
                        onClick={handleDeleteClick}
                    >
                        <IconButton1
                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1dl6y5j"
                            showRipple={isDeletable}
                            svgId={11}
                        />
                    </div>
                </div>
            );
        }

        function PlatformCreditsRow({imgId, productTileDataId, totalCredits}: {imgId: string, productTileDataId: string, totalCredits?: number}) {
            return (
                <div className={"MuiBox-root css-zfq5zd"}>
                    <Img id={imgId} />
                    <ProductTile dataId={productTileDataId} totalCredits={totalCredits} />
                </div>
            );
        }

export default ProductCreditsPanel
