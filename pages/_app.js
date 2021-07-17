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
						background: ${colorMode === 'light'
							? 'linear-gradient(to right, #eff3ff, white)'
							: 'linear-gradient(to right, #001328, #102340)'};
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
