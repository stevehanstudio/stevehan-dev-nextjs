import React, { useRef } from 'react'
import NextLink from 'next/link'
import {
	Box,
	Stack,
	Text,
	Tooltip,
	Divider,
	Button,
	Icon,
	IconButton,
	Input,
	Switch,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerBody,
	DrawerHeader,
	DrawerFooter,
	DrawerCloseButton,
	useColorMode,
} from '@chakra-ui/react';
import { FiSun } from 'react-icons/fi';
import { IoMoon } from 'react-icons/io5';
import { navLinks, socialLinks} from './SocialLinks'
import DarkModeSwitch from './DarkModeSwitch';

const MobileMenu = ({ isOpen, onClose, finalFocusRef }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'black',
    dark: 'white',
  };

	return (
		<>
			<Drawer
				isOpen={isOpen}
				placement='top'
				onClose={onClose}
				finalFocusRef={finalFocusRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Menu</DrawerHeader>
					<Divider pb={4} />
					<DrawerBody pt={4}>
						<Stack spacing={4}>
							{navLinks.map(navLink => (
								<Stack key={navLink.title}>
									<NextLink href={navLink.pageUrl}>
										<Stack isInline>
											<Icon as={navLink.icon} />
											<Text>{navLink.title}</Text>
										</Stack>
									</NextLink>
									<Divider />
								</Stack>
							))}
							{socialLinks.map(socialLink => (
								<Stack key={socialLink.title}>
									<NextLink href={socialLink.url}>
										<Stack isInline>
											{socialLink.icon}
											<Text>{socialLink.title}</Text>
										</Stack>
									</NextLink>
									<Divider />
								</Stack>
							))}
							<Stack isInline justify='space-between'>
								<Stack isInline>
									<Icon as={colorMode === 'light' ? FiSun : IoMoon} />
									<Text>Light/dark Mode</Text>
								</Stack>
								<Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
							</Stack>
							<Divider />
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default MobileMenu