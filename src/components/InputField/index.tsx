import styled from 'styled-components';
import Input from './Input';
import { HTMLInputTypeAttribute, ReactNode } from 'react';
import {
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import Text from '@/components/Text';

type InputType<T extends FieldValues> = {
  id: Path<T>;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  option?: RegisterOptions;
  onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | null;
};

interface InputFieldProps<T extends FieldValues> {
  input: InputType<T>;
  children?: ReactNode;
}

const InputField = <T extends FieldValues>({
  input: { id, type = 'text', placeholder, option, onChange },
  children,
}: InputFieldProps<T>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[id]?.message?.toString();

  return (
    <InputFieldStyled htmlFor={id}>
      <Text as="p">
        {children}
        {option?.required && (
          <Text
            variant="primary"
            as="span"
            size="lg"
            style={{ marginLeft: '5px' }}
          >
            *
          </Text>
        )}
      </Text>
      <InputWrapper>
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          error={!!errors[id]}
          {...register(id, {
            ...option,
            onChange: e => {
              if (onChange) {
                onChange(e);
              }
            },
          })}
          onKeyDown={e => {
            if (e.key === 'Enter') e.preventDefault();
          }}
        />
        {errorMessage && (
          <Text size="sm" variant="error">
            {errorMessage}
          </Text>
        )}
      </InputWrapper>
    </InputFieldStyled>
  );
};

const InputFieldStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.darkGray50};
  border-radius: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default InputField;
