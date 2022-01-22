import axios from "axios";

class Api {
	constructor(url){
		this.url = url;
		this.instance = axios.create({
			baseURL: this.url
		})
	}

	getData = async (url, params) => {
		try {
			const response = await this.instance.get(url, params);
			return {
				items: response.data,
				count: response.headers['x-total-count']
			}
		} catch (error) {
			return error;
		}
	}
}

export default Api;