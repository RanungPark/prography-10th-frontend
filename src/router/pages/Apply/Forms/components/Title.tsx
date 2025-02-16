import Text from '@/components/Text';
import styled from 'styled-components';

interface TitleProps {
  title: string;
  info: string;
}

const Title = ({ title, info }: TitleProps) => {
  return (
    <TitleStyled>
      <Text as="span" size="2xl" style={{ fontSize : '28px' }}>
        {title}
      </Text>
      <Text as="p" size="sm">
        {info}
      </Text>
    </TitleStyled>
  );
};

const TitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default Title;
