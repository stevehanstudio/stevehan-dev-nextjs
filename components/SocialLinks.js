import React from "react"
import NextLink from 'next/link';
import {Button, IconButton, Link} from '@chakra-ui/react'
import { AiFillHome, AiFillLinkedin } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa'
import { GrGithub } from 'react-icons/gr';
import { SiCodesandbox } from 'react-icons/si';
import { ResumeIcon } from '../assets/resumeIcon'

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
		//    icon: <FaLinkedin />,
		icon: AiFillLinkedin,
		url: 'https://linkedin.com/in/stevehanphoto',
	},
	{
		title: 'Github',
		//icon: <FaGithubSquare />,
		icon: GrGithub,
		url: 'https://github.com/stevehanstudio',
	},
	{
		title: 'Codesandbox',
		//icon: <FaGithubSquare />,
		icon: SiCodesandbox,
		url: 'https://codesandbox.com/stevehanstudio',
	}
]

export const resumeIcon = {
	title: "Resume",
	icon: ResumeIcon,
	url: "/resume"
}

const SocialLinks = () => {
	return (
		<>
			{socialLinks.map(socialLink => (
				<Link key={socialLink.title} href={socialLink.url} isExternal>
					<IconButton as={socialLink.icon} rounded='full' mr={2} p={3} />
				</Link>
			))}
			<NextLink href={resumeIcon.url}>
				<IconButton as={resumeIcon.icon} rounded='full' p={3} />
			</NextLink>
		</>
	);
}

export default SocialLinks

