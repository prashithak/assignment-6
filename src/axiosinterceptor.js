import axios from "axios";
const axiosInstance=axios.create({
    baseURL:'http://localhost:3005'
})

axiosInstance.interceptors.request.use((config)=>{
    const accesstoken=sessionStorage.getItem('userToken');
    if(accesstoken)
    {
        if(config)config.headers.token=accesstoken;  
    }
    return config;
},
(error)=>{
return Promise.reject(error);
}
)
export default axiosInstance;


