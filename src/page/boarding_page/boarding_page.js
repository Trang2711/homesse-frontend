import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postApi from '../../api/postApi';

function BoardingPage() {

    let { id } = useParams();

    const [post, setPost] = useState([]);
    
    useEffect(() => {
        async function fetchPost() {
          try {
            const responce = await postApi.getById(id);
            console.log(responce);
            setPost(responce);
          } catch (error) {
            console.log(error);
          }
        }
    
        fetchPost();
      }, []);
      
    return(
        <h2>`Hello post`</h2>
    )
}

export default BoardingPage;