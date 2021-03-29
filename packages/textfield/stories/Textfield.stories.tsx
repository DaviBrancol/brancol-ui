// Modules Import
import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"

// Application Import
import { TextField } from "../src"

export default {
  title: "Text Field",
}

const TestValidation = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required."),
})

export const Input = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-3/12">
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={TestValidation}
          onSubmit={() => {}}
        >
          <Form className="w-full">
            <TextField name="email" label="E-mail" />
          </Form>
        </Formik>
      </div>
    </div>
  )
}
