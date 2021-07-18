import Layout from '../components/Layout';
import { Heading, Text, Button } from '@chakra-ui/react';
// import { NextSeo } from 'next-seo';

const url = 'https://www.stevehan.dev/';
const title = 'Home';
const description = 'Steve Han Developer Portfolio';

export default function Home() {
	return (
		<>
			{/* <NextSeo
				title={title}
				description={description}
				canonical={url}
				openGraph={{
					url,
					title,
					description,
				}}
			/> */}
			<Layout>
				<Heading as='h1' size='3xl'>
					Hello, I am Steve Han
				</Heading>
				<Text fontSize='2xl' my={4}>
					A developer, creator, and student.
				</Text>
				<Button colorScheme='cyan' size='lg'>
					Hire Me!
				</Button>
			</Layout>
		</>
	);
}
