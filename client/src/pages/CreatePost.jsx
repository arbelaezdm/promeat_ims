import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";


const CreatePost = () => {
  const initialValues = {
    title: "",
    userName: "",
  };

  //yup implematation
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    userName: Yup.string().min(3).max(20).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3030/posts", data).then((response) => {
      console.log("it worked");
    });
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          {/* TITLE */}
          <label htmlFor="">Title:</label>
          <ErrorMessage name="title" component="span" />
          <Field
            autocomplate="off"
            id="inputCreatePost"
            name="title"
            placeholder="Title"
          />

          {/* USER NAME */}
          <label htmlFor="">User Name:</label>
          <ErrorMessage name="userName" component="span" />
          <Field
            autocomplate="off"
            id="inputCreatePost"
            name="userName"
            placeholder="User Name"
          />

          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatePost;
