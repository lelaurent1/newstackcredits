import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import MuiButton from './MuiButton.tsx'
import ProductHeader from './ProductHeader.tsx'
import ProductCreditsPanel from './ProductCreditsPanel.tsx'
import CampaignVelocityContent from './CampaignVelocityContent.tsx'

interface DashboardContentProps {
    currentStep: number;
    setCurrentStep: (step: number) => void;
}

// Component
function DashboardContent({ currentStep, setCurrentStep }: DashboardContentProps) {
            // If we're on step 3, show Campaign Velocity content
            if (currentStep === 3) {
                return (
                    <CampaignVelocityContent
                        onBack={() => setCurrentStep(2)}
                        onNext={() => setCurrentStep(3)} // Could go to next step if needed
                    />
                );
            }

            return (
                <div className={"MuiContainer-root MuiContainer-maxWidthMlg dashboardContent css-x241l8"}>
                    <div className={"MuiBox-root css-79elbk"}>
                        <div className={"MuiBox-root css-0"} style={{ opacity: "1" }}>
                            <div className={"MuiBox-root css-1djq2k0"}>
                                <h4 className={"MuiTypography-root MuiTypography-h4 css-ucr3n2"}>
                                    New Targets
                                </h4>
                                <div className={"MuiBox-root css-1noe8hx"}>
                                    <div className={"MuiBox-root css-k008qs"}>
                                        <div className={"MuiBox-root css-79elbk"}>
                                        </div>
                                        <div className={"MuiBox-root css-79elbk"}>
                                            <MuiButton
                                                className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-1ph9pmh"
                                                label="Submit draft"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={"MuiBox-root css-qe0i83 sf-hidden"}>
                                </div>
                            </div>
                            <div className={"MuiBox-root css-1bx29xg"}>
                                <div className={"MuiBox-root css-qsaw8"} style={{ display: "block", opacity: "1", transform: "none" }}>
                                    <ProductHeader dataId="0" />
                                    <ProductCreditsPanel onNext={() => setCurrentStep(3)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

export default DashboardContent
