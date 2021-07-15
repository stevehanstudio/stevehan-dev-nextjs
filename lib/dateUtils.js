export const format = (date) => {
  const dt = new Date(date);

	const year = dt.getUTCFullYear();
  const month = dt.toLocaleString('default', { month: 'short' });
  const day = dt.getUTCDate();

	return `${month} ${day}, ${year}`;
}

