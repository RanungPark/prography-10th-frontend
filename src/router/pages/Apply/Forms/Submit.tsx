import Button from '@/components/Button';
import Text from '@/components/Text';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Submit = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <SubmitStyled>
      <Check>✓</Check>
      <Text as="h1" size="3xl">
        지원이 완료되었습니다!
      </Text>
      <Box>
        <Text as="p" size="lg">
          프로그라피 10기 지원해주셔서 감사합니다.
        </Text>
        <Text as="p" size="lg">
          서류 심사 결과는 입력하신 이메일로 안내드릴 예정입니다.
        </Text>
      </Box>
      <Button size="xl" onClick={handleClick}>
        홈으로 돌아가기
      </Button>
    </SubmitStyled>
  );
};

const SubmitStyled = styled.div`
  width: 100%;
  padding: 60px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const Check = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default Submit;
