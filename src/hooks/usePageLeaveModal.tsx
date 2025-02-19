import { useState } from 'react';
import { useBlocker } from 'react-router-dom';

export const usePageLeaveModal = (isBlock: boolean) => {
  const [showModal, setShowModal] = useState(false);

  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    if (isBlock && currentLocation.pathname !== nextLocation.pathname) {
      setShowModal(true);

      return true;
    }
    return false;
  });

  const handleConfirm = () => {
    setShowModal(false);

    if (blocker.proceed) {
      blocker.proceed();
    }
  };

  const handleCancel = () => {
    setShowModal(false);

    if (blocker.reset) {
      blocker.reset();
    }
  };

  return { showModal, handleConfirm, handleCancel };
};
