import fs from 'fs';
import matter from 'gray-matter';
import NextLink from 'next/link';
import path from 'path';
import { format } from '../lib/dateUtils';
import { projectFilePaths, PROJECTS_PATH } from '../lib/mdxUtils';
import {
	SimpleGrid,
	Flex,
	Container,
	Box,
	Button,
	Text,
	Image,
	Heading,
	Link,
	UnorderedList,
	ListItem,
	useColorMode,
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import Layout from '../components/Layout';

export default function Project({ projects }) {
	const [isNotSmallerScreen] = useMediaQuery();
	const { colorMode } = useColorMode()
	console.log(projects);
	return (
		<Layout>
			<Heading as='h1' mb={4}>
				Projects
			</Heading>
			<SimpleGrid columns={{ sm: 2, md: 3, lg: 3, xl: 3 }} spacing='40px'>
				{projects.map(project => (
					<Container
						key={project.filePath}
						variant='projectCard'
						m={0.5}
						minW='250px'
						p={6}
						rounded={6}
					>
						{console.log('project.filePath=', project.filePath)}
						{console.log('project.data.image=', project.data.image)}
						<Image
							src={`/projects/${project.data.image}`}
							alt={project.data.title}
						/>
						<NextLink
							as={`/projects/${project.filePath.replace(/\.mdx?$/, '')}`}
							href={`/projects/[slug]`}
						>
							<Link>
								<Heading as='h2'>{project.data.title}</Heading>-{' '}
								<Text>{project.data.subtitle}</Text>
							</Link>
						</NextLink>
						<Button variant='primary' mt={8}>
							Details
						</Button>
					</Container>
				))}
			</SimpleGrid>
		</Layout>
	);
}

export function getStaticProps() {
	const projects = projectFilePaths.map(filePath => {
		const source = fs.readFileSync(path.join(PROJECTS_PATH, filePath));
		const { content, data } = matter(source);

		return {
			content,
			data,
			filePath,
		};
	});

	return { props: { projects } };
}
