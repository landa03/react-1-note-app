import React, { useState, useRef } from 'react';
// import React, { createRoot } from 'react-dom/client'
// import { ChakraProvider } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import ReactShadowRoot from 'react-shadow-root';
import root from 'react-shadow';

// import NoteElement from "./NoteElement.jsx";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
// import { delay } from 'framer-motion';


let notes = [];
// let newNoteText = ''

// let modalTitle = "";

function AddNote() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [noteState, setNoteState] = useState(0);
  const [modalTitle, setModalTitle] = useState("");
  const [notesArray, setNotesArray] = useState([]);
  const modalTextArea = useRef(null);
  const [isEditor, setIsEditor] = useState();
  const [modalTextAreaText, setModalTextAreaText] = useState("");
  const [editingNoteId, setEditingNoteId] = useState(0);

  let noteIndex = 0
  function createNote() {
    // TODO: useRef (es un hook de react) v
    // newNoteText = modalTextArea.current.value;
    if (isEditor) {
      notesArray[editingNoteId].content = modalTextArea.current.value;
      onClose();
    }else{
      setNotesArray([...notesArray, {index: noteIndex++, content: modalTextArea.current.value}]);
      modalTextArea.current.value = '';
    }
    setNoteState(noteState + 1);
  }

  
  function removeNote(noteIndex) {
    //remainder: react controla html
    //TODO: shadowDom
    // noteButton.deleteElements;
    // notes.splice(noteIndex,1);
    // setNoteState(noteState + 1);
    
    let arrSlice1 = notesArray.slice(0, noteIndex);
    let arrSlice2 = notesArray.slice(noteIndex+1, notesArray.length);


    setNotesArray(
      arrSlice1.concat(arrSlice2)
    );
  }
  
  // todo: identificar si es index o id   - v
  function openModal(isEditorButton, noteIndex) {
    setIsEditor(isEditorButton);
    // let modalTextAreaText = ""
    if (isEditorButton) {
      setEditingNoteId(noteIndex);
      // modalTitle = "Edit note"
      setModalTitle("Edit note");
      // TODO: cambiar con react  - - - - v
      setModalTextAreaText(notesArray[noteIndex].content);
      // setTimeout(() => {
        // modalTextArea.current.value = notesArray[noteIndex].content;
      // }, 10);
    }else{
      // modalTitle = "Create note"
      setModalTextAreaText("");
      setModalTitle("Create note");
    }
    onOpen();
    // modalTextArea.current.value = modalTextAreaText
  }

  return(
    <>
      {notesArray.map((notesArray, index) =>(
        <div className='newDivCard'>
          <Card>
            <CardBody>
              <div className='newDiv'>
                {/* el estilo no se aplica al shadow dom */}
                <root.div mode='open'>{/*  */}
                  <p>
                    {notesArray.content}
                  </p>
                </root.div>
                <div className='newDivBtns'>
                  <button onClick={() => openModal(true, index)}><img src="../asets/edit-icon.png" alt="Edit" /></button>
                  <button onClick={() => removeNote(index)}><img src="../asets/delete-icon.png" alt="Delete" /></button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      ))}

      {/* <div id='notes_div'></div> */}

      <div className='add_note_div'>
        <Card>
          <CardBody>
            {/* <button className='add_note_button' onClick={() => openModal(false)}> */}
            <button className='add_note_button' onClick={() => openModal(false)}>
              <img src="../asets/plus-icon.png" alt="+" />
            </button>
          </CardBody>
        </Card>
      </div>

      <div className='modal'>
        <Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{modalTitle}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <textarea ref={modalTextArea} id='new-note-text-area'>{modalTextAreaText}</textarea>
            </ModalBody>
            <ModalFooter>
              <button variant='ghost' onClick={createNote}>{modalTitle}!</button>
            </ModalFooter>
  	      </ModalContent>
        </Modal>
      </div>

    </>
  );
}

export default AddNote

{/* TODOs
  se crean elementos  - - - - - - - - - - - - - - - v
  se abre y sierra el modal - - - - - - - - - - - - v
  se agrega el texto  - - - - - - - - - - - - - - - v
  se eliminan elementos - - - - - - - - - - - - - - v
  se habre el modal modificado para editar  - - - - v
  se edita el texto de la nota  - - - - - - - - - - v
R1
  useRef (es un hook de react)  - - - - - - - - - - v
  actualizar el value al estilo react - - - - - - - v
  shadowDom - - - - - - - - - - - - - - - - - - - - T
  cambiar con react - - - - - - - - - - - - - - - - v
  ...???
  */}