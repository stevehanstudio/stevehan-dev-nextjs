import React from 'react'
import { useColorMode, useColorModeValue, Stack, Divider, Text } from '@chakra-ui/react'
// import SocialLinks from './SocialLinks'

const Footer = () => {
	const { colorMode } = useColorMode();
	// const value = useColorModeValue(lightModeValue, darkModeValue);
	// console.log(colorMode, value);
	return (
		<Stack role="contentinfo" w='100%' mt='auto' h='2.6rem'>
			<Divider />
			<Text textAlign='center'>
				&copy;{new Date().getFullYear()} Steve Han. All rights reserved
			</Text>
		</Stack>
	);
}

export default Footer
