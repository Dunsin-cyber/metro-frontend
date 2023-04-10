import React from 'react'
import {Box, Text} from "@chakra-ui/react"

function DashBoardCard({title, value}) {
  return (
    <Box py={6} px={4} boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" w="200px" rounded="sm">
        <Text >{title}</Text>
        <Text fontSize="74px">{value}</Text>
    </Box>
  )
}

export default DashBoardCard