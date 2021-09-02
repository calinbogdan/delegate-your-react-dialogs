import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { Button } from '@chakra-ui/button';
import { Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter } from '@chakra-ui/modal';
import { useToast } from '@chakra-ui/react';

const DeleteModal = ({ isOpen, onClose, handleDelete }) => (
  <Modal isOpen={isOpen}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Are you sure?</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        Deleting this resource is an irreversible action. Are you sure you
        want to proceed?
      </ModalBody>
      <ModalFooter>
        <Button variant="ghost" onClick={onClose}>
          I've changed my mind
        </Button>
        <Button colorScheme="blue" ml={3} onClick={handleDelete}>
          Yes, delete
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)

const ContainerComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const handleDelete = () => {
    // delete logic 
    onClose();

    toast({
      title: "Resource deleted",
      status: "success"
    })
  }

  return (
    <div>
      <Button onClick={onOpen}>Delete</Button>
      <DeleteModal isOpen={isOpen} onClose={onClose} handleDelete={handleDelete} />
    </div>
  )
}

export default ContainerComponent
