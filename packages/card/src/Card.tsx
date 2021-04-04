// Modules Import
import React from "react"
import cs from "clsx"

export interface CardProps {
  header?: string
  children: React.ReactNode
  style?: Record<string, any>
}

export const Card: React.FC<CardProps> = ({ header, children, ...props }) => {
  return (
    <div data-testid="card" {...props} className={cs("bg-white rounded-2xl shadow-xl flex flex-col p-8 w-full")}>
      {header && (
        <h2 data-testid="card-header" className="text-xl font-bold text-gray-900">
          {header}
        </h2>
      )}
      <div
        className={cs("flex flex-col w-full", {
          "mt-6": header,
        })}
      >
        {children}
      </div>
    </div>
  )
}
