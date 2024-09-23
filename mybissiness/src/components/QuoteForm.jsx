import { useState, useEffect } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import StepperContext from "./contexts/StepperContext";
import Business from "./steps/Business";
import Details from "./steps/Details";
import Final from "./steps/Final";
import TestimonialSlider from "./TestimonialSlider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuoteForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState({
        businessCategory: "",
        numberOfOwners: "",
        spaceType: "",
        residenceVisas: "",
        name: "",
        email: "",
        contactNumber: "",
        nationality: "",
        city: "",
        startBusiness: "",
    });
    const [finalData, setFinalData] = useState([]);

    const steps = ["Business Information", "Personal Details", "Complete"];

    const validateStep = () => {
        if (currentStep === 1) {
            if (!userData.businessCategory || !userData.numberOfOwners || !userData.spaceType || !userData.residenceVisas) {
                toast.error("Please fill out all business information fields!");
                return false;
            }
        } else if (currentStep === 2) {
            if (!userData.name || !userData.email || !userData.contactNumber || !userData.nationality || !userData.city || !userData.startBusiness) {
                toast.error("Please fill out all personal details!");
                return false;
            }
        }
        return true;
    };

    const handleClick = (direction) => {
        let newStep = currentStep;

        if (direction === "next") {
            if (!validateStep()) {
                return;
            }
            newStep++;
        } else {
            newStep--;
        }

        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

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

    return (
        <>

          <div className=" page-top">
               <h1 className="md:text-5xl font-semibold text-3xl text-center mt-8">Setup Business In Oman With 100% OwnerShip</h1>
                <h1 className="md:text-4xl font-semibold text-2xl text-center md:mb-8 mt-12 text-[#4CAF4F] ">What We Provide For Our Valuable Customers</h1>
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 justify-evenly p-10  ">
                    <div className="flex flex-col items-center  mt-10   shadow-lg  ">
                       <img className="  md:p-12 " src="/tradmark2.png" alt="Trade Mark" />
                        <h2 className="md:text-2xl text-xl text-center text-red-800">Trade Mark</h2>
                     </div>
                     <div className="flex flex-col items-center   mt-10  shadow-lg ">
                       <img className=" md:text-3xl text-2x  " src="/finalizaactivity.png" alt="Trade Mark" />
                       <h2 className="md:text-2xl text-xl text-center text-red-800">Finalizing Activity</h2>
                     </div>
                      <div className="flex flex-col items-center p-10   mt-10 shadow-lg">
                        <img className=" md:p-8" src="/documents.png" alt="Trade Mark" />
                        <h2 className="md:text-2xl text-xl text-center text-red-800">Clear Documentation</h2>
                      </div>
                       <div className="flex flex-col items-center p-10   mt-10  shadow-lg ">
                         <img className=" mb-2" src="/goldenvisa.png" alt="Trade Mark" />
                         <h2 className="md:text-2xl text-xl text-center text-red-800">Golden Visa</h2>
                       </div>
                </div>
            </div>
            <div className="flex justify-center  md:mt-32 mt-16">
              <div>
                    <h2 className="md:text-3xl font-medium text-2xl text-center mt-3">Calculate Cost</h2>
                    <p className="md:text-2xl text-red-700 text-xl text-center mt-3 ">Please Fill Up The Below Requirements</p>
             </div>
            </div>

            <div className="md:mt-16 mt-8">
                
                {/* Stepper Component */}
                <div className="mx-auto shadow-md rounded-2xl pb-8 bg-white mt-10">
                    <div className="container horizontal mt-5 justify-center mx-auto md:px-64">
                        <Stepper steps={steps} currentStep={currentStep} />
                        <div className="my-10 p-10 mx-auto">
                            <StepperContext.Provider value={{ userData, setUserData, finalData, setFinalData }}>
                                {displaySteps(currentStep)}
                            </StepperContext.Provider>
                        </div>
                    </div>
                    <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
                </div>
            </div>
            <div>
                <TestimonialSlider/>
            </div>

            <ToastContainer position="top-right " autoClose={5000} hideProgressBar={false} />
        </>
    );
};

export default QuoteForm;
