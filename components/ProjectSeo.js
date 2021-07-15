import { NextSeo, ArticleJsonLd } from 'next-seo';
import { format } from '../lib/dateUtils'

const ProjectSeo = ({ title, subtitle, d, image }) => {
	const date = format(d);
	const url = `http://localhost:3000`
	const featuredImage = {
		url: `./${image}`,
		alt: title,
	};

	return (
		<>
			<NextSeo
				title={`${title} – Steve Han`}
				description={subtitle}
				canonical={url}
				openGraph={{
					type: 'article',
					article: {
						publishedTime: date,
					},
					url,
					title,
					description: subtitle,
					images: [featuredImage],
				}}
			/>
			<ArticleJsonLd
				authorName='Steve Han'
				dateModified={date}
				datePublished={date}
				description={subtitle}
				images={[featuredImage]}
				publisherLogo='/static/favicons/android-chrome-192x192.png'
				publisherName='Steve Han'
				title={title}
				// url={url}
			/>
		</>
	);
};

export default ProjectSeo;
