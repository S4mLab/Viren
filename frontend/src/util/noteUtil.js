import axios from "axios";
import { Configuration } from "../configuration/configuration";

export const getRecord = async (id) =>{
    try {
    const result = await axios.get(Configuration.backend+"/"+id);
    return result;
    } catch (e) {
        console.log(e);
    }

}