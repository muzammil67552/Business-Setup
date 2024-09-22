/* eslint-disable react/prop-types */

const StepperControl = ({handleClick, currentStep, steps}) => {
   

    return (
        <div className="container flex justify-center md:mx-12 gap-5  ">
            {/* back button */}
            <button 
                onClick={() => handleClick()}
                className={`btn-primary md:w-52 w-44  ${currentStep === 1 ? "cursor-not-allowed" : ""}`}>
                Back
            </button>
            {/* Next button */}
            <button
                onClick={() => handleClick("next")}
                className="btn-primary md:w-52 w-44 ">
                {currentStep === steps.length - 1 ? "Confirm" : "Next"}
            </button>           
        </div>
    );
};

export default StepperControl;
