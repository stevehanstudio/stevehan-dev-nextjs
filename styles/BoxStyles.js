import { darken, mode, whiten } from '@chakra-ui/theme-tools';

export const BoxStyles = {
	variants: {
		customShadow: {
			border: '2px solid black',
			bg: 'blue',
			boxShadow:
				'0px 0px 20px 10px rgba(100,100,100,0.8)'
		},
		defaultProps: {
			variant: 'customShadow'
		}
	},
};

// export const BoxStyles = {
// 	bg: 'primary',
// 	variants: {
// 		customShadow: props => ({
// 			boxShadow: mode(
// 				'0px 0px 10px 5px rgba(256,256,256,0.8)',
// 				'0px 0px 20px 10px rgba(0,0,0,0.1)'
// 			)(props),
// 		}),
// 		_hover: {
// 			customShadow: props => ({
// 				boxShadow: mode(
// 					'0px 0px 10px 5px rgba(256,256,256,1)',
// 					'0px 0px 20px 10px rgba(0,0,0,0.2)'
// 				)(props),
// 			}),
// 		},
// 	},
// };

