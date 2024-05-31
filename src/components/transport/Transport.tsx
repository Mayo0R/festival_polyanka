import { ReactElement } from 'react';
import styles from './Transport.module.scss';
import transport_1 from 'src/images/SVG/transport_1.svg';
import transport_2 from 'src/images/SVG/transport_2.svg';
import social from 'src/images/SVG/social.svg';
import auto from 'src/images/SVG/auto.svg';

export const Transport = (): ReactElement => (
	<div className={styles.transport_main}>
		<img
			src={transport_1}
			alt='Логотип'
			className={styles.transport_decor_left}
		/>
		<img
			src={transport_2}
			alt='Логотип'
			className={styles.transport_decor_right}
		/>
		<div>
			<h1>Как к нам добраться?</h1>
		</div>
		<div className={styles.transport_block}>
			<div className={styles.transport_content_block}>
				<div className={styles.transport_content_block_title}>
					<img
						src={social}
						alt='Логотип'
						className={styles.transport_content_block_img}
					/>
					<p>На общественном транспорте</p>
				</div>
				<div>
					<p>
						Формат проекта — многофункциональное культурное пространство,
						включающее современные сценические комплексы, мобильную ТВ студию,
						лектории и тематические зоны интерактивных развлечений.
					</p>
				</div>
			</div>
			<div className={styles.transport_content_block}>
				<div className={styles.transport_content_block_title}>
					<img
						src={auto}
						alt='Логотип'
						className={styles.transport_content_block_img}
					/>
					<p>На автомобиле</p>
				</div>
				<div>
					<p>
						Формат проекта — многофункциональное культурное пространство,
						включающее современные сценические комплексы, мобильную ТВ студию,
						лектории и тематические зоны интерактивных развлечений.
					</p>
				</div>
			</div>
		</div>
	</div>
);
