import fs from 'fs';
import path from 'path';

export const PROJECTS_PATH = path.join(process.cwd(), 'projects');

export const projectFilePaths = fs
	.readdirSync(PROJECTS_PATH)
	// Only include md(x) files
	.filter(path => /\.mdx?$/.test(path));
