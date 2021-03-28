// Modules Import
import React, { useState } from "react"
import { sleep } from "@brancol-ui/utils"

// Application Import
import { Button, ButtonSize, ButtonState, ButtonVariant } from "../src"

export default {
  title: "Button",
}

export const Variants = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex space-x-6 w-8/12 justify-center items-center">
        <Button variant={ButtonVariant.solid}>Button</Button>
        <Button variant={ButtonVariant.outline}>Button</Button>
        <Button variant={ButtonVariant.link}>Button</Button>
      </div>
    </div>
  )
}

export const Sizes = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex space-x-6 w-8/12 justify-center items-center">
        <Button size={ButtonSize.sm}>Button</Button>
        <Button size={ButtonSize.md}>Button</Button>
        <Button size={ButtonSize.lg}>Button</Button>
        <Button size={ButtonSize.xl}>Button</Button>
      </div>
    </div>
  )
}

export const States = () => {
  const [btnState, _setBtnState] = useState<ButtonState>(ButtonState.normal)

  async function setBtnState() {
    _setBtnState(ButtonState.submitting)
    await sleep(2000)
    _setBtnState(ButtonState.normal)
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-auto">
        <Button state={ButtonState.normal} onClick={setBtnState}>
          Button
        </Button>
        <Button state={btnState} onClick={setBtnState}>
          Click me
        </Button>
        <Button state={ButtonState.disabled} onClick={setBtnState}>
          Button
        </Button>
      </div>
    </div>
  )
}
