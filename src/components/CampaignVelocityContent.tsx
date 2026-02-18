import React, { useState } from 'react'
import MuiButton from './MuiButton.tsx'

interface Product {
    id: string;
    name: string;
    image: string;
}

const availableProducts: Product[] = [
    {
        id: '1',
        name: 'Product 1',
        image: '/assets/attachments/parasolchlorine_freediaperswithrashshieldprotection_size6_40ct_igav88_thumbnail.png'
    },
    {
        id: '2',
        name: 'Product 2',
        image: '/assets/attachments/parasolchlorine_freediaperswithrashshieldprotection_size3_64ct_eaczua_thumbnail.png'
    },
    {
        id: '3',
        name: 'Product 3',
        image: '/assets/attachments/3re22hyqeh7cj3_thumbnail.png'
    },
    {
        id: '4',
        name: 'Product 4',
        image: '/assets/attachments/2fb3vlbpa5kfa3_thumbnail.png'
    },
    {
        id: '5',
        name: 'Product 5',
        image: '/assets/attachments/parasolchlorine_freediaperswithrashshieldprotection_size1_88ct_3jv927_thumbnail.png'
    }
];

interface CampaignVelocityContentProps {
    onBack?: () => void;
    onNext?: () => void;
}

function CampaignVelocityContent({ onBack, onNext }: CampaignVelocityContentProps) {
    const [draggedProduct, setDraggedProduct] = useState<Product | null>(null);
    const [velocityProducts, setVelocityProducts] = useState<Product[]>([]);

    const handleDragStart = (product: Product) => {
        setDraggedProduct(product);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (draggedProduct && !velocityProducts.find(p => p.id === draggedProduct.id)) {
            setVelocityProducts([...velocityProducts, draggedProduct]);
        }
        setDraggedProduct(null);
    };

    const handleRemoveProduct = (productId: string) => {
        setVelocityProducts(velocityProducts.filter(p => p.id !== productId));
    };

    return (
        <div className="MuiContainer-root MuiContainer-maxWidthMlg dashboardContent css-x241l8">
            <div className="MuiBox-root css-79elbk">
                <div className="MuiBox-root css-0" style={{ opacity: '1' }}>
                    <div className="MuiBox-root css-1djq2k0">
                        <h4 className="MuiTypography-root MuiTypography-h4 css-ucr3n2">
                            New Targets
                        </h4>
                        <div className="MuiBox-root css-1noe8hx">
                            <div className="MuiBox-root css-k008qs">
                                <div className="MuiBox-root css-79elbk"></div>
                                <div className="MuiBox-root css-79elbk">
                                    <MuiButton
                                        className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-1ph9pmh"
                                        label="Submit Draft"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="MuiBox-root css-1bx29xg">
                        <div style={{
                            backgroundColor: 'rgb(255, 255, 255)',
                            borderRadius: '8px',
                            padding: '40px',
                            marginTop: '24px'
                        }}>
                            {/* Header */}
                            <div style={{
                                textAlign: 'center',
                                marginBottom: '40px'
                            }}>
                                <h2 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 600,
                                    color: 'rgb(51, 59, 66)',
                                    margin: '0 0 8px 0'
                                }}>
                                    Select and Drag Products
                                </h2>
                                <p style={{
                                    fontSize: '0.9375rem',
                                    color: 'rgb(99, 115, 129)',
                                    margin: 0
                                }}>
                                    Pick which pace you'd like to allocate your credits
                                </p>
                            </div>

                            {/* Product Cards */}
                            <div style={{
                                display: 'flex',
                                gap: '16px',
                                justifyContent: 'center',
                                marginBottom: '48px',
                                flexWrap: 'wrap'
                            }}>
                                {availableProducts.map(product => (
                                    <div
                                        key={product.id}
                                        draggable
                                        onDragStart={() => handleDragStart(product)}
                                        style={{
                                            cursor: 'grab',
                                            transition: 'transform 0.2s',
                                            border: '2px solid rgb(219, 223, 227)',
                                            borderRadius: '8px',
                                            padding: '8px',
                                            backgroundColor: 'white'
                                        }}
                                        onMouseDown={(e) => {
                                            e.currentTarget.style.cursor = 'grabbing';
                                        }}
                                        onMouseUp={(e) => {
                                            e.currentTarget.style.cursor = 'grab';
                                        }}
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Velocity Chart */}
                            <div style={{
                                position: 'relative',
                                padding: '40px 0'
                            }}>
                                {/* Drop zones with velocity labels */}
                                <div
                                    onDragOver={handleDragOver}
                                    onDrop={handleDrop}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '24px',
                                        marginBottom: '16px'
                                    }}
                                >
                                    {/* 300/mo avg */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px'
                                    }}>
                                        <div style={{
                                            minWidth: '160px',
                                            padding: '12px 24px',
                                            border: '2px solid rgb(51, 59, 66)',
                                            borderRadius: '4px',
                                            textAlign: 'center',
                                            fontSize: '1rem',
                                            color: 'rgb(51, 59, 66)',
                                            backgroundColor: 'white'
                                        }}>
                                            300/mo avg.
                                        </div>
                                        <div style={{
                                            flex: 1,
                                            height: '2px',
                                            backgroundColor: 'rgb(219, 223, 227)'
                                        }} />
                                    </div>

                                    {/* 200/mo avg */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        paddingLeft: '100px'
                                    }}>
                                        <div style={{
                                            minWidth: '160px',
                                            padding: '12px 24px',
                                            border: '2px solid rgb(51, 59, 66)',
                                            borderRadius: '4px',
                                            textAlign: 'center',
                                            fontSize: '1rem',
                                            color: 'rgb(51, 59, 66)',
                                            backgroundColor: 'white'
                                        }}>
                                            200/mo avg.
                                        </div>
                                        <div style={{
                                            flex: 1,
                                            height: '2px',
                                            backgroundColor: 'rgb(219, 223, 227)'
                                        }} />
                                    </div>

                                    {/* 100/mo avg */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        paddingLeft: '200px'
                                    }}>
                                        <div style={{
                                            minWidth: '160px',
                                            padding: '12px 24px',
                                            border: '2px solid rgb(51, 59, 66)',
                                            borderRadius: '4px',
                                            textAlign: 'center',
                                            fontSize: '1rem',
                                            color: 'rgb(51, 59, 66)',
                                            backgroundColor: 'white'
                                        }}>
                                            100/mo avg.
                                        </div>
                                        <div style={{
                                            flex: 1,
                                            height: '2px',
                                            backgroundColor: 'rgb(219, 223, 227)'
                                        }} />
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginTop: '24px',
                                    paddingTop: '16px',
                                    borderTop: '2px solid rgb(51, 59, 66)',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        fontSize: '0.9375rem',
                                        color: 'rgb(51, 59, 66)',
                                        fontWeight: 500
                                    }}>
                                        Start
                                    </div>
                                    <div style={{
                                        fontSize: '0.875rem',
                                        color: 'rgb(99, 115, 129)'
                                    }}>
                                        2 - 3 months
                                    </div>
                                    <div style={{
                                        fontSize: '0.875rem',
                                        color: 'rgb(99, 115, 129)'
                                    }}>
                                        6 months
                                    </div>
                                    <div style={{
                                        fontSize: '0.875rem',
                                        color: 'rgb(99, 115, 129)'
                                    }}>
                                        12 months
                                    </div>
                                    {/* Arrow */}
                                    <div style={{
                                        position: 'absolute',
                                        right: '-8px',
                                        top: '10px',
                                        width: '0',
                                        height: '0',
                                        borderLeft: '8px solid rgb(51, 59, 66)',
                                        borderTop: '6px solid transparent',
                                        borderBottom: '6px solid transparent'
                                    }} />
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                gap: '16px',
                                marginTop: '40px'
                            }}>
                                <MuiButton
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1rwt2y5"
                                    label="Back"
                                    onClick={onBack}
                                />
                                <MuiButton
                                    className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-1ph9pmh"
                                    label="Next"
                                    onClick={onNext}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CampaignVelocityContent
