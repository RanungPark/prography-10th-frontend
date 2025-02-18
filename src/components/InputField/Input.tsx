import styled, { css } from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = ({ error, ...props }: InputProps) => {
  return <InputStyled $error={error} {...props} />;
};

const InputStyled = styled.input<{ $error?: boolean }>`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.darkGray80};
  border: 1.5px solid ${({ theme }) => theme.colors.lightGray};

  &:focus {
    background-color: ${({ theme }) => theme.colors.darkGray10};
  }

  ${({ $error }) =>
    $error &&
    css`
      border: 1.5px solid ${({ theme }) => theme.colors.secondary};

      &:focus {
        border: 1.5px solid ${({ theme }) => theme.colors.secondaryHover};
      }
    `}
`;

export default Input;
