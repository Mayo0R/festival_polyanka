import clsx from 'clsx';
import { CSSProperties, useState } from 'react';
import { OptionType, defaultArticleState } from 'src/constants/articleProps';
import styles from '../../styles/index.module.scss';
import '../../styles/index.scss';
import { ArticleParamsForm } from '../article-params-form';
import { Article } from '../article';

export type articleType = {
	fontFamilyOption: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
	fontSizeOption: OptionType;
};

export const defaultArticleFormState: articleType = {
	fontFamilyOption: defaultArticleState.fontFamilyOption,
	fontSizeOption: defaultArticleState.fontSizeOption,
	fontColor: defaultArticleState.fontColor,
	backgroundColor: defaultArticleState.backgroundColor,
	contentWidth: defaultArticleState.contentWidth,
};

export const App = () => {
	const [article, setArticle] = useState<articleType>(defaultArticleFormState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': article.fontFamilyOption.value,
					'--font-size': article.fontSizeOption.value,
					'--font-color': article.fontColor.value,
					'--container-width': article.contentWidth.value,
					'--bg-color': article.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setArticle={setArticle} />
			<Article />
		</div>
	);
};
