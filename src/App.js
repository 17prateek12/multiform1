import React from 'react';
import { useFormContext } from './context/FormContext';
import StepOne from './component/StepOne';
import StepTwo from './component/StepTwo';
import StepThree from './component/StepThree';
import StepFour from './component/StepFour';

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

function App() {
  const {
    step,
    completed,
    next,
    prev,
    reset,
    allStepCompleted,
    handleComplete,
    formValues
  } = useFormContext();

  const renderStepForm = (step) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      case 3:
        return <StepFour />;
      default:
        return <StepOne />;
    }
  };

  const handleNext = () => {
    // Call handleComplete to mark the step as completed
    handleComplete();
  };

  return (
    <div className="my-20 max-w-full mx-auto flex flex-col items-center px-4">
      {allStepCompleted() ? (
        <div className="flex items-center justify-between pt-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      ) : (
        <div className="max-w-[600px] px-[50px] sm:px-4 h-auto bg-white py-8 rounded-lg w-full">
          <div className=''>
            {renderStepForm(step)}
          </div>
          <div className="flex justify-between items-center pt-4">
            {step > 0 && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                onClick={prev}
              >
                Back
              </button>
            )}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none ml-4"
              onClick={handleNext}
            >
              {step === steps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
          <div className="flex justify-center pt-6">
            {steps.map((_, index) => (
              <div key={index} className="flex flex-col items-center mx-2">
                <button
                  className={`w-4 h-4 rounded-[50%] border border-gray-700 ${
                    completed[index] ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
