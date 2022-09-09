import { Axios } from "axios";

export default Axios.create({
    baseUrl : "https://jsonplaceholder.typicode.com"
    // Authorization : 'Bearer '
});