import { GoHeartFill } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa6'
import { MdAlternateEmail } from 'react-icons/md'
import { motion } from 'framer-motion'

const Footer = () => {
	return (
		<motion.footer
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2, duration: 0.5 }}
			viewport={{ once: true }}
			className='w-full h-40 flex flex-col items-start justify-center max-w-5xl px-5 xl:max-w-7xl text-base'
		>
			<div className='w-full h-full bg-white dark:bg-raisin-black rounded-3xl flex items-center justify-between px-10'>
				<div className='flex flex-col items-start opacity-50 max-w-[50%] lg:max-w-fit'>
					<p>All Rights Reserved.</p>
					<p className='items-center gap-2 hidden lg:flex'>
						Made with love <GoHeartFill />
					</p>
				</div>
				<div className='flex flex-col-reverse gap-3 items-end'>
					<p className='opacity-50 hidden lg:flex'>
						2024
					</p>
					<div className='flex items-center gap-2 text-xl'>
						<a
							className='flex items-center font-medium'
							href='mailto:tiagoalvarezschiaffino@gmail.com'
							title='Email me'
						>
							<MdAlternateEmail />
						</a>
						<a
							className='flex items-center font-medium'
							href='https://www.linkedin.com/in/tiago-alvarez-schiaffino/'
							target='_blank'
							rel='noreferrer'
							title='LinkedIn'
						>
							<FaLinkedin />
						</a>
					</div>
				</div>
			</div>
		</motion.footer>
	)
}

export default Footer