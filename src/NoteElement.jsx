import { cloneElement, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

function NoteElement() {
    return (
      <div className='newDiv'>
        <Card>
          <CardBody>
            <p>
              ...
            </p>
            <div className='newDivBtns'>
              <button><img src="../asets/edit-icon.png" alt="Edit" /></button>
              <button><img src="../asets/delete-icon.png" alt="Delete" /></button>
            </div>
          </CardBody>
        </Card>
      </div>
  
    );
  }

  export default NoteElement