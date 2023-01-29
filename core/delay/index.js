export const delay = (ms) => new Promise(resolve => {
	setTimeout(() => { resolve(2); }, ms);
});
