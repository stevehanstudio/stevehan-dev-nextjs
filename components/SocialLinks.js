import React from "react"
import NextLink from 'next/link';
import {Button} from '@chakra-ui/react'
import { AiFillHome, AiFillLinkedin } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa'
import { GrGithub } from 'react-icons/gr';
import { SiCodesandbox } from 'react-icons/si';

export const navLinks = [
	{
		title: 'Home',
		icon: <AiFillHome />,
		pageUrl: '/',
	},
	{
		title: 'About',
		icon: <FaInfoCircle />,
		pageUrl: '/about',
	},
];

export const socialLinks = [
	{
		title: 'Linkedin',
		//    icon: <FaLinkedin />,
		icon: <AiFillLinkedin />,
		url: 'https://linkedin.com/in/stevehanphoto',
	},
	{
		title: 'Github',
		//icon: <FaGithubSquare />,
		icon: <GrGithub />,
		url: 'https://github.com/stevehanstudio',
	},
	{
		title: 'Codesandbox',
		//icon: <FaGithubSquare />,
		icon: <SiCodesandbox />,
		url: 'https://codesandbox.com/stevehanstudio',
	},
	/*  {
    title: "Resume",
    icon: <ResumeIcon />,
    url: "./SteveHanDevResume.pdf"
  },*/
];

const SocialLinks = () => {
  return (
		<>
			<NextLink href='/resume'>Resume</NextLink>
		</>
  );
}

export default SocialLinks

