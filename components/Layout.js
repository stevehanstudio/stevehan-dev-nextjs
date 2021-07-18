import { Stack } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Stack maxW='1920px' m='0 auto' px={['1rem', '1rem', '1.5rem','2rem']} mb={8}>
				{children}
			</Stack>
			<Footer />
		</>
	);
}
