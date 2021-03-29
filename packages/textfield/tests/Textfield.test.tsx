// Modules Import
import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { cleanup, render, waitFor, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrancolProvider } from "@brancol-ui/react"

// Application Import
import { TextField } from "../src"

// /** @test {Component TextField} */

const TestValidation = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required."),
  password: Yup.string().email("Invalid email").required("Email is required."),
})

const Mocking: React.FC = () => {
  return (
    <BrancolProvider>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={TestValidation}
        onSubmit={() => {}}
      >
        <Form className="w-full">
          <TextField name="email" label="E-mail" />
          <TextField name="password" label="Password" type="password" />
        </Form>
      </Formik>
    </BrancolProvider>
  )
}

describe("[Component] - TextField", () => {
  afterEach(() => {
    cleanup()
  })

  it("should be defined", async () => {
    const { getByTestId } = render(<Mocking />)

    const emailInput = await getByTestId("textfield-input-email")
    const passwordInput = await getByTestId("textfield-input-password")

    expect(emailInput).toBeDefined()
    expect(passwordInput).toBeDefined()
  })

  it("should be in initial state", async () => {
    const { getByTestId } = render(<Mocking />)

    const emailContainer = await getByTestId("textfield-container-email")
    const emailLabel = await getByTestId("textfield-label-email")

    expect(emailContainer).toHaveClass("border-gray-300")
    expect(emailContainer).not.toHaveClass("border-primary-300")
    expect(emailLabel).toHaveClass("text-lg translate-y-1/2 bg-white px-2 ml-3 text-gray-500")
    expect(emailLabel).not.toHaveClass("text-base -translate-y-1/2 bg-white px-2 ml-3")
  })

  it("should be primary color when focused", async () => {
    const { getByTestId } = render(<Mocking />)

    const emailContainer = await getByTestId("textfield-container-email")
    const emailLabel = await getByTestId("textfield-label-email")
    const emailInput = await getByTestId("textfield-input-email")

    fireEvent.focus(emailInput)

    expect(emailContainer).not.toHaveClass("border-gray-300")
    expect(emailContainer).toHaveClass("border-primary-300")
    expect(emailLabel).not.toHaveClass("text-lg translate-y-1/2 bg-white px-2 ml-3 text-gray-500")
    expect(emailLabel).toHaveClass("text-base -translate-y-1/2 bg-white px-2 ml-3")
  })

  it("should have label on the upper corner after focusing out with content", async () => {
    const { getByTestId } = render(<Mocking />)

    const emailLabel = await getByTestId("textfield-label-email")
    const emailInput = await getByTestId("textfield-input-email")

    fireEvent.focus(emailInput)
    fireEvent.change(emailInput, { target: { value: "brancol@email.com" } })
    fireEvent.focusOut(emailInput)

    expect(emailLabel).toHaveClass("text-base -translate-y-1/2 bg-white px-2 ml-3")
    expect(emailLabel).toHaveClass("text-gray-500")
  })

  it("should have error message when in error state", async () => {
    const { getByTestId } = render(<Mocking />)

    const emailLabel = await getByTestId("textfield-label-email")
    const emailInput = await getByTestId("textfield-input-email")
    const emailError = await getByTestId("textfield-error-email")

    await fireEvent.focus(emailInput)
    await fireEvent.change(emailInput, { target: { value: "brancol" } })
    await fireEvent.focusOut(emailInput)

    await waitFor(() => {
      expect(emailLabel).toHaveClass("text-base -translate-y-1/2 bg-white px-2 ml-3")
      expect(emailLabel).toHaveClass("text-danger-500")
      expect(emailError).toHaveClass("flex")
    })
  })
})
