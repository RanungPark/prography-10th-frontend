import { StepProvider } from '@/contexts/StepContext';
import Form from './Forms';
import Indicator from './Indicator';
import styled from 'styled-components';
import Text from '@/components/Text';

const Apply = () => {
  return (
    <ApplyLayout>
      <Text
        as="h1"
        style={{ fontSize: '40px', textAlign: 'center' }}
        size="2xl"
      >
        Prography 10기 지원서
      </Text>
      <StepProvider>
        <Indicator />
        <Form />
      </StepProvider>
    </ApplyLayout>
  );
};

const ApplyLayout = styled.main`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 20px;
`;

export default Apply;
