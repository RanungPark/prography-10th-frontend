import Button from '@/components/Button';
import styled from 'styled-components';

type ButtonHandleKey =
  | 'handlePrevToHome'
  | 'handlePrev'
  | 'handleNext'
  | 'handleSubmit';

type ButtonsProps = Partial<
  Record<ButtonHandleKey, (event: React.MouseEvent<HTMLButtonElement>) => void>
>;

const Buttons = ({
  handlePrevToHome,
  handlePrev,
  handleNext,
  handleSubmit,
}: ButtonsProps) => {
  return (
    <ButtonsStyled>
      <Button
        size="2xl"
        onClick={handlePrevToHome ? handlePrevToHome : handlePrev}
        variant={handlePrevToHome ? 'default' : 'primary'}
      >
        뒤로
      </Button>
      {handleNext ? (
        <Button size="2xl" onClick={handleNext}>
          다음
        </Button>
      ) : (
        <Button size="2xl" onClick={handleSubmit}>
          제출하기
        </Button>
      )}
    </ButtonsStyled>
  );
};

const ButtonsStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Buttons;
