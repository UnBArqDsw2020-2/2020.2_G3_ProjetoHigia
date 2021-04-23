import axios from "axios";
import loadingStore from "../store/loading";

const crmApi = axios.create({
	baseURL: `https://www.consultacrm.com.br/api/index.php`,
});

crmApi.interceptors.request.use(async (config) => {
	loadingStore.dispatch({ type: "setValue", value: true });

	return config;
});

crmApi.interceptors.response.use(async (config) => {
	loadingStore.dispatch({ type: "setValue", value: false });

	return config;
});

export default crmApi;
