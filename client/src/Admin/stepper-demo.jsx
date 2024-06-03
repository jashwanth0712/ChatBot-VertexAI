import { Step, Stepper, useStepper } from "@/components/stepper";
import { Button } from "@/components/ui/button";
import GeneralInfo from "./generalInfo.jsx";
import Knowledge from "./knowledge.jsx";
import Personality from "./personality.jsx";


const steps = [
	{ label: "General Info" },
	{ label: "Knowledge" },
	{ label: "Personality" },
];

export default function StepperDemo() {
	return (
		<div className="flex w-full flex-col gap-4">
			<Stepper initialStep={0} steps={steps}>
				{steps.map((stepProps, index) => {
					return (
						<Step key={stepProps.label} {...stepProps}>
							{/* {!<GeneralInfo/>}
							{!<Knowledge/>}
							{<Personality/>} */}
							{/* {isFirstStep && (<GeneralInfo/>)}
							{isSecondStep && (<Knowledge/>)}
							{isLastStep && (<Personality/>)} */}
						</Step>
					);
				})}
				<Footer />
			</Stepper>
		</div>
	);
}

const Footer = () => {
	const {
		nextStep,
		prevStep,
		resetSteps,
		hasCompletedAllSteps,
		isFirstStep,
		isSecondStep,
		isLastStep,
		isOptionalStep,
		isDisabledStep,
	} = useStepper();
	return (
		<>	
			{isFirstStep && (<GeneralInfo/>)}
			{isSecondStep && (<Knowledge/>)}
			{isLastStep && (<Personality/>)}
			{hasCompletedAllSteps && (
				<div className="h-40 flex items-center justify-center my-2 border bg-secondary text-primary rounded-md">
					<h1 className="text-xl">You are ready to go!!! 🎉</h1>
				</div>
			)}
			<div className="w-full flex justify-end gap-2">
				{hasCompletedAllSteps ? (
					<Button size="sm" onClick={resetSteps}>
						Reset
					</Button>
				) : (
					<>
						<Button
							disabled={isDisabledStep}
							onClick={prevStep}
							size="sm"
							variant="secondary"
						>
							Prev
						</Button>
						<Button size="sm" onClick={nextStep}>
							{isLastStep ? "Update" : isOptionalStep ? "Skip" : "Next"}
						</Button>
					</>
				)}
			</div>
		</>
	);
};
