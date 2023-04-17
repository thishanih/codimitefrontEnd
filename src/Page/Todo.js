import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

export default function Todo() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    enableReinitialize: true,

    //  Yup validation
    validationSchema: Yup.object().shape({
      firstName: Yup.string().min(2).max(100).required("Required"),
      lastName: Yup.string().min(2).max(100).required("Required"),
      email: Yup.string().email().required("Required"),
      password: Yup.string().min(8).max(30).required("Required"),
    }),

    async onSubmit(values) {
      await axios
        .post("http://localhost:5000/api/user/addUser", values)
        .then((response) => {
          console.log("🚀 ~ file: Todo.js:28 ~ .then ~ response:", response);
        })
        .catch((error) => {
          //   toast.error(error.response.data);
        });
    },
  });
  return (
    <div div className="container">
      <h1>ADD User Member</h1>

      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="Enter email"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />

          <div className="text-danger">{formik.errors.firstName}</div>
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Enter email"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />

          <div className="text-danger">{formik.errors.lastName}</div>
        </div>

        <div className="form-group">
          <label> Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />

          <div className="text-danger">{formik.errors.email}</div>
        </div>

        <div className="form-group">
          <label> password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />

          <div className="text-danger">{formik.errors.password}</div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
