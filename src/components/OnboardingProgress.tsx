import React from 'react'

interface ProgressStepProps {
    stepNumber: number;
    label: string;
    isActive: boolean;
    isCompleted: boolean;
}

function ProgressStep({ stepNumber, label, isActive, isCompleted }: ProgressStepProps) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px 24px',
            position: 'relative'
        }}>
            {/* Connecting line - dashed */}
            {stepNumber < 3 && (
                <div style={{
                    position: 'absolute',
                    left: '40px',
                    top: '60px',
                    width: '2px',
                    height: '60px',
                    backgroundImage: isCompleted
                        ? 'repeating-linear-gradient(0deg, rgb(248, 207, 97), rgb(248, 207, 97) 4px, transparent 4px, transparent 8px)'
                        : 'repeating-linear-gradient(0deg, rgb(219, 223, 227), rgb(219, 223, 227) 4px, transparent 4px, transparent 8px)',
                    transition: 'all 0.3s ease'
                }}></div>
            )}

            {/* Circle indicator - hollow */}
            <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                backgroundColor: 'white',
                border: isCompleted
                    ? '3px solid rgb(248, 207, 97)'
                    : isActive
                        ? '3px solid rgb(248, 207, 97)'
                        : '3px solid rgb(219, 223, 227)',
                transition: 'all 0.3s ease',
                zIndex: 1
            }}>
                {isCompleted ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8L6.5 11.5L13 4.5" stroke="rgb(248, 207, 97)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                ) : null}
            </div>

            {/* Label */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                flex: 1
            }}>
                <div style={{
                    fontSize: '1.125rem',
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? 'rgb(51, 59, 66)' : 'rgb(145, 158, 171)',
                    transition: 'all 0.3s ease'
                }}>
                    {label}
                </div>
            </div>
        </div>
    );
}

interface OnboardingProgressProps {
    currentStep: number;
    setCurrentStep: (step: number) => void;
}

function OnboardingProgress({ currentStep, setCurrentStep }: OnboardingProgressProps) {
    const steps = [
        { number: 1, label: 'Select Brand' },
        { number: 2, label: 'Allocate Targets' },
        { number: 3, label: 'Campaign Velocity' }
    ];

    return (
        <div style={{
            padding: '32px 0 24px 0',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div>
                {steps.map((step) => (
                    <ProgressStep
                        key={step.number}
                        stepNumber={step.number}
                        label={step.label}
                        isActive={step.number === currentStep}
                        isCompleted={step.number < currentStep}
                    />
                ))}
            </div>
        </div>
    );
}

export default OnboardingProgress
