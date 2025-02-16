import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface StepType {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  onIndicatorClick: (step: number) => void;
}

const StepContext = createContext<StepType | null>(null);

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  const onIndicatorClick = (step: number) => setStep(step);

  const value = useMemo(
    () => ({ step, nextStep, prevStep, onIndicatorClick }),
    [step]
  );

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('StepProvider 내부에서 사용해야 합니다.');
  }
  return context;
};
