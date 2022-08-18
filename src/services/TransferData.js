import axios from "axios";
const url1 = "http://localhost:8080/applications/upload_file";

class TransferService{
    makeRequest(article){
        return axios.post(url1,article,{ 
            headers: { 'Content-Type': 'multipart/form-data' },
            // responseType: 'blob'
        });
    }

    getImage(payload){
        return axios.get(payload.url,{
            responseType:'blob'
        })
    }
}

export default new TransferService();