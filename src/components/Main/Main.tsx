import styles from './Main.module.scss'

const Main = () => {
	return (
		<section className={styles.main__section}>
			<div className={styles.container}>
				<div className={styles.main__block}>
					<div className={styles.main__block_info}>
						<h1 className={styles.main__block_info_title}>
							FIND CLOTHES THAT MATCHES YOUR STYLE
						</h1>

						<p className={styles.main__block_info_suptitle}>
							Browse through our diverse range of meticulously crafted garments,
							designed to bring out your individuality and cater to your sense
							of style.
						</p>

						<button className={styles.main__block_info_button}>Shop Now</button>

						<div className={styles.main__block_info__digits}>
                            <div className={styles.main__block_info__digits_item}>
                                <h2>200+</h2>
                                <p>International Brands</p>
                            </div>

                            <div className={styles.main__block_info__digits_item}>
                                <h2>2,000+</h2>
                                <p>High-Quality Products</p>
                            </div>

                            <div className={styles.main__block_info__digits_item}>
                                <h2>30,000+</h2>
                                <p>Happy Customers</p>
                            </div>
                        </div>
					</div>

					<div className={styles.main__block_image}>
                        <img src="main-people.png" alt="" />
                    </div>
				</div>
			</div>
		</section>
	)
}

export default Main
