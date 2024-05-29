import { LucideIcon } from "lucide-react";

const IconType = LucideIcon || React.ComponentType || undefined;

const StepItem = {
	id: undefined,
	label: undefined,
	description: undefined,
	icon: IconType,
	optional: undefined,
};

const StepOptions = {
	orientation: undefined,
	state: undefined,
	responsive: undefined,
	checkIcon: IconType,
	errorIcon: IconType,
	onClickStep: undefined,
	mobileBreakpoint: undefined,
	variant: undefined,
	expandVerticalSteps: undefined,
	size: undefined,
	styles: {
		"main-container": undefined,
		"horizontal-step": undefined,
		"horizontal-step-container": undefined,
		"vertical-step": undefined,
		"vertical-step-container": undefined,
		"vertical-step-content": undefined,
		"step-button-container": undefined,
		"step-label-container": undefined,
		"step-label": undefined,
		"step-description": undefined,
	},
	variables: {
		"--step-icon-size": undefined,
		"--step-gap": undefined,
	},
	scrollTracking: undefined,
};

const StepperProps = {
	...StepOptions,
	children: undefined,
	className: undefined,
	initialStep: undefined,
	steps: [],
};

const StepProps = {
	...React.HTMLAttributes,
	label: undefined,
	description: undefined,
	icon: IconType,
	state: undefined,
	checkIcon: IconType,
	errorIcon: IconType,
	isCompletedStep: undefined,
	isKeepError: undefined,
	onClickStep: undefined,
};

const StepSharedProps = {
	...StepProps,
	isLastStep: undefined,
	isCurrentStep: undefined,
	index: undefined,
	hasVisited: undefined,
	isError: undefined,
	isLoading: undefined,
};

export {
	IconType,
	StepItem,
	StepOptions,
	StepperProps,
	StepProps,
	StepSharedProps,
};
