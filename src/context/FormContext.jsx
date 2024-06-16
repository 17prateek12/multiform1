import React, { createContext, useContext, useState, useEffect } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

const FormProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [formValues, setFormValues] = useState(() => {
    const saved = localStorage.getItem('formValues');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    const savedStep = localStorage.getItem('step');
    if (savedStep) {
      setStep(parseInt(savedStep));
    }
  }, []);

  const totalSteps = () => {
    return 4; // Change this if you have more or fewer steps
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return step === totalSteps() - 1;
  };

  const allStepCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const next = (values) => {
    const newFormValues = { ...formValues, ...values };
    setFormValues(newFormValues);
    localStorage.setItem('formValues', JSON.stringify(newFormValues));
    const newStep = isLastStep() && !allStepCompleted() ?
      Array.from({ length: totalSteps() }).findIndex((_, i) => !(i in completed))
      : step + 1;
    setStep(newStep);
    localStorage.setItem('step', newStep.toString());
  };

  const prev = () => {
    const newStep = step - 1;
    setStep(newStep);
    localStorage.setItem('step', newStep.toString());
  };

  const reset = () => {
    setFormValues({});
    setStep(0);
    setCompleted({});
    localStorage.removeItem('formValues');
    localStorage.removeItem('step');
  };

  const handleComplete = () => {
    const newCompleted = { ...completed };
    newCompleted[step] = true;
    setCompleted(newCompleted);
    next();
  };

  const value = {
    step,
    completed,
    formValues,
    totalSteps,
    completedSteps,
    isLastStep,
    allStepCompleted,
    next,
    prev,
    reset,
    handleComplete
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
