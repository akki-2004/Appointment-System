import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function HelloFS() {
    const[data,setData]=useState("");
    useEffect(()=>{
        const fetchData=async()=>{
            try{

                const response = await axios.get("http://localhost:8000/hey");
                setData(response.data);
            }catch(err){
                console.log(err);
                
            }
        }
        fetchData();
    },[])
 
  return (
    <div>
    {data ? data : "Loading..."}
    </div>
  )
}
