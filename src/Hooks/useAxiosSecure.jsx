import axios from "axios";

const axiosSecure=axios.create({
    baseURL:`${import.meta.env.VITE_BASE_URL}`
})
const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem('token')
        // console.log("req stop by interceptor",token);
        config.headers.authorization=`${token}`
        return config
    },function(err){
        return Promise.reject(err)
    })

    //interceptor 401 and 403 status
    axiosSecure.interceptors.response.use(function(response){
        return response;
    },async( err)=>{
        // console.log('status code of err in ther interceptor',err);
        const status=err.response.status
        // console.log(status);
        if(status===401||status===403){
           await logOut()
           return navigate('/login')
        }
        return Promise.reject(err)
    })
    return axiosSecure  
};

export default useAxiosSecure;