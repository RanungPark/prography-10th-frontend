import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import Buttons from '../components/Buttons';
import Title from '../components/Title';
import { useNavigate } from 'react-router-dom';
import RadioForm from '../../../../../components/RadioForm';
import { FormDataType } from '..';
import AgreeNote from '../components/AgreeNote';

interface Step1Props {
  onNext: () => void;
}

const Step1 = ({ onNext }: Step1Props) => {
  const { getValues, trigger, setError } = useFormContext<FormDataType>();
  const navigate = useNavigate();

  const handlePrevToHome = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(-1);
  };

  const handleNext = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const isValid = await trigger('agree');
    const agreeValue = getValues('agree');

    if (!isValid) return;

    if (agreeValue === 'false') {
      setError('agree', { message: '개인정보 수집 여부에 동의해주세요' });
      return;
    }

    onNext();
  };

  return (
    <Step1Styled>
      <Title
        title="개인정보 수집 동의"
        info="프로그라피 10기 지원을 위한 개인정보 수집에 대한 동의가 필요합니다"
      />
      <AgreeNote />
      <RadioForm<FormDataType>
        radio={{
          id: 'agree',
          options: [
            { value: 'true', label: '개인정보 수집 여부에 동의합니다' },
            {
              value: 'false',
              label: '개인정보 수집 여부에 동의하지 않습니다',
            },
          ],
        }}
        required="개인정보 수집 동의는 필수 항목입니다"
      >
        개인정보 수집여부 동의 여부를 체크해주세요
      </RadioForm>
      <Buttons handlePrevToHome={handlePrevToHome} handleNext={handleNext} />
    </Step1Styled>
  );
};

const Step1Styled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default Step1;
