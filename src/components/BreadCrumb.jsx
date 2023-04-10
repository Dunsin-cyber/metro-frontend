import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react'
  import {ChevronRightIcon} from "@chakra-ui/icons"

function BreadCrumb() {
  return (
    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem >
    <BreadcrumbLink href='/'>Property Registration</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem > 
    <BreadcrumbLink href='/'>Residential</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem >
    <BreadcrumbLink href='/building'>Building</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem >
    <BreadcrumbLink href='/floors'>Floors</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem >
    <BreadcrumbLink href='/units'>Units</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem >
    <BreadcrumbLink href='/apartments'>Apartment</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
  )
}

export default BreadCrumb