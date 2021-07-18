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
import { GrGithub } from 'react-icons/gr';
import { InternetIcon } from '../assets/CustomIcons';
import { useMediaQuery } from '@chakra-ui/media-query';
import Layout from '../components/Layout';
import Title from '../components/Title';

import { MdBuild, MdCall } from 'react-icons/md';

export default function Project({ projects }) {
	const [isNotSmallerScreen] = useMediaQuery();
	const { colorMode } = useColorMode();
	return (
		<Layout>
			<Title title='Projects' />
			<SimpleGrid
				columns={{ sm: 2, md: 3, lg: 3, xl: 3 }}
				spacing={8}
				mb={8}
			>
				{projects.reverse().map(project => (
					<Container
						key={project.filePath}
						// variant='projectCard'
						mx='auto'
						maxW='400px'
						minW='250px'
						rounded={3}
						overflow='hidden'
						p={0}
						boxShadow={
							colorMode === 'dark'
								? '0px 0px 10px 5px rgba(256,256,256,0.6)'
								: '0px 0px 10px 5px rgba(0,0,0,0.1)'
						}
					>
						<Link href={project.data.website} isExternal>
							<Image
								className='project-cover'
								width='100vw'
								src={`${project.data.image}`}
								alt={`${project.data.title} Cover`}
							/>
						</Link>
						<Box p={4}>
							{/* <NextLink
								as={`/projects/${project.filePath.replace(
									/\.mdx?$/,
									''
								)}`}
								href={`/projects/[slug]`}
								href={project.data.website}
							> */}
							<Link href={project.data.website} isExternal>
								<Heading as='h2' fontSize='2xl' fontWeight={400} pb={4}>
									{project.data.title}
								</Heading>
							</Link>
							{/* </NextLink> */}
							<Text fontSize='md'>{project.data.subtitle}</Text>
							<Flex my={4} justify='space-between'>
								<Link
									href={project.data.website}
									isExternal
									style={{ textDecoration: 'none' }}
								>
									<Button
										leftIcon={<InternetIcon />}
										// variantColor='blue'
										colorScheme='blue'
										variant='solid'
										boxShadow='sm'
										_hover={{
											transform: 'scale(1.02)',
											boxShadow: 'md',
										}}
									>
										Demo
									</Button>
								</Link>
								<Link
									href={project.data.github}
									isExternal
									style={{ textDecoration: 'none' }}
								>
									<Button
										leftIcon={<GrGithub />}
										colorScheme='blue'
										variant='outline'
										boxShadow='sm'
										_hover={{
											transform: 'scale(1.02)',
											boxShadow: 'md',
										}}
									>
										Source Code
									</Button>
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
