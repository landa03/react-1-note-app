import { cloneElement, useState, useRef } from 'react'
// import { ChakraProvider } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

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

let isEditor = false;
// let modalTitle = "";
let editingNoteId;

function AddNote() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [noteState, setNoteState] = useState(0);
  const [modalTitle, setModalTitle] = useState("");
  
  const [notesArray, setNotesArray] = useState([]);
  
  const modalTextArea = useRef(null);
  
  let noteIndex = 0
  function createNote() {
    // TODO: useRef (es un hook de react) v
    // newNoteText = modalTextArea.current.value;
    if (isEditor) {
      notes[editingNoteId] = modalTextArea.current.value;
      onClose();
    }else{
      setNotesArray([...notesArray, {index: noteIndex++, content: modalTextArea.current.value}])
      modalTextArea.current.value = ''
    }
    setNoteState(noteState + 1);
  }
  
  function removeNote(noteIndex) {
    //remainder: react controla html
    //TODO: shadowDom
    // noteButton.deleteElements;
    // notes.splice(noteIndex,1);
    // setNoteState(noteState + 1);
    
    setNoteState(

      notesArray.filter(noteIndex =>
        noteIndex !== notesArray.index
        // notesArray.index !== noteIndex
      )
    )

    // setNotesArray(notesArray.slice(noteIndex+1, noteIndex+notesArray.length))  slice nomas deja lo seleccionado
    console.warn(notesArray)
    // console.warn(notesArray.filter(a =>
      // a.index !== notesArray.index
    // ))
  }
  
  // todo: identificar si es index o id
  function openModal(isEditorButton, noteId) {
    isEditor = isEditorButton;
    if (isEditor) {
      editingNoteId = noteId;
      // modalTitle = "Edit note"
      setModalTitle("Edit note");
      // TODO: cambiar con react
      setTimeout(() => {
        modalTextArea.current.value = notes[noteId];
      }, 10);
    }else{
      // modalTitle = "Create note"
      setModalTitle("Create note");
    }
    onOpen();
  }

  return(
    <>

      {notesArray.map((notesArray, index) =>(
        <div className='newDivCard'>
          <Card>
            <CardBody>
              <div className='newDiv'>
                <p>
                  {/* {notesArray[index]} */}
                  {/* {notesArray[index].textContent} */}
                  {notesArray.content}
                  {/* {index} */}
                </p>
                <div className='newDivBtns'>
                  <button onClick={() => openModal(true, index)}><img src="../asets/edit-icon.png" alt="Edit" /></button>
                  <button onClick={() => removeNote(index)}><img src="../asets/delete-icon.png" alt="Delete" /></button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      ))}

      <div className='add_note_div'>
        <Card>
          <CardBody>
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
              <textarea ref={modalTextArea} id='new-note-text-area'></textarea>
            </ModalBody>
            <ModalFooter>
              <button variant='ghost' onClick={createNote}>{modalTitle}!</button>
            </ModalFooter>
  	      </ModalContent>
        </Modal>
      </div>

    </>
  )
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
  actualizar el value al estilo react - - - - - - - T
  shadowDom - - - - - - - - - - - - - - - - - - - - T
  cambiar con react - - - - - - - - - - - - - - - - T
  ...???
  */}