import { Size, Variant } from '@/@types/common';
import { css, RuleSet } from 'styled-components';

export const VARIANT: Record<Variant, RuleSet<object>> = {
  default: css``,
  primary: css`
    color: ${({ theme }) => theme.colors.primary};
  `,
  success: css`
    color: ${({ theme }) => theme.colors.blue};
  `,
  warning: css`
    color: ${({ theme }) => theme.colors.orange};
  `,
  error: css`
    color: ${({ theme }) => theme.colors.secondary};
  `,
};

export const SIZE: Record<Size, RuleSet<object>> = {
  xs: css`
    font-size: 12px;
  `,
  sm: css`
    font-size: 14px;
  `,
  md: css`
    font-size: 16px;
  `,
  lg: css`
    font-size: 18px;
    font-weight: 500;
  `,
  xl: css`
    font-size: 20px;
    font-weight: 600;
  `,
  '2xl': css`
    font-size: 24px;
    font-weight: 600;
  `,
  '3xl': css`
    font-size: 32px;
    font-weight: 600;
  `,
};
