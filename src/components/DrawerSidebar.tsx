import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'
import ListItemButton from './ListItemButton.tsx'
import ImgBox from './ImgBox.tsx'
import OnboardingProgress from './OnboardingProgress.tsx'

interface DrawerSidebarProps {
    currentStep: number;
    setCurrentStep: (step: number) => void;
}

// Component
function DrawerSidebar({ currentStep, setCurrentStep }: DrawerSidebarProps) {
            return (
                <div className={"MuiBox-root css-1mgxpgk"}>
                    <div className={"MuiDrawer-root MuiDrawer-docked css-1qczbnt"}>
                        <div
                            className={
                                "MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-w8viuc"
                            }
                            style={{
                                transform: "none",
                                transition: "transform 225ms cubic-bezier(0,0,0.2,1)",
                            }}
                        >
                            <div className={"MuiBox-root css-yezyng"}>
                                <div className={"MuiBox-root css-i9gxme"}>
                                    <ImgBox imgId="0" />
                                    <OnboardingProgress currentStep={currentStep} setCurrentStep={setCurrentStep} />
                                </div>
                                <hr className={"MuiDivider-root MuiDivider-fullWidth css-ss6lby"} />
                                <div className={"MuiBox-root css-0"}>
                                    <ListItemButton dataId="6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

export default DrawerSidebar
