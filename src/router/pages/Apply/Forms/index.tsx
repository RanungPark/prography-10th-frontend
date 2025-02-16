import { useStep } from '@/contexts/StepContext';
import { FormProvider, useForm } from 'react-hook-form';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Submit from './Submit';

type FormDataKey = 'agree' | 'name' | 'email' | 'phoneNum' | 'position';

export type FormDataType = Record<FormDataKey, string>;

const Form = () => {
  const { step, nextStep, prevStep } = useStep();

  const methods = useForm<FormDataType>();

  return (
    <FormProvider {...methods}>
      <form>
        {step === 1 && <Step1 onNext={nextStep} />}
        {step === 2 && <Step2 onPrev={prevStep} onNext={nextStep} />}
        {step === 3 && <Step3 onPrev={prevStep} onNext={nextStep} />}
      </form>
      {step > 3 && <Submit />}
    </FormProvider>
  );
};

export default Form;
