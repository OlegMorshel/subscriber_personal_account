import axios from "axios"
const instance = axios.create({
	baseURL: `http://localhost:5000`,
})

axios.defaults.baseURL = `http://localhost:5000`

export default instance
