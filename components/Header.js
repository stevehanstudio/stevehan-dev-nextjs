import React, { useContext } from 'react'
import {
  Box,
  VStack,
  Text,
	Tooltip,
	Divider,
	IconButton,
	useMediaQuery
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Navbar from './Navbar';
import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
	const [isMobile] = useMediaQuery("(max-width: 600px)")

  return (
		<VStack>
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
			{isMobile ? (
				<IconButton
					as={GiHamburgerMenu}
					pos='absolute'
					top='0.7rem'
					right='0.8rem'
					variant='ghost'
				/>
			) : (
				<>
				<Box pos='absolute' top='0.7rem' right='0.8rem'>
					<Tooltip
						hasArrow
						placement='bottom-start'
						label='Light/Dark Mode Switch'
					>
						<DarkModeSwitch />
					</Tooltip>
				</Box>
				<Navbar />
				</>
			)}
			<Divider />
		</VStack>
  );
}

export default Header
