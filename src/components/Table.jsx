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
  } from '@chakra-ui/react'



function Table_() {
  return (
    <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr>
        <Th>Development Name</Th>
        <Th>Floor</Th>
        <Th isNumeric>Unit ID</Th>
        <Th >Unit Type</Th>
        <Th >Unit No</Th>
        <Th >Bedrooms</Th>
        <Th >Occupancy</Th>
        <Th >Building Manager</Th>
        <Th >Property Manager</Th>

      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Dunsin Flat</Td>
        <Td>Floor 2</Td>
        <Td isNumeric>22</Td>
        <Td>Penthouse</Td>
        <Td isNumeric>400</Td>
        <Td>3 BR</Td>
        <Td>Vacant</Td>
        <Td>sam walsh</Td>
        <Td>Peter Jaker</Td>
      </Tr>
      <Tr>
      <Td>Jeff Flat</Td>
        <Td>Floor 2</Td>
        <Td isNumeric>22</Td>
        <Td>Penthouse</Td>
        <Td isNumeric>400</Td>
        <Td>3 BR</Td>
        <Td>Vacant</Td>
        <Td>sam walsh</Td>
        <Td>Elon Musk</Td>
      </Tr>
      <Tr>
      <Td>jakay Apartment</Td>
        <Td>Floor 21</Td>
        <Td isNumeric>22</Td>
        <Td>Penthouse</Td>
        <Td isNumeric>400</Td>
        <Td>3 BR</Td>
        <Td>Vacant</Td>
        <Td>sam walsh</Td>
        <Td>Tim Ross</Td>
      </Tr>
      <Tr>
      <Td>Bumbat House</Td>
        <Td>Floor 32</Td>
        <Td isNumeric>12</Td>
        <Td>Penthouse</Td>
        <Td isNumeric>420</Td>
        <Td>1 BR</Td>
        <Td>Vacant</Td>
        <Td>Jacon Man</Td>
        <Td>Peter Cook</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
  )
}

export default Table_