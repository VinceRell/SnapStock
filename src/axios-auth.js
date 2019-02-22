import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost/react-project/api/snapstock-api.php',
    timeout: 1000,
    headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json'
            }
  });

  export default instance;