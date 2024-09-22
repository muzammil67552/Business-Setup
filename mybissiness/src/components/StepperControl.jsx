const StepperControl = ({handleClick, currentStep, steps}) => {
    return (
        <div className="container flex justify-around mb-8">
            {/* back button */}
            <button 
                onClick={() => handleClick()}
                className={`btn-primary ${currentStep === 1 ? "cursor-not-allowed" : ""}`}>
                Back
            </button>
            {/* Next button */}
            <button
                onClick={() => handleClick("next")}
                className="btn-primary">
                {currentStep === steps.length - 1 ? "Confirm" : "Next"}
            </button>           
        </div>
    );
};

export default StepperControl;
