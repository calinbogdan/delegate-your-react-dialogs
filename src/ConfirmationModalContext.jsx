import { useDisclosure } from '@chakra-ui/react';
import React, { useRef, createContext, useContext } from 'react';
import DeleteModal from './components/DeleteModal';

const ConfirmationModalContext = createContext();

const ConfirmationModalProvider = ({ children }) => {
  const resolver = useRef();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAsk = () => {
    onOpen();

    return new Promise((resolve) => (resolver.current = resolve));
  };

  const handleConfirm = () => {
    resolver.current && resolver.current(true);
    onClose();
  };

  const handleCancel = () => {
    resolver.current && resolver.current(false);
    onClose();
  };

  return (
    <>
      <DeleteModal
        isOpen={isOpen}
        onClose={handleCancel}
        handleDelete={handleConfirm}
      />
      <ConfirmationModalContext.Provider value={{ ask: handleAsk }}>
        {children}
      </ConfirmationModalContext.Provider>
    </>
  );
};

const useConfirmation = () => {
  return useContext(ConfirmationModalContext);
};

export { ConfirmationModalProvider, useConfirmation };

export default ConfirmationModalContext;