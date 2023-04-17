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
      password: Yup.string().required("Required"),
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
    <>
      <h1>ADD User Member</h1>

      <form className="form" onSubmit={formik.handleSubmit}>
        <input
          name="firstName"
          type="text"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <div className="text-red-500 text-xs pt-1">
          {formik.errors.firstName}
        </div>

        <input
          name="lastName"
          type="text"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        <div className="text-red-500 text-xs pt-1">
          {formik.errors.lastName}
        </div>

        <input
          name="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <div className="text-red-500 text-xs pt-1">{formik.errors.email}</div>

        <input
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <div className="text-red-500 text-xs pt-1">
          {formik.errors.password}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
