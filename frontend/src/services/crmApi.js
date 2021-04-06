import axios from "axios";

const crmApi = axios.create({
  baseURL: `https://www.consultacrm.com.br/api/index.php`,
});

export default crmApi;
