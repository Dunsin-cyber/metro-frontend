import React from 'react'
import {Box, Text, Input} from "@chakra-ui/react"

function Navbar() {
  return (
    <Box justifyContent="space-evenly" gap={9} display="flex" alignItems="center" color="black" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
        <Box>
            <Text fontSize={32}>Metro.</Text>
            <Text color="#FF6400" fontSize={12}>PROPERTY MANAGEMENT</Text>
        </Box>

        <Input  placeholder='Search' size='sm' width="30%" />
        <Text>Home</Text>
        <Text>About Us</Text>
        <Text>Services</Text>
        <Text>Property Mgt.</Text>
        <Text>Contact Us</Text>
        <Box bgColor="gray" rounded="full" w="26px" h="26px" />



    </Box>
  )
}

export default Navbar


function Card () {
    return (
        <Text></Text>
    )
}