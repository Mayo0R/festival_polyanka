import React from 'react';
import styles from './Popup.module.scss';

type PopupProps = {
	onClose: () => void;
	isVisible: boolean;
};

const Popup: React.FC<PopupProps> = ({ onClose, isVisible }) => {
	if (!isVisible) {
		return null;
	}

	return (
		<div className={styles.popupOverlay}>
			<div className={styles.popupContent}>
				<button className={styles.closeButton} onClick={onClose}>
					×
				</button>
				<p>Форма участия в фестивале</p>
			</div>
		</div>
	);
};

export default Popup;
