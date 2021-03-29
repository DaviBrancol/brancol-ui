// Modules Import
import React from "react"
import { cleanup, render, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrancolProvider } from "@brancol-ui/react"

// Application Import
import { Button, ButtonProps, ButtonSize, ButtonState, ButtonVariant } from "../src"

// /** @test {Component Button} */

type ButtonTestProps = ButtonProps

const Mocking: React.FC<ButtonTestProps> = ({ children, ...props }) => {
  return (
    <BrancolProvider>
      <Button {...props}>{children}</Button>
    </BrancolProvider>
  )
}

describe("[Component] - Button", () => {
  afterEach(() => {
    cleanup()
  })

  it("should be in normal state", async () => {
    const { findByText } = render(<Mocking>Test Button</Mocking>)

    const btnComponent = await findByText("Test Button")

    await waitFor(() => expect(btnComponent).toBeDefined())
  })

  it("should be in disabled state", async () => {
    const { getByTestId } = render(<Mocking state={ButtonState.disabled}>Test Button</Mocking>)

    const btnComponent = await getByTestId("button")

    await waitFor(() => expect(btnComponent).toHaveClass("opacity-50"))
  })

  it("should be in loading state", async () => {
    const { getByTestId } = render(<Mocking state={ButtonState.submitting}>Test Button</Mocking>)

    const btnComponent = await getByTestId("button")
    const btnLoader = await getByTestId("button-loader")

    await waitFor(() => expect(btnComponent).toHaveClass("opacity-50"))
    await waitFor(() => expect(btnLoader).toBeDefined())
  })

  it("should have outline variant for styling", async () => {
    const { getByTestId } = render(<Mocking variant={ButtonVariant.outline}>Test Button</Mocking>)

    const btnComponent = await getByTestId("button")

    await waitFor(() => expect(btnComponent).toHaveClass("border border-primary-600"))
  })

  it("should have link variant for styling", async () => {
    const { getByTestId } = render(<Mocking variant={ButtonVariant.link}>Test Button</Mocking>)

    const btnComponent = await getByTestId("button")

    await waitFor(() => expect(btnComponent).not.toHaveClass("border bg-primary-600"))
  })

  it("should have small size with string parameter", async () => {
    const { getByTestId } = render(<Mocking size="sm">Test Button</Mocking>)

    const btnComponent = await getByTestId("button")

    await waitFor(() => expect(btnComponent).toHaveClass("px-4 py-2"))
  })

  it("should have small size", async () => {
    const { getByTestId } = render(<Mocking size={ButtonSize.sm}>Test Button</Mocking>)

    const btnComponent = await getByTestId("button")

    await waitFor(() => expect(btnComponent).toHaveClass("px-4 py-2"))
  })

  it("should have base size", async () => {
    const { getByTestId } = render(<Mocking size={ButtonSize.md}>Test Button</Mocking>)

    const btnComponent = await getByTestId("button")

    await waitFor(() => expect(btnComponent).toHaveClass("px-6 py-2"))
  })

  it("should have large size", async () => {
    const { getByTestId } = render(<Mocking size={ButtonSize.lg}>Test Button</Mocking>)

    const btnComponent = await getByTestId("button")

    await waitFor(() => expect(btnComponent).toHaveClass("px-8 py-3"))
  })

  it("should have extra large size", async () => {
    const { getByTestId } = render(<Mocking size={ButtonSize.xl}>Test Button</Mocking>)

    const btnComponent = await getByTestId("button")

    await waitFor(() => expect(btnComponent).toHaveClass("px-10 py-4"))
  })
})
