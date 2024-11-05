import { cloneElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../index.scss'
import { ChakraProvider } from '@chakra-ui/react'

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import NoteElement from './NoteElement.jsx'
import AddNote from "./AddNote.jsx";



function App() {

  return (
    <>
    <ChakraProvider>
      {/* <NoteElement /> */}
      <AddNote />
      {/* <AddNote /> */}
    </ChakraProvider>
    </>
  );
}

export default App;
