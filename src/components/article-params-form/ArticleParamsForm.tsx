import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';

import { useRef, useState, useEffect } from 'react';
import { Text } from 'components/text';
import { Select } from '../select';
import {
	OptionType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Separator } from '../separator';
import { RadioGroup } from '../radio-group';

export const ArticleParamsForm = ({ setArticle }: any) => {
	//Ширина контента
	const optionsWidthArr = contentWidthArr;
	const [selectedWidthArr, setSelectedWidthArr] = useState(
		defaultArticleState.contentWidth
	);

	const handleChangeWidthArr = (selected: OptionType) => {
		setSelectedWidthArr(selected);
	};

	//Цвет фона
	const optionsBackgroundColor = backgroundColors;
	const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(
		defaultArticleState.backgroundColor
	);

	const handleChangeBackgroundColor = (selected: OptionType) => {
		setSelectedBackgroundColor(selected);
	};

	//Цвет шрифта
	const optionsFontColor = fontColors;
	const [selectedFontColor, setSelectedFontColor] = useState(
		defaultArticleState.fontColor
	);

	const handleChangeFontColor = (selected: OptionType) => {
		setSelectedFontColor(selected);
	};

	//Размер шрифта
	const optionsfontSize = fontSizeOptions;
	const [selectedfontSize, setSelectedfontSize] = useState(
		defaultArticleState.fontSizeOption
	);

	const handleChangeFontSize = (selected: OptionType) => {
		setSelectedfontSize(selected);
	};

	//Шрифт
	const optionsFont = fontFamilyOptions;
	const [selectedFont, setSelectedFont] = useState(
		defaultArticleState.fontFamilyOption
	);

	const handleChangeFont = (selected: OptionType) => {
		setSelectedFont(selected);
	};

	//Все выбранные значения
	const values = {
		selectedFont,
		selectedfontSize,
		selectedFontColor,
		selectedBackgroundColor,
		selectedWidthArr,
	};

	//Submit формы
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setArticle({
			fontFamilyOption: values.selectedFont,
			fontSizeOption: values.selectedfontSize,
			fontColor: values.selectedFontColor,
			backgroundColor: values.selectedBackgroundColor,
			contentWidth: values.selectedWidthArr,
		});
	};

	//Reset формы
	const handleReset = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setSelectedFont(defaultArticleState.fontFamilyOption);
		setSelectedfontSize(defaultArticleState.fontSizeOption);
		setSelectedFontColor(defaultArticleState.fontColor);
		setSelectedBackgroundColor(defaultArticleState.backgroundColor);
		setSelectedWidthArr(defaultArticleState.contentWidth);
	};

	//Стрелочка вызова бургера
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	//Закрытие по клику outside
	const formRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!open) return;
		const handleClickOutside = (evt: MouseEvent) => {
			if (!formRef.current?.contains(evt?.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [open]);

	//Логика работы
	if (!open) {
		return (
			<div className={styles.divClass}>
				<ArrowButton open={open} onClick={handleClickOpen} />
			</div>
		);
	} else {
		return (
			<div className={styles.divClass} ref={formRef}>
				<ArrowButton open={open} onClick={handleClose} />

				<aside className={styles.container + styles.container_open}>
					<form
						className={styles.form}
						onSubmit={handleSubmit}
						onReset={handleReset}>
						<Text as='h1' size={31} weight={800} uppercase>
							Задайте параметры
						</Text>

						<Select
							selected={selectedFont}
							onChange={handleChangeFont}
							options={optionsFont}
							title='Шрифт'
						/>

						<RadioGroup
							selected={selectedfontSize}
							name='radio'
							onChange={handleChangeFontSize}
							options={optionsfontSize}
							title='Размер шрифта'
						/>

						<Select
							selected={selectedFontColor}
							onChange={handleChangeFontColor}
							options={optionsFontColor}
							title='Цвет шрифта'
						/>

						<Separator />

						<Select
							selected={selectedBackgroundColor}
							onChange={handleChangeBackgroundColor}
							options={optionsBackgroundColor}
							title='Цвет фона'
						/>

						<Select
							selected={selectedWidthArr}
							onChange={handleChangeWidthArr}
							options={optionsWidthArr}
							title='Ширина контента'
						/>

						<div className={styles.bottomContainer}>
							<Button title='Сбросить' type='reset' />
							<Button title='Применить' type='submit' />
						</div>
					</form>
				</aside>
			</div>
		);
	}
};
