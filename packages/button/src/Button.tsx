// Modules Import
import React, { ButtonHTMLAttributes } from "react"
import { PulseLoader } from "react-spinners"
import cs from "clsx"

export enum ButtonVariant {
  solid = "solid",
  outline = "outline",
  link = "link",
}

export enum ButtonState {
  normal = "normal",
  disabled = "disabled",
  submitting = "submitting",
}

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  full = "full",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  variant?: ButtonVariant
  state?: ButtonState
  size?: ButtonSize
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = ButtonVariant.solid,
  state = ButtonState.normal,
  size = ButtonSize.md,
}) => {
  return (
    <button
      data-testid="button"
      onClick={onClick}
      className={cs("min-w-6 flex justify-center items-center rounded-lg font-bold focus:outline-none", {
        "border border-blue-600 border-solid bg-transparent text-blue-600 hover:bg-blue-100": variant === ButtonVariant.outline,
        "bg-blue-600 text-white hover:bg-blue-700": variant === ButtonVariant.solid,
        "text-blue-600 hover:bg-blue-100": variant === ButtonVariant.link,
        "opacity-50": state !== ButtonState.normal,
        "w-auto text-sm px-4 py-2": size === ButtonSize.sm,
        "w-auto text-base px-6 py-2": size === ButtonSize.md,
        "w-auto text-lg px-8 py-3": size === ButtonSize.lg,
        "w-auto text-xl px-10 py-4": size === ButtonSize.xl,
        "w-full text-lg": size === ButtonSize.full,
      })}
    >
      {state === ButtonState.submitting ? (
        <div data-testid="button-loader">
          <PulseLoader color="#fff" size="8" />
        </div>
      ) : (
        children
      )}
    </button>
  )
}
