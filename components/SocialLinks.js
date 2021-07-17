import React from "react"
import NextLink from 'next/link';
import {Button, IconButton, Link, Tooltip} from '@chakra-ui/react'
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
		//    icon: <FaLinkedin />,
		icon: AiFillLinkedin,
		url: 'https://linkedin.com/in/stevehanstudio',
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
				<Tooltip
					hasArrow
					key={socialLink.title}
					placement='bottom-end'
					label={socialLink.title}
				>
					<Link href={socialLink.url} isExternal>
						<IconButton
							as={socialLink.icon}
							rounded='full'
							mr={2}
							p={3}
						/>
					</Link>
				</Tooltip>
			))}
			<Tooltip
				hasArrow
				placement='bottom-start'
				arrowPadding={16}
				arrowSize={16}
				offset={8}
				label={resumeIcon.title}
			>
				<NextLink href={resumeIcon.url} passHref>
					<IconButton as={resumeIcon.icon} rounded='sm' ml={5} p={2} />
				</NextLink>
			</Tooltip>
		</>
	);
}
{/* <Tooltip hasArrow label='Search places' bg='gray.300' color='black'>
	<SearchIcon />
</Tooltip>; */}
export default SocialLinks

