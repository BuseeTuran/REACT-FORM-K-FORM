import React from 'react'
import { useFormik } from "formik";
import Validation from "./Validation";

function Signup() {

    const { handleChange, values, handleSubmit, handleBlur, errors, touched }=useFormik ({
        initialValues : {
            email: "",
            password: "",
            passwordConfirm: "",

        },

        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Validation,
    })



  return (
    <div>
      <h1>Sign Up</h1>

      <br />

      <form onSubmit={handleSubmit} >
        <label>Email</label>
        <input  type={"email"} name={"email"}  onChange={handleChange} value={values.email} onBlur={handleBlur} required />

        {errors.email && touched.email && <div className={"error"}> {errors.email} </div>}


        <br />
        <br />

        <label>Password</label>
        <input  type={"password"} name={"password"} value={values.password} onChange={handleChange}  onBlur={handleBlur} required  />

        {errors.password && touched.password && <div className={"error"}> {errors.password} </div>}

        <br />
        <br />

        <label>Password Confirm</label>
        <input type={"password"} name={"passwordConfirm"}  value={values.passwordConfirm}  onChange={handleChange}  onBlur={handleBlur} required   />

        {errors.passwordConfirm && touched.passwordConfirm && <div className={"error"}> {errors.passwordConfirm} </div>}

        <br />
        <br />

        <button className='button' type={"submit"}  >Submit</button>

        <br />
        <br />
        <br />
        <br />

        <code>
            {JSON.stringify(values)}
        </code>


      </form>
    </div>
  )
}

export default Signup
