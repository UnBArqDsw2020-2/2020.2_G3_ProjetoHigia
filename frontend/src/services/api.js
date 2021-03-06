import axios from "axios";
import Constants from "expo-constants";
const { manifest } = Constants;
import loadingStore from "../store/loading";

const ipAddress = manifest.debuggerHost.split(`:`).shift().concat(`:3000`);
// const ipAddress = "52.87.222.22:3000";

const api = axios.create({
	baseURL: `http://${ipAddress}/api`,
});

api.interceptors.request.use(async (config) => {
	loadingStore.dispatch({ type: "setValue", value: true });

	return config;
});

api.interceptors.response.use(
	async (config) => {
		loadingStore.dispatch({ type: "setValue", value: false });

		return config;
	},
	async (error) => {
		loadingStore.dispatch({ type: "setValue", value: false });

		return error;
	}
);

export default api;
