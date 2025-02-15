import { Size, Variant } from '@/@types/common';
import { AllHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { KnownTarget, RuleSet } from 'styled-components/dist/types';
import { SIZE, VARIANT } from './styles';

interface TextProps
  extends Omit<AllHTMLAttributes<HTMLElement>, 'size' | 'as'> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  as?: KnownTarget;
}

const Text = ({
  children,
  as,
  variant = 'default',
  size = 'md',
  ...props
}: TextProps) => {
  const variantStyle = VARIANT[variant];
  const sizeStyle = SIZE[size];

  return (
    <TextStyled as={as} $variant={variantStyle} $size={sizeStyle} {...props}>
      {children}
    </TextStyled>
  );
};

const TextStyled = styled.div<{
  $variant: RuleSet<object>;
  $size: RuleSet<object>;
}>`
  ${p => p.$size}
  ${p => p.$variant}
`;

export default Text;
