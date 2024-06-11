import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3050/posts/byId/${id}`).then((response) => {
      console.log(response.data)
    });
  }, []);

  return <div>{id}</div>;
};

export default Post;
