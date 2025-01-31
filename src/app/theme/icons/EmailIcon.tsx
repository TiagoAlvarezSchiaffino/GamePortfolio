import { FC } from 'react'

interface EmailIconProps {
	className: string
}
const EmailIcon: FC<EmailIconProps> = ({ className }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			viewBox='0 0 512 512'
			className={className}
		>
			<defs></defs>
			<path
				className='fa-primary'
				d='M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464z'
			/>
			<path
				className='fa-secondary'
				d='M19.2 150.4L236.8 313.6C248.2 322.1 263.8 322.1 275.2 313.6L492.8 150.4C504.9 141.3 512 127.1 512 112V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V112C0 127.1 7.113 141.3 19.2 150.4z'
			/>
		</svg>
	)
}

export default EmailIcon