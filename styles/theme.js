import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools';
// import { ButtonStyles as Button } from './ButtonStyles';
// import { BoxStyles as Box } from './BoxStyles';
// import { ContainerStyles as Container } from './ContainerStyles';

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
	// components: {
	// 	Button,
  //   Box,
  //   Container
  // },
});

// const breakpoints = createBreakpoints({
// 	sm: '30em',
// 	md: '48em',
// 	lg: '62em',
// 	xl: '80em',
// 	'2xl': '96em',
// });

const breakpoints = createBreakpoints({
	sm: '600px',
	md: '1024px',
	lg: '1280px',
	xl: '1920px',
	'2xl': '2500px',
});

