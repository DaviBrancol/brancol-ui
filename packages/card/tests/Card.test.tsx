// Modules Import
import React from "react"
import { cleanup, queryByTestId, render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrancolProvider } from "@brancol-ui/react"

// Application Import
import { Card, CardProps } from "../src"

// /** @test {Component Card} */

const Mocking: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <BrancolProvider>
      <Card {...props}>{children}</Card>
    </BrancolProvider>
  )
}

describe("[Component] - Card", () => {
  afterEach(() => {
    cleanup()
  })

  it("should have a header title", async () => {
    const { getByTestId } = render(<Mocking header="Main">Test Inner Content</Mocking>)

    const cardHeaderComponent = await getByTestId("card-header")

    expect(cardHeaderComponent).toBeDefined()
  })

  it("should have no header title", async () => {
    const { container } = render(<Mocking>Test Inner Content</Mocking>)

    const cardHeaderComponent = await queryByTestId(container, "card-header")

    expect(cardHeaderComponent).toBeNull()
  })
})
