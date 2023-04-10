import React from 'react'
import {Box, Flex, Text,Input,  Button} from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import BreadCrumb from '../components/BreadCrumb'
import Entries from '../components/Floors/Entries'
import Footer from '../components/Footer'
import {useNavigate} from "react-router-dom"
import {AddIcon} from "@chakra-ui/icons"


function Floors() {
  const nav = useNavigate()

  const handleNav = () => {
    
      nav("/units")
    
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
        {/* development custom add on */}


         {/* ------- */}
      <Button px={6} py={4}  borderColor="black">Floors</Button>
      <Flex align="center" gap={3} mt={5} color="gray"> 
      <Text>Add FLoor</Text>
      <AddIcon h={2} w={2}/>
      </Flex>
      <Input mt={3} w="55%" placeholder='Add a new floor' />

       {/* ------- */}
       <Box h="100px"/>
       <Entries/>
       <Flex my={8} justifyContent="center" align="center">
      <Button bgColor="#003049" color="white" onClick={handleNav}> Add Units</Button>
      </Flex>
     

    

      </Box>
      <Footer/>
    </Box>
  )
}

export default Floors