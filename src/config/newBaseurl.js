import axios from "axios";


const NewUrl=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})


export default NewUrl;