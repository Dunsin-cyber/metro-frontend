import React from 'react'
import {Box, Flex, Text} from "@chakra-ui/react"

function Footer() {
  return (
    <Flex justifyContent="space-evenly" paddingY={8} paddingX={8} bgColor="#003049" color="white">
        <Box width="30%">
            <Text fontSize="52px">Metro</Text>
            <Text>We are committed to giving you the full
                 experience of finding that dream home and 
                 investment without hassle</Text>
        </Box>
        <Box> 
            <Text fontSize="32px">Quick Link</Text>
            <Box h="70px"/>
            <Text py={2}>About Us</Text>
            <Text py={2}>Services</Text>
            <Text py={2}>Team</Text>
            <Text py={2}>FAQs</Text>
        </Box>
        <Box>
            <Text fontSize="32px">Services</Text>
            <Box h="70px"/>
            <Text py={2}>Wishlist</Text>
            <Text py={2}>my account</Text>
            <Text py={2}>Terms of Use</Text>
            <Text py={2}>Privacy Policy</Text>

        </Box>

    </Flex>
  )
}

export default Footer