import React from "react"
import NextLink from 'next/link';
import { Button, Box, IconButton, Link, Tooltip } from '@chakra-ui/react'
import { AiFillHome, AiFillLinkedin } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa'
import { GrGithub } from 'react-icons/gr';
import { SiCodesandbox } from 'react-icons/si';
import { ResumeIcon } from '../assets/CustomIcons'

export const navLinks = [
	{
		title: 'Home',
		icon: AiFillHome,
		pageUrl: '/',
	},
	{
		title: 'About',
		icon: FaInfoCircle,
		pageUrl: '/about',
	},
]

export const socialLinks = [
	{
		title: 'Linkedin',
		icon: <AiFillLinkedin />,
		url: 'https://linkedin.com/in/stevehanstudio',
	},
	{
		title: 'Github',
		icon: <GrGithub />,
		url: 'https://github.com/stevehanstudio',
	},
	{
		title: 'Codesandbox',
		icon: <SiCodesandbox />,
		url: 'https://codesandbox.com/stevehanstudio',
	}
]

export const resumeIcon = {
	title: "Resume",
	icon: <ResumeIcon width='24' height='24'/>,
	url: "/resume"
}

const SocialLinks = () => {
	return (
		<>
			{socialLinks.map(socialLink => (
				<Tooltip
					hasArrow
					key={socialLink.title}
					placement='bottom-end'
					arrowSize={10}
					arrowPadding={12}
					offset={[-12, 20]}
					label={`${socialLink.title} profile`}
				>
					<Link href={socialLink.url} isExternal>
						<Button rounded='full' mr={2} p={3}>
							{socialLink.icon}
						</Button>
					</Link>
				</Tooltip>
			))}
			<Tooltip
				hasArrow
				placement='bottom-start'
				arrowSize={10}
				arrowPadding={16}
				offset={[6, 20]}
				label={`Open ${resumeIcon.title}`}
				ml={5}
			>
				<Link href={resumeIcon.url}>
					<Button rounded='full' ml={5} p={3}>
						{resumeIcon.icon}
					</Button>
				</Link>
			</Tooltip>
		</>
	);
}

export default SocialLinks

