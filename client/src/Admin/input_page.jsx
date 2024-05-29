"use client";

import StepperDemo from "./stepper-demo.jsx";

export default function Stepper() {
    return (
        <div className="flex min-h-screen flex-col items-center py-24 px-5 gap-8 max-w-3xl mx-auto">
            <div className="w-full space-y-8">
                <div className="flex flex-col gap-4">
                    <p className="font-semibold">Default</p>
                    <StepperDemo />
                </div>
            </div>
        </div>
    )
}