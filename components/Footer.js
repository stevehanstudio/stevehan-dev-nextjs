import React from 'react'
import {Stack, Divider, Text} from '@chakra-ui/react'
// import SocialLinks from './SocialLinks'

const Footer = () => {

  return (
    <Stack>
      <Divider />
      <Text>
        &copy;{new Date().getFullYear()} Steve Han. All rights reserved
      </Text>
    </Stack>
  )
}

export default Footer
