import axios from "axios";
import Constants from "expo-constants";
import { useContext, createContext, useState } from "react";
const { manifest } = Constants;

const ipAddress = manifest.debuggerHost.split(`:`).shift().concat(`:3000`);

const api = axios.create({
	baseURL: `http://${ipAddress}/api`,
});

api.interceptors.request.use(async (config) => {
	try {
		setLoading(true);
	} catch (e) {
		alert("Error response" + e);
	}

	return config;
});

api.interceptors.response.use(async (config) => {
	const [loading, setLoading] = useState(null);

	try {
		setLoading(false);
	} catch (e) {
		alert("Error response" + e);
	}

	return config;
});

export default api;
