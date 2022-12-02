import React, { createContext, useContext } from 'react';
import { persist } from 'mst-persist';
import { RootModel } from '../models/root.model';

const defaults = {
	fixtures: {}
};

export const createPersistentAppStore = () => {
	const PersistentAppStore = RootModel.create(defaults);
	persist('AppStore', PersistentAppStore, {
		storage: window.localStorage,
		jsonify: true
	}).then(() => {
		// console.log('PersistentAppStore has been hydrated.');
	}).catch((error) => {
		console.log(error);
		console.log("PersistentAppStore couldn't be hydrated.");
	});

	return PersistentAppStore;
};

const AppStoreContext = createContext(null);

export const AppStoreProvider = ({ children }) => {
	const store = createPersistentAppStore();
	return <AppStoreContext.Provider value={store}>{children}</AppStoreContext.Provider>;
};

export const useAppStore = () => {
	const store = useContext(AppStoreContext);
	if (!store) {
		throw new Error('useAppStore must be used within a AppStoreProvider.');
	}
	return store;
};
