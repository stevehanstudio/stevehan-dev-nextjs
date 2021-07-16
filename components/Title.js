import React from 'react'
import { Box, Heading } from '@chakra-ui/react';

const Title = ({title}) => {
  return (
		<Box p='2rem'>
			<Heading
				as='h1'
				fontSize='4xl'
				fontWeight={400}
				textTransform='uppercase'
			>
				{title}
			</Heading>
		</Box>
  );
}

export default Title
