import { useStep } from '@/contexts/StepContext';
import styled, { css } from 'styled-components';

const Indicator = () => {
  const { step: currentStep, onIndicatorClick } = useStep();

  const stepLevel = [1, 2, 3];

  return (
    <>
      {currentStep <= 3 && (
        <IndicatorStyled>
          {stepLevel.map(step =>
            step === currentStep || step < currentStep ? (
              <ActiveStep
                key={step}
                $step={step}
                onClick={() => onIndicatorClick(step)}
              >
                {step}
              </ActiveStep>
            ) : (
              <UnActiveStep key={step} $step={step}>
                {step}
              </UnActiveStep>
            )
          )}
        </IndicatorStyled>
      )}
    </>
  );
};

const IndicatorStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UnActiveStep = styled.button<{ $step: number }>`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  border: 3px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.darkGray};
  position: relative;

  ${p =>
    p.$step !== 1 &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: -246px;
        transform: translateY(-50%);
        width: 200px;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.lightGray};
      }
    `}
`;

const ActiveStep = styled(UnActiveStep)`
  border: 3px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &::after {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Indicator;
