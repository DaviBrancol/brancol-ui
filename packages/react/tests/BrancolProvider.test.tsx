// Modules Import
import React from "react"

import "@testing-library/jest-dom"
import { cleanup, render, waitFor } from "@testing-library/react"

// Application Import
import { BrancolProvider } from "../src"

// /** @test {Main Provider} */

const Mocking: React.FC = ({ children }) => {
  return <BrancolProvider>{children}</BrancolProvider>
}

describe("[BrancolProvider] - Main Provider", () => {
  afterEach(() => {
    cleanup()
  })

  it("should be defined", async () => {
    const { findByTestId } = render(<Mocking />)

    const mainProvider = await findByTestId("brancol-provider")

    await waitFor(() => expect(mainProvider).toBeDefined())
  })
})
