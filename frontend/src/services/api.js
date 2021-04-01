import axios from 'axios';
import Constants from 'expo-constants';
const { manifest } = Constants;

const ipAddress = manifest.debuggerHost.split(`:`).shift().concat(`:3000`);

const api = axios.create({
  baseURL: `http://${ipAddress}/api`,
});

export default api;
