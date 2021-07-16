import React from 'react'
import { Center, VStack, Text } from '@chakra-ui/react'
import Layout from '../components/Layout';

const NotFoundPage = () => {
  return (
		<Layout>
			<Center h="50vh">
				<VStack>
					<Text as='h1' fontSize='9xl'>
						404
					</Text>
					<Text as='h4' fontSize='xl'>
						Sorry, the page you tried cannot be found
					</Text>
				</VStack>
			</Center>
		</Layout>
  );
}

export default NotFoundPage
