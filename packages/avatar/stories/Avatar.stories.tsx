// Modules Import
import React from "react"

// Application Import
import { Avatar } from "../src"

export default {
  title: "Avatar",
}

export const Basic = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-8/12 flex justify-center items-center">
        <div className="flex flex-col space-y-3 justify-center items-center w-4/12">
          <Avatar name="Brancol" />
          <p className="text-lg font-bold text-primary-500">Brancol</p>
        </div>
        <div className="flex flex-col space-y-3 justify-center items-center w-4/12">
          <Avatar name="Brancol UI" />
          <p className="text-lg font-bold text-primary-500">Brancol UI</p>
        </div>
        <div className="flex flex-col space-y-3 justify-center items-center w-4/12">
          <Avatar name="Brancol UI Kit" />
          <p className="text-lg font-bold text-primary-500">Brancol UI Kit</p>
        </div>
      </div>
    </div>
  )
}

export const FullName = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-3/12">
        <Avatar name="Davi Brancol" />
      </div>
    </div>
  )
}
