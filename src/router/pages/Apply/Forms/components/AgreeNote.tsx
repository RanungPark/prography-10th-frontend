import Text from '@/components/Text';
import styled from 'styled-components';

const AgreeNote = () => {
  return (
    <AgreeNoteStyled>
      <Text as="p">수집 목적: Prography 10기 리쿠르팅 과정 및 결과 안내</Text>
      <Text as="p">
        수집 항목: 이름, 이메일, 핸드폰번호, 학교 정보 및 직장 정보
      </Text>
      <Text as="p">
        보유 및 이용 기간: 리쿠르팅과정 종료일(3월 7일) 이후 파기
      </Text>
    </AgreeNoteStyled>
  );
};

const AgreeNoteStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.darkGray50};
  border-radius: 8px;
`;

export default AgreeNote;
