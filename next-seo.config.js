const title = 'Steve Han Developer Projects Portfolio';
const description = 'My website portfolio website showcasing my work software development, focusing on front end web development.';

const SEO = {
	title,
	description,
	canonical: 'https://stevehan.dev',
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://stevehan.dev',
		title,
		description,
		images: [
			{
				url: 'https://stevehan.dev/favicon.ico',
				alt: title,
			},
		],
	},
	twitter: {
		handle: '@stevehanstudio',
		site: '@stevehanstudio',
		cardType: 'summary_large_image',
	},
};

export default SEO;
