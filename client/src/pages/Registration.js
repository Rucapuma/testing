import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Registration() {


  function onButtonClickHandler() {
    window.alert('Succsefully Registered')
  };


  const initialValues = {
    username: "",
    password: "",
    Firstname: "",
    Lastname: "",
    Email: "",
    Phonenumber: "",
    Notification: "",
    Relationship: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
    Firstname: Yup.string().min(3).max(15).required(),
    Lastname: Yup.string().min(4).max(20).required(),
    Email: Yup.string().min(3).max(30).required(),
    Phonenumber: Yup.string().min(4).max(30).required(),
    Notification: Yup.string().min(3).max(30).required(),
    Relationship: Yup.string().min(4).max(30).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Enter Username...)"
          />

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autocomplete="off"
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="(Enter Password...)"
          />

          <label>Firstname: </label>
          <ErrorMessage name="Firstname" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="Firstname"
            placeholder="(Enter Firstname...)"
          />

          <label>Lastname: </label>
          <ErrorMessage name="Lastname" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="Lastname"
            placeholder="(Enter Lastname...)"
          />

          <label>Email: </label>
          <ErrorMessage name="Email" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="Email"
            placeholder="(Enter Email...)"
          />

          <label>Phonenumber: </label>
          <ErrorMessage name="Phonenumber" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="Phonenumber"
            placeholder="(Enter Phonenumber...)"
          />

          <label>Notification: </label>
          <ErrorMessage name="Notification" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="Notification"
            placeholder="(Enter Notification...)"
          />

          <label>Relationship: </label>
          <ErrorMessage name="Relationship" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="Relationship"
            placeholder="(Enter Relationship...)"
          />

          <button onClick={onButtonClickHandler} type="submit"> Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
