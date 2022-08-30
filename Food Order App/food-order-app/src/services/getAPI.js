import axios from "axios";

const AppService = {
    getAPI: (url) => { 
        return axios.get(url).then(response => response.data);
    }
}

export default AppService;