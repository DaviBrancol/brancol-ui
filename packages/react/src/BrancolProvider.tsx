import * as React from "react"

export const BrancolProvider: React.FC = ({ children }) => {
  return (
    <div data-testid="brancol-provider" className="w-full">
      {children}
    </div>
  )
}
