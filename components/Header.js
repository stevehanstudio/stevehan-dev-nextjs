import React, { useContext, useRef } from 'react'
import {
  Box,
  VStack,
  Text,
	Tooltip,
	Divider,
	Button,
	IconButton,
	useDisclosure,
	useMediaQuery
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Navbar from './Navbar';
import DarkModeSwitch from './DarkModeSwitch';
import MobileMenu from './MobileMenu'

const Header = () => {
	const [isMobile] = useMediaQuery("(max-width: 600px)")
	const mobileMenuRef = useRef()
	const { isOpen, onOpen, onClose } =	useDisclosure();

	// console.log(
	// 	'mobileMenuRef',
	// 	mobileMenuRef,
	// 	isMobileMenuOpen,
	// 	onMobileMenuOpen,
	// 	onMobileMenuClose
	// );
	return (
		<VStack>
			<MobileMenu
				isOpen={isOpen}
				onClose={onClose}
				finalFocusRef={mobileMenuRef}
			/>
			<Text
				fontSize={['5xl', '7xl', '8xl', '8xl']}
				fontWeight={300}
				lineHeight={1}
				pt={[3, 1, 0, 0]}
				mb={0}
				pb={0}
				letterSpacing={['0.1rem', '0.15rem', '0.2rem', '0.2rem']}
			>
				STEVE HAN
			</Text>
			<Text
				align='center'
				fontSize={['lg', 'xl', '2xl', '2xl']}
				fontWeight={500}
				letterSpacing={1.7}
				// mt={0}
				// pt={0}
				lineHeight={1}
			>
				Frontend-focused Full Stack Web Developer
			</Text>
			{isMobile ? (
				<IconButton
					as={GiHamburgerMenu}
					ref={mobileMenuRef}
					onClick={onOpen}
					pos='absolute'
					top={0.2}
					right={1}
					variant='ghost'
					p={1}
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
