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
import { articleType, defaultArticleFormState } from '../app/App';
import clsx from 'clsx';

interface ArticleParamsFormProps {
	setArticle: (article: articleType) => void; // определение типа пропса setArticle
}

export const ArticleParamsForm = ({ setArticle }: ArticleParamsFormProps) => {
	const [formState, setFormState] = useState<articleType>(
		defaultArticleFormState
	);

	function handleChange(optionName: string) {
		return function (value: OptionType) {
			return setFormState({ ...formState, [optionName]: value });
		};
	}

	//Все выбранные значения
	const values = {
		formState,
	};

	//Submit формы
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setArticle({
			fontFamilyOption: values.formState.fontFamilyOption,
			fontSizeOption: values.formState.fontSizeOption,
			fontColor: values.formState.fontColor,
			backgroundColor: values.formState.backgroundColor,
			contentWidth: values.formState.contentWidth,
		});
	};

	//Reset формы
	const handleReset = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setFormState({
			fontFamilyOption: defaultArticleState.fontFamilyOption,
			fontSizeOption: defaultArticleState.fontSizeOption,
			fontColor: defaultArticleState.fontColor,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidth: defaultArticleState.contentWidth,
		});
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
	}

	return (
		<div className={styles.divClass} ref={formRef}>
			<ArrowButton open={open} onClick={handleClose} />

			<aside
				className={clsx(styles.container, { [styles.container_open]: open })}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text as='h1' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					<Select
						selected={formState.fontFamilyOption}
						onChange={handleChange('fontFamilyOption')}
						options={fontFamilyOptions}
						title='Шрифт'
					/>

					<RadioGroup
						selected={formState.fontSizeOption}
						name='radio'
						onChange={handleChange('fontSizeOption')}
						options={fontSizeOptions}
						title='Размер шрифта'
					/>

					<Select
						selected={formState.fontColor}
						onChange={handleChange('fontColor')}
						options={fontColors}
						title='Цвет шрифта'
					/>

					<Separator />

					<Select
						selected={formState.backgroundColor}
						onChange={handleChange('backgroundColor')}
						options={backgroundColors}
						title='Цвет фона'
					/>

					<Select
						selected={formState.contentWidth}
						onChange={handleChange('contentWidth')}
						options={contentWidthArr}
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
};
