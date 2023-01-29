export const validateField = (value, message, intl) => {
	let error;
	if (!value) {
		error = message || intl.formatMessage({id: 'errorRequired'});
	}
	return error;
};

export const validateFieldBetween = (
	value,
	min,
	max,
	type,
	intl
) => {
	let error;
	if (typeof value !== 'number' || (typeof value === 'number' && (value < min || value > max))) {
		error = intl.formatMessage({id: 'errorLength'}, { min, max, type: type || intl.formatMessage({id: 'errorRequired'}).toLowerCase() });
	}
	return error;
};

export const validateEmail = (value, message, intl) => {
	const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let error;
	if (!regEx.test(value)) {
		error = message || intl.formatMessage({id: 'errorEmail'});
	}
	return error;
};

const isEmpty = (value) => {
	return typeof value !== 'string' || value.length === 0;
}

export const validator = {
	containsSingleHyphen: (value) => value.indexOf('-') > -1,
	isRequired: (value) => !isEmpty(value),
	isNIF: (value) => /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i.test(value),
	isNIE: (value) => /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i.test(value),
	isEmail: (value) => {
		const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regEx.test(value);
	},
	isLink: (value) => {
		const regEx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
		return isEmpty(value) || regEx.test(value);
	},
	checkLength: (
		minLength,
		maxLength,
		value
	) => value.length >= minLength && value.length <= maxLength,
	isNumeric: (value) => {
		const regEx = /^\d+$/;
		return regEx.test(value);
	},
	encodeObjectToUri: (obj) => {
		if (Object.keys(obj).length > 0) {
			return Object.keys(obj).filter(k => obj[k] !== '').map((k) => {
				const values = obj[k];
				if (Array.isArray(values)) {
					return values.map(value => `&${encodeURIComponent(k)}[]=${encodeURIComponent(value)}`);
				}
				return `&${encodeURIComponent(k)}=${encodeURIComponent(values)}`;
			}).join('')
				.replace(/,/g, '');
		}
		return '';
	},
	fulfillRequirements: (action, obj) => {
		let fulfillRequirements = true;
		if (typeof action?.require === 'object' && obj !== undefined) {
			fulfillRequirements = Object.keys(action.require)
				.every((prop) => {
					if (Array.isArray(action.require?.[prop])) {
						return (action.require?.[prop]).some(p => p === obj[prop]);
					}
					return obj[prop] === action.require?.[prop];
				});
		}
		return fulfillRequirements;
	}
};

export default validator;
