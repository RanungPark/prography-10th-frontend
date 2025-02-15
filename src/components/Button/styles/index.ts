import { ButtonSizePick, ButtonVariantPick } from '@/@types/common';
import { css, RuleSet } from 'styled-components';

export const SIZE: Record<ButtonSizePick, RuleSet<object>> = {
  sm: css`
    font-size: 14px;
    min-width: 80px;
  `,
  md: css`
    font-size: 16px;
    min-width: 120px;
  `,
  lg: css`
    font-size: 18px;
    min-width: 150px;
  `,
  xl: css`
    font-size: 18px;
    min-width: 200px;
  `,
  '2xl': css`
    font-size: 18px;
    min-width: 300px;
  `,
};

export const VARIANT: Record<ButtonVariantPick, RuleSet<object>> = {
  default: css`
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.darkGray80};

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkGray50};
      color: ${({ theme }) => theme.colors.lightGray};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.darkGray80};
      color: ${({ theme }) => theme.colors.lightGray};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.black};
      border: 1.5px solid ${({ theme }) => theme.colors.lightGray};
      color: ${({ theme }) => theme.colors.lightGray};
      cursor: not-allowed;
    }
  `,
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary100};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.primaryActive};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.lightGray};
      cursor: not-allowed;
    }
  `,
};
