import { ReactElement, useState } from 'react';
import styles from './Header.module.scss';
import logo from 'src/images/SVG/logo.svg';
import contact from 'src/images/SVG/contacts.svg';
import festival from 'src/images/SVG/festival.svg';
import location from 'src/images/SVG/location.svg';
import programma from 'src/images/SVG/programma.svg';
import decor_1 from 'src/images/SVG/decor_1.svg';
import decor_2 from 'src/images/SVG/decor_2.svg';
import Popup from '../popup_reg/Popup'; // импортируем компонент поп-апа

export const Header = (): ReactElement => {
	const [isPopupVisible, setPopupVisible] = useState(false);

	const handleButtonClick = () => {
		setPopupVisible(true);
		lockBodyScroll();
	};

	const handleClosePopup = () => {
		setPopupVisible(false);
		unlockBodyScroll();
	};

	const lockBodyScroll = () => {
		const scrollBarWidth =
			window.innerWidth - document.documentElement.clientWidth;
		document.body.style.overflow = 'hidden';
		document.body.style.paddingRight = `${scrollBarWidth}px`;
	};

	const unlockBodyScroll = () => {
		document.body.style.overflow = '';
		document.body.style.paddingRight = '';
	};

	return (
		<div className={styles.header_main}>
			<div className={styles.header_menu}>
				<ul className={styles.menu}>
					<li className={styles.menu_element}>
						<a href='#aboutFestival' className={styles.menu_link}>
							<img
								src={festival}
								alt='Логотип'
								className={styles.menu_img_menu}
							/>
							О Фестивале
						</a>
					</li>
					<li className={styles.menu_element}>
						<a href='#programm' className={styles.menu_link}>
							<img
								src={programma}
								alt='Логотип'
								className={styles.menu_img_menu}
							/>
							Программа
						</a>
					</li>
				</ul>

				<img src={logo} alt='Логотип' className={styles.menu_img} />

				<ul className={styles.menu}>
					<li className={styles.menu_element}>
						<a href='#location' className={styles.menu_link}>
							<img
								src={location}
								alt='Логотип'
								className={styles.menu_img_menu}
							/>
							Локации
						</a>
					</li>
					<li className={styles.menu_element}>
						<a href='#contacts' className={styles.menu_link}>
							<img
								src={contact}
								alt='Логотип'
								className={styles.menu_img_menu}
							/>
							Контакты
						</a>
					</li>
				</ul>
			</div>
			<div className={styles.header_festival}>
				<div className={styles.header_festival_title}>
					<div className={styles.header_festival_text}>
						<p className={styles.header_festival_text_name}>Фестиваль</p>
						<div className={styles.header_festival_text_subject}>
							<p>Сила России</p>
							<p>в Единстве</p>
						</div>
						<div className={styles.header_festival_text_date}>
							<p>3-4 августа</p>
							<p>2024</p>
						</div>
					</div>
					<img
						src={decor_1}
						alt='Логотип'
						className={styles.header_festival_title_decor_left}
					/>
					<img
						src={decor_2}
						alt='Логотип'
						className={styles.header_festival_title_decor_right}
					/>
				</div>

				<div>
					<button
						className={styles.header_festival_button}
						onClick={handleButtonClick}>
						Участвовать
					</button>
				</div>
			</div>
			<Popup isVisible={isPopupVisible} onClose={handleClosePopup} />
		</div>
	);
};
