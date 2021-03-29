// Modules Imports
import React, { useState } from "react"
import { Field, FieldAttributes } from "formik"
import cs from "clsx"

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export interface TextFieldInnerProps {
  field: FieldAttributes<any>
  meta: {
    error: string
    touched: boolean
  }
}

export const TextField = ({ label, name, disabled, ...rest }: TextFieldProps) => {
  const [isFocused, setFocused] = useState(false)

  return (
    <Field name={name}>
      {({ field, meta }: any) => (
        <div className="flex flex-col mt-5">
          <div
            data-testid={`textfield-container-${name}`}
            className={cs("relative w-full bg-transparent border rounded-sm", {
              "border-primary-300": isFocused && !meta.error,
              "border-danger-300": meta.error && meta.touched,
              "border-gray-300": !isFocused,
            })}
          >
            <label
              data-testid={`textfield-label-${name}`}
              htmlFor={name}
              className={cs("transition-all pointer-events-none absolute transform", {
                "text-base -translate-y-1/2 bg-white px-2 ml-3": isFocused || field.value,
                "text-lg translate-y-1/2 bg-white px-2 ml-3": !isFocused && !field.value,
                "text-primary-500": isFocused && !meta.error,
                "text-danger-500": meta.error && meta.touched,
                "text-gray-500": !isFocused,
              })}
            >
              {label}
            </label>
            <input
              data-testid={`textfield-input-${name}`}
              className="px-5 py-4 w-full"
              {...field}
              {...rest}
              id={name}
              disabled={disabled}
              onFocus={() => setFocused(true)}
              onBlur={(e) => {
                field.onBlur(e)
                setFocused(false)
              }}
            />
          </div>
          <div
            data-testid={`textfield-error-${name}`}
            className={cs("mt-1 text-danger-500", {
              hidden: !meta.error || !meta.touched,
              flex: meta.error && meta.touched,
            })}
          >
            {meta.error}
          </div>
        </div>
      )}
    </Field>
  )
}
