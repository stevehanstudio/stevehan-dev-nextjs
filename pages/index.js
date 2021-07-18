import fs from 'fs';
import matter from 'gray-matter';
import NextLink from 'next/link';
import path from 'path';
import { format } from '../lib/dateUtils';
import { projectFilePaths, PROJECTS_PATH } from '../lib/mdxUtils';
import {
	SimpleGrid,
	Flex,
	Stack,
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
import { NextSeo } from 'next-seo'
import { GrGithub } from 'react-icons/gr';
import { InternetIcon } from '../assets/CustomIcons';
// import { MdBuild, MdCall } from 'react-icons/md';
import { useMediaQuery } from '@chakra-ui/media-query';
import Layout from '../components/Layout';
import Title from '../components/Title'

const url = 'https://stevehan.dev';
const title = 'Home'
const description = 'Overview and links to projects demo and source code'

export default function Project({ projects }) {
	const [isNotSmallerScreen] = useMediaQuery();
	const { colorMode } = useColorMode();
	return (
		<Layout>
			<NextSeo
				title={title}
				description={description}
				canonical={url}
				openGraph={{
					url,
					title,
					description
				}}
			/>
			<Title title='Projects' />
			<SimpleGrid
				columns={{ sm: 2, md: 2, lg: 2, xl: 3, '2xl': 4 }}
				spacing={8}
			>
				{projects.reverse().map(project => (
					<Container
						key={project.filePath}
						// variant='projectCard'
						px={0}
						maxW='400px'
						minW='250px'
						rounded='md'
						overflow='hidden'
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
								height='40%'
								objectFit='cover'
								src={`${project.data.image}`}
								alt={`${project.data.title} Cover`}
								p={2}
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
							{/* <Divider my={3} />
							{project.data.skills.map((skill, index) => {
								return (
									<Badge
										key={index}
										rounded='full'
										border={`2px solid ${colorMode === 'dark'
								? 'rgba(256,256,256,0.6)'
								: 'rgba(16,35,64,0.7)'}`}
										px={4}
										py={2}
										mr={2}
										mt={2}
										mb={1}
									>
										{skill}
									</Badge>
								);
							})} */}
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
