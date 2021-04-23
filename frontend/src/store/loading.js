import { createStore } from "redux";

const INITIAL_STATE = {
	loading: false,
};

function loading(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "setValue":
			return { loading: action.value };
		default:
			return state;
	}
}

const loadingStore = createStore(loading);

export default loadingStore;
