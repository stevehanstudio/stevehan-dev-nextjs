import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import path from 'path';
import { projectFilePaths, PROJECTS_PATH } from '../../lib/mdxUtils';
import { useMediaQuery } from '@chakra-ui/media-query'
import { Flex, Box, Heading, Text, Image, Link, Divider } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import ProjectSeo from '../../components/ProjectSEO';
import { useRouter } from 'next/router';

const CustomA = props => <Link color='blue.500' {...props} />;

const components = {
	a: CustomA,
	DarkModeSwitch: dynamic(() => import('../../components/DarkModeSwitch')),
};

export default function ProjectPage({ source, frontMatter }) {
	const router = useRouter();
	const [isNotSmallerScreen] = useMediaQuery()
	const slug = router.asPath.replace('/projects', '');

	return (
		<>
			<ProjectSeo
				url={`https://localhost:3000/projects${slug}`}
				{...frontMatter}
			/>
			<Layout>
				<Flex flexDir={isNotSmallerScreen ? 'row' : 'column'}>
					<Box>
						<Heading as='h2'>{frontMatter.title}</Heading>
						<Text>{frontMatter.subtitle}</Text>
						<Image src={frontMatter.image} alt={frontMatter.title} />
					</Box>
					<Image src={frontMatter.image} alt={frontMatter.title} />
				</Flex>
				<Divider my={4} />
				<Flex as='main' flexDir='column'>
					<MDXRemote {...source} components={components} />
				</Flex>
			</Layout>
		</>
	);
}

export const getStaticProps = async ({ params }) => {
	const projectFilePath = path.join(PROJECTS_PATH, `${params.slug}.mdx`);
	const source = fs.readFileSync(projectFilePath);

	const { content, data } = matter(source);

	const mdxSource = await serialize(content, {
		// Optionally pass remark/rehype plugins
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: data,
	});

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	};
};

export const getStaticPaths = async () => {
	const paths = projectFilePaths
		// Remove file extensions for page paths
		.map(path => path.replace(/\.mdx?$/, ''))
		// Map the path into the static paths object required by Next.js
		.map(slug => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};
