import React, { useContext } from 'react'
import {
  Box,
  VStack,
  Text,
	Divider
} from '@chakra-ui/react'
import Navbar from './Navbar';
import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
  return (
		<VStack>
			<Box pos='absolute' top='0.7rem' right='0.8rem'>
				<DarkModeSwitch />
			</Box>
			<Text
				fontSize='8xl'
				fontWeight={300}
				lineHeight={1}
				mb={0}
				pb={0}
				letterSpacing='0.2rem'
			>
				STEVE HAN
			</Text>
			<Text
				fontSize='2xl'
				fontWeight={500}
				letterSpacing={1.7}
				// mt={0}
				// pt={0}
				lineHeight={1}
			>
				Frontend Focused Full Stack Web Developer
			</Text>
			<Navbar />
			<Divider />
		</VStack>
  );
}

export default Header
