import { darken, mode, whiten } from '@chakra-ui/theme-tools';

export const ButtonStyles = {
	variants: {
		primary: props => ({
			bg: 'primary',
			color: 'white',
			boxShadow: mode(
				'0px 0px 4px 2px rgba(0,0,0,0.1)',
				'0px 0px 4px 2px rgba(256,256,256,0.4)'
			)(props),
			_hover: {
				// transform: scale(1.2, 1.2),
				bg: mode(whiten('primary', 5), darken('primary', 10))(props),
				boxShadow: mode(
					'0px 0px 5px 3px rgba(0,0,0,0.15)',
					'0px 0px 5px 3px rgba(256,256,256,0.6)'
				)(props),
			},
		}),
		secondary: props => ({
			bg: 'secondary',
			color: 'white',
			_hover: {
				bg: mode(whiten('secondary', 20), darken('secondary', 20))(props),
				boxShadow: 'md',
			},
		}),
		secondaryOutline: props => ({
			bg: 'transparent',
			border: '1px solid',
			borderColor: 'secondary',
			color: 'secondary',
			transition: 'all 200ms ease',
			_hover: {
				boxShadow: 'md',
				transform: 'scale(1.02)',
			},
		}),
	},
};
