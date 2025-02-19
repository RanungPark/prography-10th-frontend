import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

export const useLoadFormData = <T extends FieldValues>(defaultValues: T) => {
  const [showLoadModal, setShowLoadModal] = useState(false);
  const [initialData, setInitialData] = useState<T>(defaultValues);

  const methods = useForm<T>(initialData);

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setShowLoadModal(true);
    }
  }, []);

  useEffect(() => {
    const subscription = methods.watch(values => {
      localStorage.setItem('formData', JSON.stringify(values));
    });

    return () => subscription.unsubscribe();
  }, [methods]);

  const handleLoadData = () => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setInitialData(JSON.parse(storedFormData));
      methods.reset(JSON.parse(storedFormData));
    }
    setShowLoadModal(false);
  };

  const handleResetData = () => {
    setInitialData(defaultValues);
    methods.reset(defaultValues);
    localStorage.removeItem('formData');
    setShowLoadModal(false);
  };

  return {
    methods,
    showLoadModal,
    handleLoadData,
    handleResetData,
  };
};
