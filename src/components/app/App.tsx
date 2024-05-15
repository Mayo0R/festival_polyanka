import clsx from 'clsx';
import { CSSProperties, useState } from 'react';
import { defaultArticleState } from 'src/constants/articleProps';
import styles from '../../styles/index.module.scss';
import '../../styles/index.scss';
import { ArticleParamsForm } from '../article-params-form';
import { Article } from '../article';

export const App = () => {
	const [article, setArticle] = useState(defaultArticleState);

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
