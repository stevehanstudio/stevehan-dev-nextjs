import React from 'react'
import { Box, Heading } from '@chakra-ui/react';

const Title = ({title}) => {
  return (
		// <Box py='2rem'>
			<Heading
				mt={['1rem', '1.25rem', '1.5rem', '2rem']}
				mb={['0.4rem', '0.6rem', '1rem', '1.4rem']}
				as='h1'
				fontSize='4xl'
				fontWeight={400}
				textTransform='uppercase'
			>
				{title}
			</Heading>
		// </Box>
  );
}

export default Title
