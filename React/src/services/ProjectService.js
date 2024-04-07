// src/services/ProjectService.js
import axios from 'axios';

const API_URL = 'https://localhost:7015/api/Project'; // Adjust as necessary

class ProjectService {
    getProjects() {
        return axios.get(API_URL);
    }
}

export default new ProjectService();
