import { useStep } from '@/contexts/StepContext';
import { FormProvider } from 'react-hook-form';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import { usePageLeaveModal } from '@/hooks/usePageLeaveModal';
import InformationModal from '@/components/Modal/InformationModal';
import { useLoadFormData } from '@/hooks/useLoadFormData';

type FormDataKey = 'agree' | 'name' | 'email' | 'phoneNum' | 'position';
export type FormDataType = Record<FormDataKey, string>;

const defaultValues: FormDataType = {
  agree: '',
  name: '',
  email: '',
  phoneNum: '',
  position: '',
};

const Form = () => {
  const { step, nextStep, prevStep } = useStep();
  const { showModal, handleConfirm, handleCancel } = usePageLeaveModal(
    step <= 3
  );
  const { methods, showLoadModal, handleLoadData, handleResetData } =
    useLoadFormData<FormDataType>(defaultValues);

  return (
    <>
      <FormProvider {...methods}>
        <form>
          {step === 1 && <Step1 onNext={nextStep} />}
          {step === 2 && <Step2 onPrev={prevStep} onNext={nextStep} />}
          {step === 3 && <Step3 onPrev={prevStep} onNext={nextStep} />}
        </form>
      </FormProvider>

      {showModal && (
        <InformationModal
          leftButton={{ text: '나가기', onClick: handleConfirm }}
          rightButton={{ text: '유지하기', onClick: handleCancel }}
          onCloseModal={handleCancel}
          title="페이지 저장 안내"
        >
          현재 페이지가 저장이 되지 않았습니다.
        </InformationModal>
      )}

      {showLoadModal && (
        <InformationModal
          title="저장된 데이터 불러오기"
          leftButton={{ text: '새로 작성', onClick: handleResetData }}
          rightButton={{ text: '불러오기', onClick: handleLoadData }}
          onCloseModal={handleResetData}
        >
          이전에 저장된 폼 데이터가 있습니다. 불러오시겠습니까?
        </InformationModal>
      )}
    </>
  );
};

export default Form;
