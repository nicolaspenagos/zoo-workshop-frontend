import axios from 'axios';
export class AnimalService {
    baseUrl = 'http://localhost:8080/animals'
    getAll() {
        return axios.get(this.baseUrl).then(res => res.data);
    }
}