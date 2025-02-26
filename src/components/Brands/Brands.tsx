import styles from './Brands.module.scss'

const Brands = () => {
	return (
		<section className={styles.brands}>
			<div className={styles.container}>
				<div className={styles.brands__block}>
					<img src='/versace.png' alt='' className='brands__block-item' />
					<img src='/zara.png' alt='' className='brands__block-item' />
					<img src='/gucci.png' alt='' className='brands__block-item' />
					<img src='/prada.png' alt='' className='brands__block-item' />
					<img src='/calvin.png' alt='' className='brands__block-item' />
				</div>
			</div>
		</section>
	)
}

export default Brands
