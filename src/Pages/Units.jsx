import React from 'react'
import {Box, Flex, Button, Text,Input} from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import BreadCrumb from '../components/BreadCrumb'
import Footer from '../components/Footer'
import {useNavigate} from "react-router-dom"
import {AddIcon} from "@chakra-ui/icons"
import Entries from "../../src/components/Units/Entries"

function Units() {
  const nav = useNavigate()

  const handleNav = () => {
    
      nav("/apartments")
    
  }
  return (
    <Box>
    <Navbar/>
   
    <Box h="50px"/>
    <Box pl={8}>
    <BreadCrumb/>
    </Box>

    <Box h="50px"/>
      <Box pl={8}>

 {/* unit custom add on */}


         {/* ------- */}
         <Button px={6} py={4}  borderColor="black">Units</Button>
      <Flex align="center" gap={3} mt={5} color="gray"> 
      <Text>Add Unit</Text>
      <AddIcon h={2} w={2}/>
      </Flex>
      <Input mt={3} w="55%" placeholder='Add a new unit' />

       {/* ------- */}
       <Box h="100px"/>
       <Entries/>
       <Flex my={8} justifyContent="center" align="center">
      <Button bgColor="#003049" color="white" onClick={handleNav}> Add Tenancy</Button>
      </Flex>


      </Box>
      <Footer/>

  </Box>
  )
}

export default Units