import { useState } from "react";
// import from components
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
// import from components/contexts
import StepperContext from "./contexts/StepperContext";
// this import from component/steps
import Business from "./steps/Business";
import Details from "./steps/Details";
import Final from "./steps/Final";

const QuoteForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState("");
    const [finalData, setFinalData] = useState([]);
    const steps = [
        "Business Information",
        "Personal Details",
        "Complete",
    ];

    const displaySteps = (step) => {
        switch (step) {
            case 1:
                return <Business />;
            case 2:
                return <Details />;
            case 3:
                return <Final />;
            default:
                return null;
        }
    };

    const handleClick = (direction) => {
        let newStep = currentStep;
        direction === "next" ? newStep++ : newStep--;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <div className="w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white page-top">
            <div className="container horizontal mt-5">
                <Stepper 
                    steps={steps} 
                    currentStep={currentStep} 
                />
                <div className="my-10 p-10">
                    <StepperContext.Provider value={{
                        userData,
                        setUserData,
                        finalData,
                        setFinalData
                    }}>
                        {displaySteps(currentStep)} {/* Call the function here */}
                    </StepperContext.Provider>
                </div>
            </div>
    
            {/* navigation control */}
            <StepperControl
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
            />
        </div>
    );
};

export default QuoteForm;
