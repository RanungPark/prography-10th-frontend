import { useFormContext } from 'react-hook-form';
import Title from '../components/Title';
import Buttons from '../components/Buttons';
import styled from 'styled-components';
import { FormDataType } from '..';
import RadioForm from '../../../../../components/RadioForm';

interface Step3Props {
  onPrev: () => void;
  onNext: () => void;
}

const Step3 = ({ onPrev, onNext }: Step3Props) => {
  const { trigger } = useFormContext<FormDataType>();

  const handlePrev = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onPrev();
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const isValid = await trigger('position');
    if (isValid) onNext();
  };

  return (
    <Step3Styled>
      <Title title="지원 정보" info="지원하고자 하는 분야를 선택해주세요" />
      <RadioForm<FormDataType>
        radio={{
          id: 'position',
          options: [
            { value: 'Frontend', label: '프론트엔드' },
            {
              value: 'Backend',
              label: '백엔드',
            },
            {
              value: 'Design',
              label: '디자인',
            },
            {
              value: 'iOS',
              label: 'iOS',
            },
            {
              value: 'Android',
              label: '안드로이드',
            },
            {
              value: 'PO',
              label: 'Product Owner',
            },
          ],
        }}
        required="지원 정보는 필수 항목입니다"
      >
        지원 분야를 선택해주세요
      </RadioForm>
      <Buttons handlePrev={handlePrev} handleSubmit={handleSubmit} />
    </Step3Styled>
  );
};

const Step3Styled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default Step3;
