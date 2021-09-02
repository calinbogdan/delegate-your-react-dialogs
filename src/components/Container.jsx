import { Heading, useToast } from '@chakra-ui/react';
import React from 'react';
import DeleteButton from './DeleteButton';

const ContainerComponent = () => {

  const toast = useToast();

  const handleDelete = () => {
    // delete logic 
    toast({
      title: "Resource deleted",
      status: "success"
    })
  }

  return (
    <div>
      <DeleteButton onClick={handleDelete} />
    </div>
  )
}

export default ContainerComponent
