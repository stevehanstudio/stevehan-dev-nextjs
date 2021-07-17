import { ChakraProvider, ColorModeProvider, useColorMode } from "@chakra-ui/react"
import { customTheme } from '../styles/theme'
import { Global, css } from '@emotion/react'

const GlobalStyle = ({ children }) => {
	const { colorMode } = useColorMode()

	return (
		<>
			<Global
				styles={css`
					html {
						height: 100%;
					}
					body: {
						min-height: 100%;
						display: flex;
						flex-direction: column;
					}
					#__next {
						display: flex;
						flex-direction: column;
						min-height: 100vh;
						background-color: ${colorMode === 'light'
							? 'white'
							: '#171717'};
						color: ${colorMode === 'light' ? 'black' : 'white'};
					}
				`}
			/>
			{children}
		</>
	);
}

function MyApp({ Component, pageProps }) {
  return (
		<ChakraProvider resetCSS theme={customTheme}>
			<ColorModeProvider
				options={{
					initialColorMode: 'light',
					useSystemColorMode: true,
				}}
			>
				<GlobalStyle>
					<Component {...pageProps} />
				</GlobalStyle>
			</ColorModeProvider>
		</ChakraProvider>
  );
}

export default MyApp
