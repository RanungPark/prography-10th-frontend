import { ReactNode } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Text from '../Text';

interface InformationModalProps {
  title?: ReactNode;
  children: ReactNode;
  leftButton?: {
    text: string;
    onClick: () => void;
  };
  rightButton?: {
    text: string;
    onClick: () => void;
  };
  onCloseModal: () => void;
}

const InformationModal = ({
  title,
  children,
  leftButton,
  rightButton,
  onCloseModal,
}: InformationModalProps) => {
  return (
    <Backdrop onClick={onCloseModal}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        {title && <Text size="xl">{title}</Text>}
        <Text>{children}</Text>
        <ButtonContainer>
          {leftButton && (
            <Button size="sm" variant="default" onClick={leftButton.onClick}>
              {leftButton.text}
            </Button>
          )}
          {rightButton && (
            <Button size="sm" onClick={rightButton.onClick}>
              {rightButton.text}
            </Button>
          )}
        </ButtonContainer>
      </ModalContainer>
    </Backdrop>
  );
};

export default InformationModal;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translate(-50%);
  background: ${({ theme }) => theme.colors.darkGray80};
  padding: 36px;
  border-radius: 8px;
  width: 450px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
