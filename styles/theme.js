import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './ButtonStyles';
import { BoxStyles as Box } from './BoxStyles';
import { ContainerStyles as Container } from './ContainerStyles';

export const customTheme = extendTheme({
	colors: {
		primary: '#845EC2',
		secondary: '#FF6F91',
		highlight: '#00C9A7',
		warning: '#FFC75F',
		danger: '#C34A36',
	},
	fonts: {
		heading: '"Roboto", sans-serif',
		body:  '"Roboto", sans-serif',
		mono: '"Space Mono", monospace',
	},
	fontSizes: {
		"6xl": "6rem"
	},
	components: {
		Button,
    Box,
    Container
  },
});



