import axios from "axios"
const URL = "http://localhost:8000"
export const over=async(info)=>
{
    try {
        console.log(info)
        await axios.post(`${URL}/api`,info)
    } catch (error) {
        console.log(error)
    }
}