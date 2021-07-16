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
	Badge,
	Text,
	Image,
	Heading,
	Icon,
	IconButton,
	ExternalLinkIcon,
	Link,
	Divider,
	UnorderedList,
	ListItem,
	useColorMode,
} from '@chakra-ui/react';
import { GrGithub } from 'react-icons/gr'
import internetIcon from '../assets/internetIcon';
import { useMediaQuery } from '@chakra-ui/media-query';
import Layout from '../components/Layout';
import Title from '../components/Title';

export default function Project({ projects }) {
	const [isNotSmallerScreen] = useMediaQuery();
	const { colorMode } = useColorMode()
	return (
		<Layout>
			<Title title='Projects' />
			<SimpleGrid
				columns={{ sm: 2, md: 3, lg: 3, xl: 3 }}
				spacing='40px'
				mb={8}
			>
				{projects.reverse().map(project => (
					<Container
						key={project.filePath}
						variant='projectCard'
						minW='250px'
						rounded={6}
						overflow='hidden'
						p={0}
					>
						<Image
							width='100vw'
							src={`${project.data.image}`}
							alt={`${project.data.title} Cover`}
						/>
						<Box p={4}>
							<NextLink
								as={`/projects/${project.filePath.replace(
									/\.mdx?$/,
									''
								)}`}
								href={`/projects/[slug]`}
							>
								<Link>
									<Heading
										as='h2'
										fontSize='2xl'
										fontWeight={400}
										pb={4}
									>
										{project.data.title}
									</Heading>
								</Link>
							</NextLink>
							<Text fontSize='md'>{project.data.subtitle}</Text>
							<Flex my={4}>
								<Button variant='primary' mr={4}>
									Details
								</Button>
								<Link href={project.data.github} isExternal>
									<IconButton as={GrGithub} rounded='full' p={3} />
								</Link>
								<Link href={project.data.website} isExternal>
									<IconButton as={internetIcon} rounded='full' p={3} />
								</Link>
							</Flex>
							<Divider my={3} />
							{project.data.skills.map((skill, index) => {
								return (
									<Badge
										key={index}
										rounded='full'
										px={4}
										py={2}
										mr={2}
										mt={2}
										mb={1}
									>
										{skill}
									</Badge>
								);
							})}
						</Box>
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
