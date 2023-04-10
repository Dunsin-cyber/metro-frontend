import React from 'react'
import {MenuButton, MenuList, MenuItem, Menu, Button} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'

function Menu_({name}) {
  return (
  <Menu>
  <MenuButton as={Button} fontSize={12}  px={6}
    py={2} >
    {name} <ChevronDownIcon/>
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
  )
}

export default Menu_