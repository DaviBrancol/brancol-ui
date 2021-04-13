// Modules Import
import React from "react"
import { cleanup, render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrancolProvider } from "@brancol-ui/react"

// Application Import
import { Avatar, AvatarProps } from "../src"

// /** @test {Component Avatar} */

const Mocking: React.FC<AvatarProps> = ({ children, ...props }) => {
  return (
    <BrancolProvider>
      <Avatar {...props} />
    </BrancolProvider>
  )
}

describe("[Component] - Avatar", () => {
  afterEach(() => {
    cleanup()
  })

  it("should have single letter for single name", async () => {
    const { getByTestId } = render(<Mocking name="Davi" />)

    const avatarComponent = await getByTestId("avatar")

    expect(avatarComponent).toBeDefined()
    expect(avatarComponent).toHaveTextContent("D")
  })

  it("should have 2 letters for full name", async () => {
    const { getByTestId } = render(<Mocking name="Davi Brancol" />)

    const avatarComponent = await getByTestId("avatar")

    expect(avatarComponent).toBeDefined()
    expect(avatarComponent).toHaveTextContent("DB")
  })

  it("should have 2 letters for full name", async () => {
    const { getByTestId } = render(<Mocking name="Davi Brancol Duarte" />)

    const avatarComponent = await getByTestId("avatar")

    expect(avatarComponent).toBeDefined()
    expect(avatarComponent).toHaveTextContent("DD")
  })
})
