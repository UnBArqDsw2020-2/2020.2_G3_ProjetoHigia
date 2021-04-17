import axios from "axios";
import { useDispatch } from "react-redux";

const crmApi = axios.create({
	baseURL: `https://www.consultacrm.com.br/api/index.php`,
});

function setLoading(loadingValue) {
	const dispatch = useDispatch();
	dispatch({ type: "setValue", value: loadingValue });
}

crmApi.interceptors.request.use(async (config) => {
	try {
		setLoading(true);
	} catch (e) {
		alert("Error response" + e);
	}

	return config;
});

crmApi.interceptors.response.use(async (config) => {
	try {
		setLoading(false);
	} catch (e) {
		alert("Error response" + e);
	}

	return config;
});

export default crmApi;
