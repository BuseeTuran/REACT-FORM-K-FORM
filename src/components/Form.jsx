import React from 'react'
import { useFormik } from "formik";



function Form() {

    const {handleChange, handleSubmit, values}=useFormik({
        initialValues : {
            firstName: '  ',
            lastName: '  ',
            email: ' ',
            gender: 'female' ,
            hobies: [ ],
            country: 'Turkey',

        },

        onSubmit: (values) => {
            console.log(values)
        }



    })

    



  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="firstName">First Name</label>
        <input onChange={handleChange}  name="firstName" placeholder='Buse'  id='firstName'  value={values.firstName}  />

        <label htmlFor="lastName">Last Name</label>
        <input  onChange={handleChange}  name='lastName' placeholder='Turan'  id='lastName' value={values.lastName}  />

        <label htmlFor='email' >E-mail</label>
        <input  onChange={handleChange}  name='email' placeholder=' '   id='email'   type='email'  value={values.email} />

        <br />
        <br />


        <span>Female</span>
        <input type={"radio"} name='gender' value={"female"}  checked={values.gender === "female"}  onChange={handleChange} />

        <span>Male</span>
        <input type={"radio"} name='gender' value={"male"}  checked={values.gender === "male"}  onChange={handleChange} />

        <br />
        <br />

        <div>
            <input type={"checkbox"}  name={"hobies"} value={"Football"}  onChange={handleChange}  />
            Football
        </div>

        <div>
            <input type={"checkbox"}  name={"hobies"}  value={"Cinema"}   onChange={handleChange}  />
            Cinema
        </div>

        <div>
            <input type={"checkbox"}  name={"hobies"}  value={"Photography"}   onChange={handleChange}  />
            Photography
        </div>

        <br />
        <br />

        <select name={"country"} value={values.country}  onChange={handleChange} >
            <option value={"turkey"} >Turkey</option>
            <option value={"england"} >England</option>
            <option value={"usa"} >USA</option>
        </select>

        <br />
        <br />

        <button type='submit' >Submit</button>

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

export default Form
