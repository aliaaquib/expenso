import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://expenso.vercel.app',
			lastModified: new Date(),
		},
		{
			url: 'https://expenso.vercel.app',
			lastModified: new Date(),
		},
		{
			url: 'https://expenso.vercel.app/signin',
			lastModified: new Date(),
		},
		{
			url: 'https://expenso.vercel.app/siginup',
			lastModified: new Date(),
		},
		{
			url: 'https://expenso.vercel.app/expenses',
			lastModified: new Date(),
		},
		{
			url: 'https://expenso.vercel.app/income',
			lastModified: new Date(),
		},
		{
			url: 'https://expenso.vercel.app/investments',
			lastModified: new Date(),
		},
		{
			url: 'https://expenso.vercel.app/settings',
			lastModified: new Date(),
		},
	];
}
