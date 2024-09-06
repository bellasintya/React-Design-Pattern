import { useState } from "react";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";
import { UncontrolledForm } from "./UncontrolledForm";
import { UncontrolledModal } from "./UncontrolledModal";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

const StepOne = ({ goToNext }) => (
	<>
		<h1>Step 1</h1>
		<button onClick={() => goToNext({ name: 'Garph Doe' })}>Next</button>
	</>
);
const StepTwo = ({ goToNext }) => (
	<>
		<h1>Step 2</h1>
		<button onClick={() => goToNext({ age: 100 })}>Next</button>
	</>
);
const StepThree = ({ goToNext }) => (
	<>
		<h1>Step 3</h1>
		<p>Congratulations! You qualify for our senior discount</p>
		<button  onClick={() => goToNext({})}>Next</button>
	</>
);
const StepFour = ({ goToNext }) => (
	<>
		<h1>Step 4</h1>
		<button  onClick={() => goToNext({ hairColor: 'White' })}>Next</button>
	</>
);


function App() {
	// const [shouldShowModal, setShouldShowModal] = useState(false)

    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

	const onNext = stepData => {
		setOnboardingData({ ...onboardingData, ...stepData });
		setCurrentIndex(currentIndex + 1)
	}
	
	return (
		// <UncontrolledForm />
		// <ControlledForm />

		// <>
		// 	<ControlledModal 
		// 		shouldShow={shouldShowModal}
		// 		onRequestClose={() => { setShouldShowModal(false)}}
		// 	>
		// 		<h1>Hello!</h1>
		// 	</ControlledModal>
		// 	<button onClick={() => setShouldShowModal(!shouldShowModal)}>
		// 		{shouldShowModal ? 'Hide Modal' : 'Show Modal'}
		// 	</button>
		// </>

		<ControlledOnboardingFlow 
			currentIndex={currentIndex}
			onNext={onNext}
		>
			<StepOne />
			<StepTwo />
			{onboardingData.age >= 63 && <StepThree />}
			<StepFour />
		</ControlledOnboardingFlow>
	)
}

export default App;