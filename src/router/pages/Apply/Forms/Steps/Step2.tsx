import { RegisterOptions, useFormContext } from 'react-hook-form';
import InputField from '../components/InputField';
import { HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';
import { FormDataType } from '..';
import Title from '../components/Title';
import Buttons from '../components/Buttons';

interface Step2Props {
  onPrev: () => void;
  onNext: () => void;
}

const Step2 = ({ onPrev, onNext }: Step2Props) => {
  const { trigger } = useFormContext<FormDataType>();

  const handlePrev = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onPrev();
  };

  const handleNext = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const isValid = await trigger(['name', 'email', 'phoneNum']);
    if (isValid) onNext();
  };

  return (
    <Step2Styled>
      <Title title="기본 정보" info="연락 가능한 정보를 입력해주세요" />
      {step2InputFileds.map(({ label, input }) => (
        <InputField<FormDataType> key={input.id} input={input}>
          {label}
        </InputField>
      ))}
      <Buttons handlePrev={handlePrev} handleNext={handleNext} />
    </Step2Styled>
  );
};

const Step2Styled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

type Step2InputFiledType = {
  label: string;
  input: {
    id: keyof FormDataType;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    option?: RegisterOptions;
  };
};

const step2InputFileds: Step2InputFiledType[] = [
  {
    label: '성함을 입력해주세요',
    input: {
      id: 'name',
      option: {
        required: '성함은 필수 항목입니다',
      },
    },
  },
  {
    label: '이메일 주소를 입력해주세요',
    input: {
      id: 'email',
      type: 'email',
      placeholder: '예시: prography@gmail.com',
      option: {
        required: '이메일 주소는 필수 항목입니다',
      },
    },
  },
  {
    label: '휴대폰 번호를 입력해주세요',
    input: {
      id: 'phoneNum',
      placeholder: '예시: 010-1234-5678',
      option: {
        required: '휴대폰 번호는 필수 항목입니다',
      },
    },
  },
];

export default Step2;
