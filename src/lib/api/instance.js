import axios from 'axios';

const API_URL = 'http://laravel-api.sjahn.gtz.kr/api';

const instance = axios.create({ baseURL: API_URL });

export default instance;
