import React from 'react'
import {Box, Flex, Text, Button, Input} from "@chakra-ui/react"
import {AddIcon} from "@chakra-ui/icons"
import Navbar from "../components/Navbar"
import BreadCrumb from '../components/BreadCrumb'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import {useNavigate} from "react-router-dom"
import Entries from '../components/Building/Entries'



function Building() {
  const nav = useNavigate()

  const handleNav = () => {
    
      nav("/floors")
    
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
      <Button px={6} py={4}  borderColor="black">Development</Button>
      <Flex align="center" gap={3} mt={5} color="gray"> 
      <Text>Add Building</Text>
      <AddIcon h={2} w={2}/>
      </Flex>
      <Input mt={3} w="55%" placeholder='Enter...' />

       {/* ------- */}



      <Box h="100px"/>
      <Flex px={8}  gap="100px">
        <Menu name="Building name"/>
        <Menu name="Total floors"/> 
         <Menu name="city"/>  
         <Menu name="Area"/> 
         <Menu name="Street"/> 
         <Menu name="Building Manager"/> 
      </Flex>
      </Box>

      <Flex my={8} justifyContent="center" align="center">
      <Button bgColor="#003049" color="white" onClick={handleNav}> Floors</Button>
      </Flex>
      <Entries/>
      <Footer/>
      
    </Box>
  )
}

export default Building