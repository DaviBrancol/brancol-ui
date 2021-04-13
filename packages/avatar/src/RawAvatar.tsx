import React from "react"

export interface RawAvatarProps {
  letters: string
}

export const RawAvatar: React.FC<RawAvatarProps> = ({ letters }) => {
  return (
    <div
      data-testid="avatar"
      className="bg-primary-500 w-20 h-20 rounded-full flex justify-center items-center text-white font-bold text-2xl"
    >
      {letters}
    </div>
  )
}
