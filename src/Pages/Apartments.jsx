import React from 'react'
import {Box, Flex, Button} from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import BreadCrumb from '../components/BreadCrumb'

function Apartments() {
  return (
    <Box>
    <Navbar/>
   
    <Box h="50px"/>
    <Box pl={8}>
    <BreadCrumb/>
    </Box>
  </Box>
  )
}

export default Apartments