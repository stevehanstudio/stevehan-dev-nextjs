import { VStack, Flex } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<Flex direction='column' minH='100vh'>
			<Header />
			{children}
			<Footer />
		</Flex>
	);
}
