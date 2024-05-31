import { ReactElement } from 'react';
import styles from './Map.module.scss';

export const Map = (): ReactElement => (
	<div className={styles.map}>
		<h1>Локации</h1>
		<iframe
			id='location'
			className={styles.card}
			src='https://yandex.ru/map-widget/v1/?um=constructor%3A068859d986e6359cf7c96a4ba2f6d70752373e708f7fb6b51471dc52fd34c594&amp;source=constructor'></iframe>
	</div>
);
