import { FC } from 'react'

interface MoonIconProps {
	className: string
}
const MoonIcon: FC<MoonIconProps> = ({ className }) => {
	return (
		<svg
			viewBox='0 0 24 24'
			height='1.25rem'
			width='1.25rem'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path fill='none' d='M0 0h24v24H0z'></path>
			<path d='M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z'></path>
		</svg>
	)
}

export default MoonIcon