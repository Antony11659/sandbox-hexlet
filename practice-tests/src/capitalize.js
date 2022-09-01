export const capitalize = (text) => {
	if (text === '') {
		return '';
	}
	const capitalizeLetter = text[0].toUpperCase();
	const restText  = text.slice(1);
	return `${capitalizeLetter}${restText}`;
};
