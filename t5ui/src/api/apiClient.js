import axios from 'axios';

class ApiClient {
    constructor(baseURL) {
        this.client = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async getTextCorrection(inputText) {
        try {
            const {data} = await this.client.post('/process_text', inputText);
            return data;
        } catch (error) {
            alert(`Произошла ошибка ${error}`)
        }
    }
}

const apiClient = new ApiClient(process.env.REACT_APP_API_BASE_URL);
export default apiClient;
