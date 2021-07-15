import * as React from 'react';

function ResumeIcon(props) {
	const color = props.color;

	return (
		<svg
			viewBox='0 0 118 150'
			width='118'
			height='150'
			fill='none'
			{...props}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M90.064 0H10C4.477 0 0 4.477 0 10v130c0 5.523 4.477 10 10 10h98c5.523 0 10-4.477 10-10V22.807L90.064 0zM18 85a5 5 0 00-5 5v1a5 5 0 005 5h75a5 5 0 005-5v-1a5 5 0 00-5-5H18zm-5 26a5 5 0 015-5h75a5 5 0 015 5v1a5 5 0 01-5 5H18a5 5 0 01-5-5v-1zm6 14a5 5 0 00-5 5v1a5 5 0 005 5h75a5 5 0 005-5v-1a5 5 0 00-5-5H19zm24-82.057c4.77-2.813 8-8.226 8-14.443C51 19.387 44.06 12 35.5 12 26.94 12 20 19.387 20 28.5c0 6.217 3.23 11.63 8 14.443V55h.439L12.55 68.5h45.9L42.56 55H43V42.943z'
				fill={color}
			/>
		</svg>
	);
}

export default ResumeIcon;
