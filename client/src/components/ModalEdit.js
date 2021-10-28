import React from "react";
import { Modal, ModalOverlay, ModalContent, Heading } from "@chakra-ui/react";
import { FormEditTodo } from "../components/FormEditTodo";

export function ModalEdit({ onClose, isOpen, dataInit }) {
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <Heading
          className="py-5 text-center"
          as="h2"
          bgClip="text"
          bgGradient="linear(to-r, teal.500, green.500)"
          size="md"
        >
          Edit Todo
        </Heading>
        <FormEditTodo dataInit={dataInit} onClose={onClose} />
      </ModalContent>
    </Modal>
  );
}