import { ReactNode } from 'react';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import RadioButton from './RadioButton';
import Text from '@/components/Text';

type RadioOption = {
  value: string;
  label: string;
};

type RadioType<T extends FieldValues> = {
  id: Path<T>;
  options: RadioOption[];
};

interface RadioFormProps<T extends FieldValues> {
  radio: RadioType<T>;
  children?: ReactNode;
  required?: string;
}

const RadioForm = <T extends FieldValues>({
  radio: { id, options },
  children,
  required,
}: RadioFormProps<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  const errorMessage = errors[id]?.message?.toString();

  return (
    <RadioFormStyled>
      <Text as="p">
        {children}
        {required && (
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
      <Controller
        name={id}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <RadioGroup>
            {options.map(({ value, label }, index) => (
              <RadioButton<T>
                key={`${id}-${index}`}
                field={field}
                value={value}
                label={label}
              />
            ))}
            {errorMessage && (
              <Text size="sm" variant="error">
                {errorMessage}
              </Text>
            )}
          </RadioGroup>
        )}
      />
    </RadioFormStyled>
  );
};

const RadioFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.darkGray50};
  border-radius: 8px;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default RadioForm;
