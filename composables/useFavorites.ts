import type {Building} from "~/types/building";

const FAVORITES_KEY = 'favorites';

export const initializeFavorites = () => {
	if (process.client) {
		const storedFavorites = localStorage.getItem(FAVORITES_KEY);
		if (!storedFavorites) {
			localStorage.setItem(FAVORITES_KEY, JSON.stringify([]));
		}
	}
};

export const getFavorites = (): Building[] => {
	if (process.client) {
		const storedFavorites = localStorage.getItem(FAVORITES_KEY);
		return storedFavorites ? JSON.parse(storedFavorites) : [];
	}
	return [];
};

export const updateFavorites = (product: Building) => {
	if (process.client) {
		let favorites = getFavorites();
		const exists = favorites.some((item) => item.id === product.id);

		if (exists) {
			favorites = favorites.filter((item) => item.id !== product.id);
		} else {
			favorites.push(product);
		}

		localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
	}
};

export const isFavorite = (productId: number): boolean => {
	return process.client ? getFavorites().some((item) => item.id === productId) : false;
};
