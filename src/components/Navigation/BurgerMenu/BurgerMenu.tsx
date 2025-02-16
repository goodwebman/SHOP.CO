import { useState } from 'react'
import styles from './BurgerMenu.module.scss'
const BurgerMenu = () => {
	const [burgerToggle, setBurgerToggle] = useState(false)

	const handleToggle = () => {
		setBurgerToggle(!burgerToggle)
	}
	return (
		<>
			<button
				onClick={handleToggle}
				className={`${styles.burger} ${
					burgerToggle ? styles.burger__active : ''
				}`}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>

			<ul
				className={`${styles.menu__list} ${
					burgerToggle ? styles.menu__list__active : ''
				}`}
			>
				<li>
					<a href='#'>Главная</a>
				</li>
				<li>
					<a href='#'>О нас</a>
				</li>
				<li>
					<a href='#'>Услуги</a>
				</li>
				<li>
					<a href='#'>Контакты</a>
				</li>
			</ul>
		</>
	)
}

export default BurgerMenu
