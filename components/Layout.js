import { VStack } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<VStack>
			<Header />
			{children}
			<Footer />
		</VStack>
	)
}
