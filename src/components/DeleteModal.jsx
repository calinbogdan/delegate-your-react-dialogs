import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { Button } from '@chakra-ui/react';
import React from 'react';

const DeleteModal = ({ isOpen, onClose, handleDelete }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
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

export default DeleteModal;