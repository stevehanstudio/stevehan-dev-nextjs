import { useColorMode, Button, Box, Icon, IconButton } from '@chakra-ui/react'
import { FiSun } from 'react-icons/fi'
import { IoMoon } from 'react-icons/io5'

const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'black',
        dark: 'white'
    }

    return (
			// <IconButton
			//     aria-label='Toggle dark mode'
			//     as={colorMode === 'dark' ? FiSun : IoMoon}
			//     color={iconColor[colorMode]}
			//     onClick={toggleColorMode}
			//     rounded='full'
			//     p={3}
			// />
			<Button
				color={iconColor[colorMode]}
				onClick={toggleColorMode}
				rounded='full'
				p={3}
			>
				{colorMode === 'dark' ? <FiSun /> : <IoMoon />}
			</Button>
		);
}

export default DarkModeSwitch