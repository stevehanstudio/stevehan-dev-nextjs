import { darken, mode, whiten } from '@chakra-ui/theme-tools';

export const BoxStyles = {
	bg: "primary",
	variants: {
		newShadow: props => ({
			boxShadow: mode(
				'0px 0px 10px 5px rgba(256,256,256,0.8)',
				'0px 0px 20px 10px rgba(0,0,0,0.1)'
			)(props),
		}),
		_hover: {
			newShadow: props => ({
				boxShadow: mode(
					'0px 0px 10px 5px rgba(256,256,256,1)',
					'0px 0px 20px 10px rgba(0,0,0,0.2)'
				)(props),
			})
		},
	},
};
