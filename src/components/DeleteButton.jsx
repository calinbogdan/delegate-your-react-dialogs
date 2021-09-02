import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { Button } from '@chakra-ui/button';
import DeleteModal from './DeleteModal';
import { useConfirmation } from '../ConfirmationModalContext';

const DeleteButton = ({ onClick, ...props }) => {
  const { ask } = useConfirmation();

  const handleDelete = async () => {
    const confirmed = await ask();
    
    if (confirmed) {
      onClick();
    }
  }

  return <>
    <Button onClick={handleDelete} {...props}>Delete</Button>
  </>
}

export default DeleteButton;