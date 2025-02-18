import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import styled, { css } from 'styled-components';

interface RadioButtonProps<T extends FieldValues> {
  field: ControllerRenderProps<T, Path<T>>;
  value: string;
  label: string;
}

const RadioButton = <T extends FieldValues>({
  field,
  value,
  label,
}: RadioButtonProps<T>) => {
  return (
    <RadioButtonStyled $selected={field.value === value}>
      <HiddenRadioButton
        type="radio"
        value={value}
        checked={field.value === value}
        onChange={() => field.onChange(value)}
      />
      {label}
    </RadioButtonStyled>
  );
};

const RadioButtonStyled = styled.label<{ $selected: boolean }>`
  width: 100%;
  padding: 10px 10px 10px 50px;
  border-radius: 8px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkGray80};
  border: 1.5px solid
    ${({ theme, $selected }) => {
      const { primary, lightGray } = theme.colors;
      return $selected ? primary : lightGray;
    }};

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray10};
  }

  &::after {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1.5px solid
      ${({ theme, $selected }) => {
        const { primary, lightGray } = theme.colors;
        return $selected ? primary : lightGray;
      }};
    left: 15px;
  }

  &::before {
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    left: 20px;
    ${p =>
      p.$selected &&
      css`
        background-color: ${({ theme }) => theme.colors.primary};
        border: 1.5px solid ${({ theme }) => theme.colors.primary};
      `}
  }
`;

const HiddenRadioButton = styled.input`
  display: none;
`;

export default RadioButton;
