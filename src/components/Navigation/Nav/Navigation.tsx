import { useEffect, useRef, useState } from 'react'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import styles from './Navigation.module.scss'
import busketNav from '/busket-nav.png'
import logo from '/logo.png'
import searchNav from '/search-nav.png'
import userNav from '/user-nav.png'

const Navigation = () => {
	const [showSearch, setShowSearch] = useState(false)
	const inputRef = useRef(null)

	const toggleSearch = () => {
		setShowSearch(!showSearch)
	}

	useEffect(() => {
		if (showSearch && inputRef.current) {
			inputRef.current.focus()
		}
	}, [showSearch])
	return (
		<nav className={styles.container}>
			<div className={styles.navigation}>
				{/* nav burger  */}
				<div className={styles.burger_nav}>
					<BurgerMenu />
					<a href='/'>
						<img src={logo} alt='logo' />
					</a>
				</div>

				<ul className={styles.nav__list}>
					<li>Shop</li>
					<li>On Sale</li>
					<li>New Arrivals</li>
					<li>Brands</li>
				</ul>

				<div className={styles.buttons__section}>
					<div className={styles.searchMenu}>
						<img
							src={searchNav}
							alt='Search'
							className={`styles.searchIcon`}
							onClick={toggleSearch}
						/>
						<input
							type='text'
							placeholder='Search for products...'
							className={`${styles.searchInput} ${
								showSearch ? styles.active : ''
							}`}
							ref={inputRef}
						/>
					</div>
					<button>
						<img src={busketNav} alt='searh' />
					</button>
					<button>
						<img src={userNav} alt='searh' />
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
