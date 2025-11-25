import axios from "axios"
import URL from "./backendUrl"
import toast from "react-hot-toast";

export const singup = async (formData: any) => {
   try {
     const response = await axios.post(`${URL}/user/register`, formData, {
       withCredentials: true  // singup এও লাগাতে পারো
     });
     console.log(response.data);
     return response.data;
   } catch (error) {
     console.log(error);
   }
}

export const login = async (formData: any) => {
   try {
     const response = await axios.post(`${URL}/user/login`, formData, {
       withCredentials: true 
     });
     console.log(response.data);
     return response.data;
   } catch (error) {
     console.log(error);
   }
}

export const getUser = async () => {
  try {
    const response = await axios.get(`${URL}/user`, {
      withCredentials: true
    });
    //console.log("this is api response", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}


export const courseCreate = async (formData: any,router:any) => {
   try {
     const response = await axios.post(`${URL}/course/create`, formData, {
       withCredentials: true
     });
     if(response.status===200 || response.status===201){
      router.push("/courses")
     }
     
     console.log(response.data);
     return response.data;
   } catch (error) {
     console.log(error);
   }
}

export const getCourses = async ()=>{
  try {
    const response = await axios.get(`${URL}/course`,{
      withCredentials: true
    })
    console.log("this from api.coursedata", response.data)
    return response.data;


  } catch (error) {
    console.log("this is error from front end api get course ",error)
  }
}
export const getSingleCourses = async (id:string)=>{
  try {
    const response = await axios.get(`${URL}/course/details/${id}`,{
      withCredentials: true
    })
    //console.log("this from api.coursedata", response.data)
    return response.data;


  } catch (error: any) {
    console.log("this is error from front end api single  get course ",error)
    return null;
  }
}