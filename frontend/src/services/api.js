import axios from "axios";
import Constants from "expo-constants";
const { manifest } = Constants;
import { useDispatch } from "react-redux";

const ipAddress = manifest.debuggerHost.split(`:`).shift().concat(`:3000`);

const api = axios.create({
	baseURL: `http://${ipAddress}/api`,
});

api.interceptors.request.use(async (config) => {
	const dispatch = useDispatch();
	try {
		dispatch({ type: "setValue", value: true });
	} catch (e) {
		alert("Error response" + e);
	}

	return config;
});

api.interceptors.response.use(async (config) => {
	const dispatch = useDispatch();

	try {
		dispatch({ type: "setValue", value: false });
	} catch (e) {
		alert("Error response" + e);
	}

	return config;
});

export default api;
