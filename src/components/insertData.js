import React,{useState,useEffect} from 'react'
import axios from 'axios'
        const apiUrl='http://localhost:3001/Login';

        const InsertData=()=>{
            const [postResponse,setPostResponse]=useState(null);

            const postData={
                uname:"manju",
                pass:"m06"
            };

            useEffect(()=>{
                axios.post(apiUrl,postData)
                .then(response=>{
                    setPostResponse(response.data)
                })
                .catch((error)=>{
                    console.error(error);
                });
            },[]);
        }
        export default InsertData;
        