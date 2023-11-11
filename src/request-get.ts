import axios from 'axios';
import {Agent} from "https";

const httpsAgent = new Agent({
    rejectUnauthorized: false,
});

export async function getPage(path: string){
    try {
        const response = await axios.get(path, {httpsAgent});
        return response.data;
    } catch (error) {
        return "";
    }
}