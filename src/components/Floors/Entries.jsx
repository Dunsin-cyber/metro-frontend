import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button
  } from '@chakra-ui/react'



function Entries() {
  return (
       <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr>
        <Th>Floors</Th>
        <Th >Total Properties</Th>
        <Th >Units</Th>
        <Th >Action</Th>
        <Th >Action</Th>

      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Floor 5</Td>
        <Td>2</Td>
        <Td isNumeric>22</Td>
      
        <Td>
        <Button>Rename</Button>
        </Td>
        <Td>
        <Button>Delete</Button>
        </Td>
      </Tr>
      <Tr>
        <Td>Floor 3</Td>
        <Td>2</Td>
        <Td isNumeric>22</Td>
        <Td>
        <Button>Rename</Button>
        </Td>
        <Td>
        <Button>Delete</Button>
        </Td>
      </Tr>
    
    </Tbody>
  </Table>
</TableContainer>
  )
}

export default Entries