import axios from 'axios';
import React,{useState,useEffect} from 'react'
export default function DataFetching(){
    const [post,setPost]=useState([]);
    useEffect(()=>{
        const apiUrl='http://localhost:3001/Login';
        axios.get(apiUrl).then(response=>{
            setPost(response.data)
        })
        .catch(error=>{
            console.error("Error:",error);
        });
    },[]);
return(
<div>
    <ul>
        {
            post.map((posts)=>(
                <li key={posts.uname}>{posts.uname}</li>

            )
                )
        }
    </ul>
</div>
)
}
