import React from 'react'
import {Box, Flex, Button} from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import DashBoardCard from '../components/DashBoardCard'
import Menu from '../components/Menu'
import Table from '../components/Table'
import Footer from '../components/Footer'
import BreadCrumb from '../components/BreadCrumb'

function landingPage() {
  return (
    <div>
      <Navbar/>
      <Box h="50px"/>
      <Box pl={8}>
      <BreadCrumb/>
      </Box>
      <Box h="50px"/>
      <Flex pl={8} gap={12}>
      <DashBoardCard title="Total Buildings" value="58"/>
      <DashBoardCard title="Total Units" value="128"/>
      </Flex>
      <Box h="100px"/>
      <Flex px={8}  gap="100px">
        <Menu name="Development"/>
        <Menu name="Unit Type"/> 
         <Menu name="Bedroom"/>  
         <Menu name="Occupancy"/> 
         <Menu name="Building Manager"/> 
         <Menu name="Property Manager"/> 
      </Flex>
      <Box h="100px"/>
      <Table/>
      <Box h="100px"/>
      <Flex justifyContent="center" align="center">
      <Button bgColor="#003049" color="white"> Manage Properties</Button>
      </Flex>
      <Box h="100px"/>
      <Footer/>
      </div>
  )
}

export default landingPage