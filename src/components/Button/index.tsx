import { ReactNode } from 'react';
import styled, { RuleSet } from 'styled-components';
import { SIZE, VARIANT } from './styles';
import { ButtonSizePick, ButtonVariantPick } from '@/@types/common';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: ButtonSizePick;
  variant?: ButtonVariantPick;
}

const Button = ({
  children,
  size = 'sm',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const sizeStyle = SIZE[size];
  const variantStyle = VARIANT[variant];

  return (
    <ButtonStyled $size={sizeStyle} $variant={variantStyle} {...props}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<{
  $size: RuleSet<object>;
  $variant: RuleSet<object>;
}>`
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 30px;
  font-weight: 600;
  height: 50px;

  ${p => p.$size}
  ${p => p.$variant}
`;

export default Button;
