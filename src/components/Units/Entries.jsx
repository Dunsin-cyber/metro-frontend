import React from 'react'
import {Flex, Text, Input} from "@chakra-ui/react"

function Entries() {
  return (
    <Flex gap={3}>
      <Input_ name="Unit No" val="5"/>
      <Input_ name="Bedrooms" val="Number"/>
        <Input_ name="Size" val="xs"/>
        <Input_ name="Premise No" val="35"/>
        <Input_ name="Property ID" val="65"/>

    </Flex>
  )
}

export default Entries


function Input_ ({name, val}) {
  return (
    <Flex align="center" gap={1}>
      <Text>{name}</Text>
      <Input py={3} px={2} placeholder={val}/>
    </Flex>
  )
}