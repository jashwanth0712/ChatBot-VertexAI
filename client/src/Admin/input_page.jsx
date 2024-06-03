import StepperDemo from "./stepper-demo.jsx";
import MobileMockup from "./MobileMockup.jsx"
export default function Stepper() {
    return (
        <div className="flex min-h-screen flex-row items-center py-24 px-5 gap-5 max-w-4xl ">
            <div className="w-full space-y-8">
                <div className="flex flex-col gap-4">
                    <p className="font-semibold">Default</p>
                    <StepperDemo />
                </div>
            </div>
            {/* <MobileMockup/> */}
        </div>
    )
}