import { ChakraProvider, ColorModeProvider, useColorMode } from "@chakra-ui/react"
import { customTheme } from '../styles/theme'
import { Global, css } from '@emotion/react'
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo'

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
						width: 100vw;
					}
					#__next {
						display: flex;
						flex-direction: column;
						min-height: 100vh;
						background: ${colorMode === 'light'
							? 'linear-gradient(to right, #eff3ff, white)'
							: 'linear-gradient(to right, #001328, #102340)'};
						color: ${colorMode === 'light'
							? 'rgba(0, 0, 0, 0.8)'
							: 'rgba(255, 255, 255, 0.6)'};
						h1 {
							color: ${colorMode === 'light'
								? 'rgba(0, 0, 0, 0.85)'
								: 'rgba(255, 255, 255, 0.85)'};
						}
						.logo-title {
							color: ${colorMode === 'light' ? 'black' : 'white'};
						}
						a {
							text-decoration: none;
							color: ${colorMode === 'light'
								? 'rgba(0, 0, 0, 0.7)'
								: 'rgba(255, 255, 255, 0.7)'};
							&:hover,
							&:focus,
							&:active {
								color: ${colorMode === 'light' ? 'black' : 'white'};
							}
						}
						.project-cover {
							opacity: 0.7;
							&:hover {
								opacity: 1;
							}
						}
					}
					.chakra-portal {
						color: ${colorMode === 'light'
							? 'rgba(0, 0, 0, 0.7)'
							: 'rgba(255, 255, 255, 0.7)'};
						&:hover,
						&:focus,
						&:active {
							color: ${colorMode === 'light' ? 'black' : 'white'};
						}
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
					<DefaultSeo {...SEO} />
					<Component {...pageProps} />
				</GlobalStyle>
			</ColorModeProvider>
		</ChakraProvider>
  );
}

export default MyApp
