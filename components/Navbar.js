import { useColorMode, Button, Flex, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import SocialLinks from './SocialLinks'

const Navbar = () => {
	const { colorMode } = useColorMode();
	const router = useRouter();

	const navHoverBg = {
		light: 'gray.100',
		dark: 'gray.700',
	};

	return (
		<Flex
			flexDirection='row'
			justifyContent='space-between'
			// maxWidth='800px'
			minWidth='356px'
			width='100%'
			as='nav'
			px={4}
			my={12}
			mx='auto'
		>
			<Box>
				<NextLink href='/' passHref>
					<Button
						as='a'
						variant='ghost'
						p={[1, 2, 4]}
						_hover={{ backgroundColor: navHoverBg[colorMode] }}
						backgroundColor={
							router.pathname === '/' ? navHoverBg[colorMode] : null
						}
						aria-label='Home'
					>
						Home
					</Button>
				</NextLink>
				<NextLink href='/about' passHref>
					<Button
						as='a'
						variant='ghost'
						p={[1, 2, 4]}
						_hover={{ backgroundColor: navHoverBg[colorMode] }}
						backgroundColor={
							router.pathname.includes('/about')
								? navHoverBg[colorMode]
								: null
						}
						aria-label='About'
					>
						About
					</Button>
				</NextLink>
			</Box>
			<Box>
				<SocialLinks />
			</Box>
		</Flex>
	);
};

export default Navbar;
